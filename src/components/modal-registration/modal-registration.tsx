import axios from "axios";
import React, { useContext } from "react";
import { Context } from "../context/context";
import { URL } from "../../Constants";

import "./../../Normalize.css";
import "./modal-registration.scss";

interface ModalRegistrationProps {
  visability: Boolean;
}

const ModalRegistration: React.FunctionComponent<ModalRegistrationProps> = ({
  visability,
}) => {
  const { changeModal } = useContext(Context);

  return (
    <div
      className={
        visability
          ? "modal-registration"
          : "modal-registration modal-registration-hidden"
      }
    >
      <div className="wrap-modal">
        <button className="reset" onClick={() => changeModal("registration")}>
          x
        </button>
        <form
          onSubmit={(e) => {
            //auth/registration
            e.preventDefault();
            //@ts-ignore
            getToken(e.target[0].value,e.target[1].value,e.target[2].value,e.target);
          }}
        >
          <div className="login">
            <label>login: </label>
            <input type="text" name="nickName" />
          </div>
          <div className="email">
            <label>e-mail: </label>
            <input type="email" name="email" />
          </div>
          <div className="password">
            <label>password: </label>
            <input type="password" name="password" />
          </div>
          <div className="avatar">
            <label>Avatar: </label>
            <input type="file" name="avatar" accept="image/png, image/jpeg" />
          </div>
          <div className="buttons">
            <button type="submit" className="ok">
              ok
            </button>
            <span> | </span>
            <button
              className="registration"
              onClick={(e) => (
                changeModal("registration"),
                changeModal("login"),
                e.preventDefault()
              )}
            >
              log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function getToken(
  nickName: string,
  email: string,
  password: string,
  avatar: any
) {
  axios
    .post(URL + "auth/registration", {
      nickName,
      password,
      email,
    })
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("TOKEN", response.data.token);
      /* if (avatar[3].value) setAvatar(avatar); */
    });
}

function setAvatar(avatar: any) {
  /* const myFormData = new FormData(avatar);
  myFormData.append("filedata", avatar[3]);
  console.log(myFormData);

  axios.post(URL + "upload/avatar", {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      "Access-Control-Allow-Origin": "*",
    },
    data: myFormData,
  }); */
  const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrTmFtZSI6IjEyMzEyMyIsImlhdCI6MTYxNjAwMjQwNSwiZXhwIjoxNjE2MDg4ODA1fQ.KtJ3_I3YyX3afVB_21w-n2oB39XSiGimBa1IgRhwacY");
myHeaders.append("Content-Type", "multipart/form-data");

const formdata = new FormData();
formdata.append("filedata", avatar[3].files[0]);
console.log(formdata);


const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata
};

fetch("https://rs-react.herokuapp.com/upload/avatar", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default ModalRegistration;
