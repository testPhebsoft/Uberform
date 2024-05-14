// @flow
import React,{useState} from 'react';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import Pair from '../images/pair';



const Home = () => {
  
  return(
 <>

<Helmet>
      <style>
      {`
        nav {
          background-color:black;
          color:white;
          width:100vw;
          padding: 20px;
          font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        h1{
          text-align: center;
        }

        .container{
          margin: 0 auto;
          width: 35%;
        }
        svg{
 
          width:100%;
        
        }
        
      
      `}
      </style>
    </Helmet>
 <nav>Uber</nav>


 <div className='container'>
<Pair/>
  <h1 >Uber Insurance quote <br /> in under 2 minutes</h1>

 </div>

 
 </>
  )


     
      }

export default Home;
