import React from "react";
import data from "./data/dataMahasiswa.json";
import "./App.css";

function App() {
  const profile = data?.profile || {};

  return (
    <div className="page">
      {/* HEADER CARD */}
      <div className="header-card">
        <img
          src={profile.photo_url || "https://via.placeholder.com/120"}
          className="profile-photo"
          alt="profile"
        />

        <div className="header-info">
          <h1>{profile.full_name}</h1>
          <p className="headline">{profile.headline}</p>

          <div className="tag-list">
            <span className="tag">{profile.nim}</span>
            <span className="tag">{profile.prodi}</span>
            <span className="tag">Angkatan {profile.angkatan}</span>
          </div>

          <div className="sub-info">
            <span>📍 {profile.location}</span>
            <span>👁 {data?.statistics?.views_count} views</span>
          </div>

          <p className="bio">{profile.short_bio}</p>

          <a href={profile.portfolio_url} target="_blank" rel="noreferrer">
            <button className="portfolio-btn">Visit Portfolio</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
