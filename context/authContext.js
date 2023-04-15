import { useState, createContext } from "react";
import Cookies from "js-cookie";
import { gql, useMutation } from "@apollo/client";

export const AuthContext = createContext();

const userData = {
  name: "",
  role: "admin",
};

const GET_TOKEN = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
    }
  }
`;

export const AuthState = ({ children }) => {
  const [user, setUser] = useState(userData);
  const [login, setLogin] = useState(false);

  function verifyUser(token) {
    console.log(token);
  }

  function refreshToken() {
    setUser((user.color = "red"));
  }

  //   const [
  //     getAuthToken,
  //     { loading: tokenLoading, error: DataError, data: tokenData },
  //   ] = useMutation(GET_TOKEN);

  //   function fetchToken(token) {
  //     getAuthToken({
  //       variables: {
  //         username: username,
  //         password: password,
  //       },
  //     }).then((res) => {
  //       console.log(res.data.tokenAuth.token);
  //       Cookie.set("token", res.data.tokenAuth.token);
  //       router.push("/");
  //     });
  //   }

  function setToken(token) {
    Cookies.set("token", token);
  }

  function getToken() {
    return Cookies.get("token");
  }

  function logout() {
    setUser(userData);
  }

  return (
    <AuthContext.Provider value={{ user,setUser, login,setLogin, verifyUser }}>
      {children}
    </AuthContext.Provider>
  );
};
