import {  useState } from "react";
import Dashboard from "../components/Dashboard";
import DashboardPlaceholder from "../components/Dashboard/DashboardPlaceholder";

export default function Home() {
  const [verifyingUser, setVerifyingUser] = useState(false);

  return (
    <>
      <main>{verifyingUser ? <DashboardPlaceholder /> : <Dashboard />}</main>
    </>
  );
}
