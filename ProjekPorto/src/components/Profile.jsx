function Profile({ data }) {
  const profile = data.profile;

  return (
    <section>
      <h2>Profile</h2>

      {profile.photo_url && (
        <img
          src={profile.photo_url}
          alt={profile.full_name}
          width="150"
          style={{ borderRadius: "10px" }}
        />
      )}

      <p>
        <strong>Nama:</strong> {profile.full_name}
      </p>
      <p>
        <strong>NIM:</strong> {profile.nim}
      </p>
      <p>
        <strong>Prodi:</strong> {profile.prodi}
      </p>
      <p>
        <strong>Angkatan:</strong> {profile.angkatan}
      </p>
      <p>
        <strong>Headline:</strong> {profile.headline}
      </p>
      <p>
        <strong>Lokasi:</strong> {profile.location}
      </p>
    </section>
  );
}

export default Profile;
