import React from "react";
import data from "./data/dataMahasiswa.json";
import "./App.css";

function App() {
  const profile = data?.profile || {};
  const skills = data?.skills || [];

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

          {profile.portfolio_url && (
            <a href={profile.portfolio_url} target="_blank" rel="noreferrer">
              <button className="portfolio-btn">Visit Portfolio</button>
            </a>
          )}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <h2 className="section-title">Skills & Expertise</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-top">
              <img
                src={skill.icon_url}
                className="skill-icon"
                alt={skill.name}
              />

              {skill.is_main && <span className="main-badge">Main</span>}
            </div>

            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-exp">
              {skill.years_of_experience} years experience
            </p>
            <p className="skill-level">{skill.level}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width:
                    skill.level === "advanced"
                      ? "100%"
                      : skill.level === "intermediate"
                      ? "66%"
                      : "40%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
