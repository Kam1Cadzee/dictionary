import React, {useEffect} from 'react';
import { notification } from 'antd';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LayoutPage from './pages/LayoutPage';
import {ApolloProvider, useMutation, useQuery,} from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import QUERIES from './graphql/queries';
import { ApolloLink, from } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { onError } from "@apollo/link-error";
import {IErrorDev, IErrorProd} from './typings/IError';
import {ApolloClient, gql} from 'apollo-boost';
import {isDevelopment} from './utils/env';
import FRAGMENTS from './graphql/fragments';

console.log(process.env)
const linkError = onError(({ graphQLErrors = [], networkError, operation, forward, response }) => {
  console.log({ graphQLErrors, networkError, operation, forward, response });
  console.log(process.env.NODE_ENV);
  if(isDevelopment) {
    graphQLErrors.map((e: IErrorDev | any) => {
      notification.error({
        message: e.message
      })
    })
  }
  else {
    graphQLErrors.map((e: IErrorProd | any) => {
      notification.error({
        message: e.message
      })
    })
  }
});

const authLink: any = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => ({ headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`, // however you get your token
      ...headers
    }}));
  return forward(operation);
});
const link = new HttpLink({
  uri: isDevelopment ? 'http://localhost:3005/graphql' : 'https://englishnew.herokuapp.com/graphql',
});

const cache: any = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  link: from([
    authLink,
    linkError,
    link,
  ]) as any,
  connectToDevTools: true,
  defaultOptions: {
    mutate: {
      errorPolicy: 'ignore'
    },
    query: {
      errorPolicy: 'ignore'
    }
  },
  resolvers: {
    Query: {
      getEntity: (_, {id}, {cache, getCacheKey}) => {
        const res = cache.readFragment({
          id: getCacheKey({__typename: "Entity", id}),
          fragment: gql`
              fragment entity on Entity {
                  ${FRAGMENTS.entity}
              }
          `
        });
        return res;
      },
    }
  },
});

cache.writeData({
  data: {
    isAuth: false,
    currentUser: null,
    step: 0
  },
});
function App() {
  const Content = () => {
    const [refresh] = useMutation(QUERIES.REFRESH_USER, {
      update: (proxy, mutationResult) => {
        proxy.writeData({
          data: {
            isAuth: true,
            currentUser: mutationResult.data.refreshUser
          }
        });
      },
    });

    useEffect(() => {
      refresh();
    }, []);

    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={AuthPage}/>
            <Route path="/main/:item?" component={LayoutPage}/>
          </Switch>
      </div>
    )
  };

  return (
    <ApolloProvider client={client as any}>
      <HashRouter basename="/dictionary">
        <Content/>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
