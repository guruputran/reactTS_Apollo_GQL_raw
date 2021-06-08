import React, {useState} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, gql,useQuery} from '@apollo/client';
import ContDetails from './ContDetails';

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
{
  continents {
    name
    code
    countries {
      name
      capital
    }
  }
}`;

const ContinentSelect = (): JSX.Element => {
    const [cont, setCont] = useState("AS");
    const {data, loading, error} = useQuery(LIST_CONTINENTS);
      if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }

    const handleCont =(event)=>{
        setCont(event.target.value)
      }  
    return (
 <>
      <select className="select" value={cont} onChange={handleCont}>
        {data.continents.map((ct,idx) => (
          <option key={idx} value={ct.code}>
            {ct.name}
          </option>
        ))}
      </select>
<ContDetails cont={cont}/> 
      </> 
    );
  }
  
  export default ContinentSelect;