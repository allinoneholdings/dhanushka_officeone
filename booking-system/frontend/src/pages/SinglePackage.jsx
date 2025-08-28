import React from "react";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import SinglePackageBody from "../components/PackageSub/SinglePackageBody";

const SinglePackage = () => {
  return (
    <div>
      {/* NAvigation Bar  */}
      <NavBar />
      <div
        className="relative isolate px-6 pt-18 lg:px-8 bg-blue-300"
        // style={{ backgroundImage: `url(${coverImg})` }}
      ></div>

      {/* Body Contain  */}
      <SinglePackageBody/>

      {/* Footer Bar  */}
      <Footer
        email="example.com"
        number="0766640384"
        address="No/21 Kandy,Kurunagala Road,Madilmada"
      />
    </div>
  );
};

export default SinglePackage;
