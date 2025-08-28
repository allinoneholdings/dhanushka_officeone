import React from "react";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import Card from "../components/PackageCard/Card";
import imgCard from "../assets/CardImg.webp";

const PackagePage = () => {
  const products = [
    {
      id: 1,
      name: "Package 01",
      description: "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${imgCard}`,
    },
    {
      id: 2,
      name: "Package 02",
      description: "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${imgCard}`,
    },
    {
      id: 3,
      name: "Package 03",
      description: "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${imgCard}`,
    },
    {
      id: 4,
      name: "Package 04",
      description: "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${imgCard}`,
    },
    {
      id: 5,
      name: "Package 05",
      description: "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby",
      img: `${imgCard}`,
    },
  ];

  return (
    <div>
      {/* Navigation Bar  */}
      <NavBar />
      <div
        className="relative isolate px-6 pt-18 lg:px-8 bg-blue-300"
        // style={{ backgroundImage: `url(${coverImg})` }}
      ></div>

      {/* Search Bar  */}
      <div>
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full mt-5 mb-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Packages..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Package List  */}
      <div className="grid grid-cols-3 gap-4 ml-10">
        {products.map((product) => (
          <Card
            id={product.id}
            name={product.name}
            info={product.description}
            img={product.img}
          />
        ))}
      </div>

      {/* Footer Bar  */}
      <Footer email="example.com" number="0766640384" address="No/21 Kandy,Kurunagala Road,Madilmada"/>

    </div>
  );
};

export default PackagePage;
