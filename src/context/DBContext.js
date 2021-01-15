import React, { useContext } from "react";

import { db, storage } from "../firebase/firebase";

const DBContext = React.createContext();

export const useDB = () => {
	return useContext(DBContext);
};

export const DBProvider = ({ children }) => {
	const value = { data: "data here" };
	return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};
