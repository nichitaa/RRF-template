import React from "react";
import { DBProvider } from "./DBContext";

export default function AppContext({ children }) {
	return <DBProvider>{children}</DBProvider>;
}
