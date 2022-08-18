import { useState } from "react";
import { nanoid } from "nanoid";

const Create = ({ users, setusers }) => {
  const [data, setdata] = useState({
    name: "",
    username: "",
    profile_url: "",
  });

  const ChangeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const SubmitHandaler = (e) => {
    e.preventDefault();
    const d = { ...data, _id: nanoid() };
    setusers([...users, d]);
    setdata({ name: "", username: "", profile_url: "" });
  };

  return (
    <>
      <form
        className="container w-50 shadow p-3 mb-5 bg-white rounded mt-5"
        onSubmit={SubmitHandaler}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Full Name"
            name="name"
            value={data.name}
            onChange={ChangeHandler}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            name="username"
            value={data.username}
            onChange={ChangeHandler}
          />
          <label for="floatingInput">username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="floatingInput"
            placeholder="profile_url"
            name="profile_url"
            value={data.profile_url}
            onChange={ChangeHandler}
          />
          <label for="floatingInput">profile_url</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
