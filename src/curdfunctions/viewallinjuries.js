import { connect } from "react-redux";
import { findAllInjueries } from "../action/actionfun";
import { useEffect } from "react";
import { Card,CardContent } from "@mui/material";



function ViewAllInjuries(props){
    useEffect(()=>{
        props.mydispatch(findAllInjueries())
        
    },[])
    return <><div style={{position:'relative',top:-100,left:200}}>
         <h3>Enterd Details</h3>
      <Card  sx={{width:400,top:0}}>
     
                <CardContent> 
    <ul>
        {
        props.data.map((e)=>{
            return <li>{e.personName} {e.personAddress} {e.mobile} {e.injuryDate}</li>
        })
    }
        </ul>
        </CardContent>
        </Card>
        </div>
       
                <h4>
                 Details Enterd
                </h4>
                <table className='table table-bordered table-light table-sm table-hover'>
                  <thead>
                    <tr>
                      
                      <th>PersonName</th>
                      <th>PersonAddress</th>
                      <th>Mobile </th>
                      <th>Injury Date</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  </tbody>
                </table>
            
          </>
}
        const mapStateToProps=state=>({
            data:state
        })
        
        const mapDispatchToProps=dispatch=>({
            mydispatch:dispatch
        })
    
        export default connect(mapStateToProps,mapDispatchToProps)(ViewAllInjuries)
