/** @format */

import React from 'react';
import {Container, Button, Row, Col} from "react-bootstrap"
import {ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery} from '@apollo/client';
import ContinentSelect from './ContinentSelect';
import CountrySelect from './CountrySelect';
import './App.css'


const App = (): JSX.Element => {

  return (
    <>
<h1 style={{textAlign: "center"}}>React Typescript GraphQL example</h1>
<Row className="main-row">

  <Col>
  <h2>Country Selection</h2> 
      <CountrySelect />
      </Col>
      <Col>
      <h2>Continent Selection</h2> 
      <ContinentSelect />
      </Col>
      </Row>
      </>
  );
}

export default App;
