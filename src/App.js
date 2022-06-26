import "./styles.css";
import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./components/prividers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
