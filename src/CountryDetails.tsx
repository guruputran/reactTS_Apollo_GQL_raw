import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap"
import { gql,useQuery} from '@apollo/client';
// write a GraphQL query that asks for names and codes for all countries
const Country_details = gql`
    query getCty($code: ID!){
    country(code: $code) {
      currency
      name
      languages{
        native
      }
      capital
      continent{
        name
      }
      states{
        name
      }
      phone
    }

  }`;

export default function CountryDetails(props) {

    useEffect(() => {
     setCotry(props.country)
    }, [props])

   
    const [cotry, setCotry] = useState("IN");
    const {data} = useQuery(Country_details, {variables: {code: cotry}});
    return (
        <>            
    {data &&
    <>
    <h2>{data.country.name}</h2>
    <Table responsive>

    <thead>
        <tr>
            <th>Capital</th>
            <th>Currency</th>
            <th>Continent</th>
            <th>Phone</th>
            <th>Languages</th>
            <th>States</th>
           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{data.country.capital}</td>
            <td>{data.country.currency}</td>
            <td>{data.country.continent.name}</td>
            <td>+{data.country.phone}</td>
                <td><h6>There are {data.country.languages.length} languages</h6>
                {data.country.languages.map((el, idx) =>{
             return <div key={idx}>{idx+1}.&nbsp; {el.native}, </div>
            })}</td>
            <td><h6>There are {data.country.states.length} states</h6>
                {data.country.states.map((el, idx) =>{
              return <div key={idx}>{idx+1}.&nbsp; {el.name}, </div>
            })}</td>
           
     
        </tr>
       
    </tbody>
</Table>
</>
}
</>
        
    )
}
