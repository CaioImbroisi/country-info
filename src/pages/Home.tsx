import React from "react";
import Header from "../common/ui/Header.jsx"
import SearchCountries from "../common/ui/components/SearchCountries.tsx"
import Footer from "../common/ui/Footer.jsx"

const Home = () => {
    return (
      <>
        <Header />
          <body className="p-10 bg-gray-800 ml-20 mr-20 rounded-xl">
            <SearchCountries />
          </body>
        <Footer />
        </>
    );
  }
  
  export default Home;