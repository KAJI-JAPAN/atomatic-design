import "./styles.css";
import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./components/prividers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
