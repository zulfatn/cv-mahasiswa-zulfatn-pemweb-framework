function Experiences({ data }) {
  return (
    <section>
      <h2>Experiences</h2>

      {data.experiences.map((exp) => (
        <div key={exp.id} style={{ marginBottom: "20px" }}>
          {exp.image_url && (
            <img
              src={exp.image_url}
              alt={exp.title}
              width="120"
              style={{ borderRadius: "8px" }}
            />
          )}

          <h3>{exp.title}</h3>
          <p>
            <strong>Organisasi:</strong> {exp.organization}
          </p>
          <p>
            {exp.start_date} — {exp.is_current ? "Sekarang" : exp.end_date}
          </p>
          <p>{exp.description}</p>

          {exp.technologies && (
            <p>
              <strong>Tech:</strong> {exp.technologies.join(", ")}
            </p>
          )}

          <hr />
        </div>
      ))}
    </section>
  );
}

export default Experiences;
