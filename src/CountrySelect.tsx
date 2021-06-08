import React, {useState} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, gql,useQuery} from '@apollo/client';
import CountryDetails from './CountryDetails';

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

const CountrySelect = (): JSX.Element => {
    const [country, setCountry] = useState('IN');
    const {data, loading, error} = useQuery(LIST_COUNTRIES);
      if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }

    const handleCountry =(event)=>{
        setCountry(event.target.value)
      }  
    return (
 <>
      <select className="select" value={country} onChange={handleCountry}>
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
<CountryDetails country={country}/>

      </>
    );
  }
  
  export default CountrySelect;