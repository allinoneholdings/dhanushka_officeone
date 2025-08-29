import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import DashboardBodyContent from "../../components/AdminDashBoard/DashboardBodyContent";
import ProductBodyContent from "../../components/AdminDashBoard/ProductBodyContent";
import BranchBodyContent from "../../components/AdminDashBoard/BranchBodyContent";
import BookingListBodyContent from "../../components/AdminDashBoard/BookingListBodyContent";
import UsersBodyContent from "../../components/AdminDashBoard/UsersBodyContent";


const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let role = "Unknown";
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role || decoded.userRole || decoded.type || "Unknown";
    } catch (e) {
      role = "Invalid token";
    }
  } else {
    role = "No token found";
  }

  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const renderBodyContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <DashboardBodyContent />;
      case 'users':
        return <UsersBodyContent />;
      case 'packages':
        return <ProductBodyContent />;
      case 'branches':
        return <BranchBodyContent />;
      case 'bookings':
        return <BookingListBodyContent />;
      default:
        return <DashboardBodyContent />;
    }
  };

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col py-8 px-4">
        <div className="mb-10 text-center">
          <span className="text-2xl font-bold text-blue-700">Admin Panel</span>
          <div className="mt-2 text-sm text-blue-400">Role: <span className="font-semibold">{role}</span></div>
        </div>
        <nav className="flex flex-col gap-2">

        
          <button
            className={`text-left px-4 py-2 rounded-lg font-medium transition ${activeMenu === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-blue-700 hover:bg-blue-100'}`}
            onClick={() => setActiveMenu('dashboard')}
          >
            Dashboard
          </button>
          
          {(role === 'SuperAdmin') && (
          <>
            <button
              className={`text-left px-4 py-2 rounded-lg font-medium transition ${activeMenu === 'packages' ? 'bg-blue-100 text-blue-700' : 'text-blue-700 hover:bg-blue-100'}`}
              onClick={() => setActiveMenu('packages')}
            >
              Packages
            </button>
            <button
              className={`text-left px-4 py-2 rounded-lg font-medium transition ${activeMenu === 'users' ? 'bg-blue-100 text-blue-700' : 'text-blue-700 hover:bg-blue-100'}`}
              onClick={() => setActiveMenu('users')}
            >
              Users
            </button>
            <button
              className={`text-left px-4 py-2 rounded-lg font-medium transition ${activeMenu === 'branches' ? 'bg-blue-100 text-blue-700' : 'text-blue-700 hover:bg-blue-100'}`}
              onClick={() => setActiveMenu('branches')}
            >
              Branches
            </button>
          </>
          )}

          <button
            className={`text-left px-4 py-2 rounded-lg font-medium transition ${activeMenu === 'bookings' ? 'bg-blue-100 text-blue-700' : 'text-blue-700 hover:bg-blue-100'}`}
            onClick={() => setActiveMenu('bookings')}
          >
            Bookings
          </button>
        </nav>
        <div className="mt-auto pt-8">
          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-end mb-4 md:hidden">
          <button
            onClick={handleLogout}
            className="py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[60vh]">
          {renderBodyContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
