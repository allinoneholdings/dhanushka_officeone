import React from "react";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import BranchCard from "../components/CustomCard/BranchCard";
import branchImg from "../assets/CardImg.webp";

const BranchPage = () => {
  const branches = [
    {
      id: 1,
      name: "Branch 01",
      features:
        "AC,Unlimited Wifi,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${branchImg}`,
      price: "233",
      style: "Huorly"
    },
    {
      id: 2,
      name: "Branch 02",
      features:
        "Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${branchImg}`,
      price: "423",
      style: "Monthly"
    },
    {
      id: 3,
      name: "Branch 03",
      features:
        "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${branchImg}`,
      price: "1328",
      style: "Per Days"
    },
  ];

  return (
    <div>
      {/* Navigation BAr  */}
      <NavBar />
      <div
        className="relative isolate px-6 pt-18 lg:px-8 bg-blue-300"
        // style={{ backgroundImage: `url(${coverImg})` }}
      ></div>

      {/* Body of Page  */}
      {branches.map((branch) => (
        <BranchCard
          id={branch.id}
          name={branch.name}
          feature={branch.features}
          img={branch.img}
          price={branch.price}
          style={branch.style}
        />
      ))}

      {/* Footer Bar  */}
      <Footer
        email="example.com"
        number="0766640384"
        address="No/21 Kandy,Kurunagala Road,Madilmada"
      />
    </div>
  );
};

export default BranchPage;
