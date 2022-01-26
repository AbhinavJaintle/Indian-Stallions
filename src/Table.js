import React from 'react'
import JsonData from './data.json'
import Footer from './Footer'
import Header from './Header'
 function Table(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Num}</td>
                    <td>{info.Company}</td>
                    <td>{info.Sector}</td>
                    <td>{info.Valuation}</td>
                    <td>{info.Entry}</td>
                    <td>{info.Location}</td>
                    <td>{info.SelectInvestors}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <Header />
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Company</th>
                    <th>Sector</th>
                    <th>Valuation ($B)</th>
                    <th>Entry</th>
                    <th>Location</th>
                    <th>Select Investors</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
            <Footer />
             
        </div>
    )
 }
 
 export default Table;