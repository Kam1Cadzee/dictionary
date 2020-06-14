import React from 'react';
import {Redirect, RouteComponentProps} from 'react-router';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';

//only page component
const withAuthRedirect = (Component: any) => {
  return (props: RouteComponentProps | any) => {
    const {data} = useQuery(QUERIES.IS_AUTH, {
      fetchPolicy: 'cache-only',
      onError: error => {},

    });

    let redirect = '/main/words';
    if(props.location.state && props.location.state.from) {
      redirect = props.location.state.from;
    }
    if (data && data.isAuth) {
      return <Redirect to={redirect}/>;
    }

    return <Component {...props} />;
  };
};

export default withAuthRedirect;
