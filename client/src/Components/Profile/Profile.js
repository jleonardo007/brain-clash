import "./Profile.css";

function ProfileThumbnail({ avatar, dispatch }) {
  return (
    <div
      className="profile-thumbnail"
      style={{
        backgroundImage: `url(${avatar.url})`,
      }}
    ></div>
  );
}

function Profile({ user, token, navbar }) {
  return (
    <section className="profile">
      {navbar}
      <h1>Profile</h1>
    </section>
  );
}

export { ProfileThumbnail, Profile };
