import React from 'react';
import {Redirect, RouteComponentProps} from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';

//only page component
const withProtected = (Component: any) => {
  return (props: RouteComponentProps) => {
    const {data} = useQuery(QUERIES.IS_AUTH, {
      fetchPolicy: 'cache-only'
    });

    if (!(data && data.isAuth)) {
      return <Redirect to={{
        pathname: '/',
        state: {
          from: props.location.pathname
        }
      }}/>;
    }

    return <Component {...props} />;
  };
};

export default withProtected;
