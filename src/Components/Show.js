import React from "react";
import PropTypes from "prop-types";
const Show = ({ users, setusers }) => {
  const DeleteHandler = (id) => {
    const filteredUsers = users.filter((user) => user._id !== id);
    setusers(filteredUsers);
  };

  let lists = <h1>nothing to show</h1>;

  if (users.length > 0) {
    lists = users.map((u) => (
      <div>
        <div id="u._id" className="card" style={{ width: "18rem" }}>
          <button
            onClick={() => DeleteHandler(u._id)}
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
          <img
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
            className="card-img-top"
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

  return <ul style={{ width: "400px" }}>{lists}</ul>;
};

Show.prototype = {
  user: PropTypes.array,
  setusers: PropTypes.func,
};

export default Show;
