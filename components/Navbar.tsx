import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/authContext";
import Cookie from "js-cookie";
import { useMutation, gql} from "@apollo/client";

export default function Navbar() {
  const { user, login, setLogin, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [verifyingUser, setVerifyingUser] = useState(false);

  useEffect(() => {
    if (!login) {
      if (Cookie.get("token")) {
        setLogin(true);
        const logUser = getUser();
      } else {
        router.push("/login");
      }
    }
  }, []);

  const verifyUserGQL = gql`
    mutation ($token: String) {
      verifyToken(token: $token) {
        payload
      }
    }
  `;
  const [verifyUser] = useMutation(verifyUserGQL);

  const getUser = () => {
    verifyUser({
      variables: {
        token: Cookie.get("token"),
      },
    }).then((res) => {
      if (res.data.verifyToken) {
        setUser({ name: res.data.verifyToken.payload.username, role: "admin" });
        setVerifyingUser(false);
      } else {
        router.push("/login");
      }
    });
  };

  return (
    <div className="h-16 bg-slate-300/30 rounded-b-sm py-3 flex flex-row justify-center">
      <div className="mx-2 grow text-xl font-semibold text-center">
        ANTIBIOTIC STEWARDSHIP COMMITTEE
      </div>
      {login ? (
        <div className="bg-slate-300/70 backdrop-blur-sm my-auto mx-10 px-5 py-3 rounded-md">
          {user.name}
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="bg-primary backdrop-blur-sm my-auto mx-10 px-5 py-3 rounded-md text-white font-semibold "
        >
          Login
        </button>
      )}
    </div>
  );
}
