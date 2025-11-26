import React from "react";
import { User } from "lucide-react";

const Profile = ({ data }) => {
  const profile = data.profile; 

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
      <div className="flex items-center mb-4">
        <User className="text-blue-600 mr-3" size={32} />
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* FOTO */}
        <img
          src={profile.photo_url}
          alt={profile.full_name}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />

        {/* INFORMASI */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {profile.full_name}
          </h3>

          <p className="text-lg text-gray-600 mb-2">NIM: {profile.nim}</p>
          <p className="text-gray-600 mb-2">Prodi: {profile.prodi}</p>
          <p className="text-gray-600 mb-4">Angkatan: {profile.angkatan}</p>

          {/* HEADLINE */}
          <p className="text-lg font-semibold text-blue-700 mb-2">
            {profile.headline}
          </p>

          {/* BIO SINGKAT */}
          <p className="text-gray-700 leading-relaxed">{profile.short_bio}</p>

          {/* PORTFOLIO LINK */}
          {profile.portfolio_url && (
            <a
              href={profile.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium mt-3 inline-block hover:underline"
            >
              Lihat Portfolio →
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
