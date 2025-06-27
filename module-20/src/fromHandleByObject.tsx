/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";

interface IUserInfo {
  name: string;
  email: string;
  phone: "" | number;
}

function Form() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setUserInfo({
      name: "",
      email: "",
      phone: "",
    });
    console.log(userInfo);
  };

  return (
    <>
      <h2>Form handling by Object in useState</h2>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={handleinput}
              value={userInfo.name}
            />
          </div>
          <br />
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleinput}
              value={userInfo.email}
            />
          </div>
          <br />
          <div>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="phone"
              onChange={handleinput}
              value={userInfo.phone}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form