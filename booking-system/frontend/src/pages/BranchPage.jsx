import React from 'react'
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const BranchPage = () => {
  return (
    <div>
      {/* Navigation BAr  */}
      <NavBar />
      <div className="relative isolate px-6 pt-18 lg:px-8 bg-blue-300" 
      // style={{ backgroundImage: `url(${coverImg})` }}
      ></div>

      {/* Body of Page  */}
      <h1>Branch Page</h1>

      {/* Footer Bar  */}
      <Footer email="example.com" number="0766640384" address="No/21 Kandy,Kurunagala Road,Madilmada"/>

    </div>
  )
}

export default BranchPage