import "./User.css";

export default function User({ user, children }) {
  const { username, avatar } = user;

  return (
    <div className="user-container">
      <div className="user-info">
        <div
          className="user-preview"
          style={{
            backgroundImage: `url(${avatar.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {children}
        <div className="user-name">
          <h2>{username}</h2>
        </div>
      </div>
      <div className="user-achievements">
        <div className="badges">
          <h2>Badges</h2>
          <div className="container">
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
          </div>
        </div>
        <div className="statistics">
          <h2>Statistics</h2>
          <div className="container">
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
            <div className="statistic"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
