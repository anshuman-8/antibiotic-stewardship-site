import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import { AuthContext } from "../context/authContext";
import DashboardPlaceholder from "../components/Dashboard/DashboardPlaceholder";
import Cookie from "js-cookie";
import { useMutation, gql, useQuery } from "@apollo/client";

export default function Home() {
  const { user, login, setLogin, setUser } = useContext(AuthContext);
  const [verifyingUser, setVerifyingUser] = useState(false);
  const router = useRouter();

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
      verifyToken(token:$token){
        payload
      }
    }
  `;
  const [
    verifyUser,
    { loading: verifyUserLoading, error: verifyUserError, data: verifyUserData },
  ] = useMutation(verifyUserGQL);

  const getUser = () => {
    verifyUser({
      variables: {
        token: Cookie.get("token"),
      },
    }).then((res) => {
      if (res.data.verifyToken) {
        setUser({name:res.data.verifyToken.payload.username,role:"admin"});
        setVerifyingUser(false);
      } else {
        router.push("/login");
      }
    }
    );
  };

  return (
    <>
      <main>{verifyingUser ? <DashboardPlaceholder /> : <Dashboard />}</main>
    </>
  );
}
