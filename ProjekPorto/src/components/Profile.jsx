import React from "react";
import { User } from "lucide-react";

const Profile = ({ data }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
      <div className="flex items-center mb-4">
        <User className="text-blue-600 mr-3" size={32} />
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={data.photo}
          alt={data.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h3>
          <p className="text-lg text-gray-600 mb-4">NIM: {data.nim}</p>
          <p className="text-gray-700 leading-relaxed">{data.profile}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
