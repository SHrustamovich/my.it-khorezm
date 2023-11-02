import Root from "@/components/root";
import { UserContext } from "@/context/userContext";
import React from "react";
import { useContext } from "react";
import LoginPage from "./login";

const CheckUser = () => {
  const { user } = useContext(UserContext);

  return <>{user ? <Root /> : <LoginPage />}</>;
};

export default CheckUser;
