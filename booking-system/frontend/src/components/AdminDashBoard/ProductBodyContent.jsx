
import React, { useEffect, useState } from 'react';

const ProductBodyContent = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${apiBase}/packages`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.errorMessage || 'Failed to fetch packages');
        setPackages(data.packages || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [apiBase]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Packages</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Add New Package</button>
      </div>
      {loading ? (
        <div className="text-blue-500">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-100 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left text-blue-700">ID</th>
                <th className="px-4 py-2 text-left text-blue-700">Name</th>
                <th className="px-4 py-2 text-left text-blue-700">Price</th>
                <th className="px-4 py-2 text-left text-blue-700">Style</th>
                <th className="px-4 py-2 text-left text-blue-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {packages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-400">No packages found.</td>
                </tr>
              ) : (
                packages.map((pkg, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50">
                    <td className="px-4 py-2">{pkg.packageId}</td>
                    <td className="px-4 py-2">{pkg.packageName}</td>
                    <td className="px-4 py-2">{pkg.price}</td>
                    <td className="px-4 py-2">{pkg.style}</td>
                    <td className="px-4 py-2">{pkg.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductBodyContent;