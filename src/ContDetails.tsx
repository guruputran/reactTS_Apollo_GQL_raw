import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap"
import { gql,useQuery} from '@apollo/client';
import Flag from "react-world-flags"

const Cont_details = gql`
query getCnt($code: ID!){
    continent(code: $code) {
     name
      countries {
        name
        emoji
        code
      } 
    }
  
  }`;


export default function ContDetails(props) {
    useEffect(() => {
     setConts(props.cont)
    }, [props])
   const [conts, setConts] = useState("AS");
   const {data} = useQuery(Cont_details, {variables: {code: conts}});

   return (
    <>            
{data &&
<>
<h2>{data.continent.name}</h2>
<Table responsive>

<thead>
    <tr>    
        <th>Country name with flags</th>      
       
    </tr>
</thead>
<tbody>
    <tr>
        <td>        
            {data.continent.countries.map((el, idx) =>{
          return (
            <>
        <div className="mixup"> 
            <div className="contentA" key={idx}>{idx+1}.&nbsp; {el.name} 
             </div>  
            <div className="contentB">             
              <Flag code={el.code} height="32" />       
                   
          </div>   
          </div>
          </>       
            )
        })}</td> 
    </tr>
   
</tbody>
</Table>
</>
}
</>    
)
}
