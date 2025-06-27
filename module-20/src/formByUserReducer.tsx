/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import "./App.css";

interface IUserInfo {
  name: string;
  email: string;
  phone: "" | number;
}

//   interface IDispatch{
//     type:"FEILD_UPDATE",
//     payload:{
//         feild:"",
//         value:"",
//     }
//   }

const initialUser: IUserInfo = {
  name: "",
  email: "",
  phone: "",
};

function reducer(state:any, action:any) {
  switch (action.type) {
    case "FEILD_UPDATE":
      return {
        ...state,
        [action.payload.feild]: action.payload.value,
      };
      break;

    default:
        return state
      break;
  }
}

function FormByReducer() {
  const [userInfo, dispatch] = useReducer(reducer, initialUser);

  const handleOnChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "FEILD_UPDATE",
      payload: {
        feild: event.target.name,
        value: event.target.value,
      },
    });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <h2>Form handling by useReducer hook</h2>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={handleOnChnage}
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
              onChange={handleOnChnage}
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
              onChange={handleOnChnage}
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

export default FormByReducer;
