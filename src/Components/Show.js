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
      <div id="u._id" className="col-md-3">
        <div className="card">
          <button
            onClick={() => DeleteHandler(u._id)}
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
          <img src={u.profile_url} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{u.name}</h5>
            <p className="card-text">{u.username}</p>
          </div>
        </div>
      </div>
    ));
  }

  return <ul>{lists}</ul>;
};

Show.prototype = {
  user: PropTypes.array,
  setusers: PropTypes.func,
};

export default Show;
