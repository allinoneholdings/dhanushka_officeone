import React, { useEffect, useState } from "react";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import Card from "../components/CustomCard/PackageCard";
import imgCard from "../assets/CardImg.webp";


const PackagePage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${apiBase}/packages`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.errorMessage || "Failed to fetch packages");
        setPackages(data.packages || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [apiBase]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchLoading(true);
    setSearchError("");
    setSearchResult([]);
    try {
      const res = await fetch(`${apiBase}/package/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageName: search })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.errorMessage || "Search failed");
      setSearchResult(data.packages || []);
    } catch (err) {
      setSearchError(err.message);
    } finally {
      setSearchLoading(false);
    }
  };


  return (
    <div>
      {/* Navigation Bar  */}
      <NavBar />
      <div className="relative isolate px-6 pt-18 lg:px-8 bg-blue-300"></div>

      {/* Search Bar  */}
      <div>
        <form className="max-w-md mx-auto" onSubmit={handleSearch}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full mt-5 mb-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Packages..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              disabled={searchLoading}
            >
              {searchLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      </div>

      {/* Search Results */}
      {search && (
        <div className="max-w-5xl text-center mx-auto mt-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Search Results</h3>
          {searchLoading ? (
            <div className="text-blue-500">Searching...</div>
          ) : searchError ? (
            <div className="text-red-500">{searchError}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {searchResult.length === 0 ? (
                <div className="text-gray-400 col-span-3">No packages found.</div>
              ) : (
                searchResult.map(pkg => (
                  <Card
                    key={pkg.packageId}
                    id={pkg.packageId}
                    name={pkg.packageName}
                    info={`Price: ${pkg.price}, Style: ${pkg.style}, Status: ${pkg.status}`}
                    img={imgCard}
                  />
                ))
              )}
            </div>
          )}
        </div>
      )}


      {/* Package List  */}
      {!search && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-10 mr-10 mt-8">
          {loading ? (
            <div className="text-blue-500 col-span-3">Loading...</div>
          ) : error ? (
            <div className="text-red-500 col-span-3">{error}</div>
          ) : packages.length === 0 ? (
            <div className="text-gray-400 col-span-3">No packages found.</div>
          ) : (
            packages.map(pkg => (
              <Card
                key={pkg.packageId}
                id={pkg.packageId}
                name={pkg.packageName}
                info={`Price: ${pkg.price}, Style: ${pkg.style}, Status: ${pkg.status}`}
                img={imgCard}
              />
            ))
          )}
        </div>
      )}

      {/* Footer Bar  */}
      <Footer email="example.com" number="0766640384" address="No/21 Kandy,Kurunagala Road,Madilmada"/>
    </div>
  );
};

export default PackagePage;
