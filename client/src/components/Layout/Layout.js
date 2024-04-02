import React from 'react'
import Footer from './Footer';
import Header from './Header';
import {Helmet} from "react-helmet";

const Layout =({children}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommerce App - AB. </title>
                
      </Helmet>
        <Header/>
        <main style={{minHeight:'80vh'}}>
          {children}
        </main>
        <Footer/>
        
    </div>
  );
};

export default Layout;