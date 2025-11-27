function Skills({ data }) {
  return (
    <section>
      <h2>Skills</h2>

      <ul>
        {data.skills.map((skill) => (
          <li key={skill.id}>
            {skill.icon_url && (
              <img
                src={skill.icon_url}
                alt={skill.name}
                width="24"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />
            )}
            <strong>{skill.name}</strong> — {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
