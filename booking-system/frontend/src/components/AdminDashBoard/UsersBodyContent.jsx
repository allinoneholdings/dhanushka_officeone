
import React, { useEffect, useState } from 'react';

const UsersBodyContent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${apiBase}/users`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.errorMessage || 'Failed to fetch users');
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [apiBase]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Users</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Add User</button>
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
                <th className="px-4 py-2 text-left text-blue-700">User ID</th>
                <th className="px-4 py-2 text-left text-blue-700">User Type</th>
                <th className="px-4 py-2 text-left text-blue-700">Name</th>
                <th className="px-4 py-2 text-left text-blue-700">Status</th>
                <th className="px-4 py-2 text-left text-blue-700">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-400">No users found.</td>
                </tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50">
                    <td className="px-4 py-2">{user.userId}</td>
                    <td className="px-4 py-2">{user.userType}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.status}</td>
                    <td className="px-4 py-2">{new Date(user.created_at).toLocaleString()}</td>
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

export default UsersBodyContent;
