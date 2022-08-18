const Show = ({ users, setusers }) => {
  let lists = <h1>nothing to show</h1>;

  if (users.length > 0) {
    lists = users.map((u) => (
      <div>
        <div id="u._id" className="card">
          <img
            style={{ width: "400px", height: "400px" }}
            class="card-img-top"
            src={u.profile_url}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{u.name}</h5>
            <p className="card-text">{u.username}</p>
          </div>
        </div>
      </div>
    ));
  }

  return <ul style={{ width: "400px", overflow: "hidden" }}>{lists}</ul>;
};

export default Show;
