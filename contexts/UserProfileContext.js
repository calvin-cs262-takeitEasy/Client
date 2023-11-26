import React, { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
	const [profileUser, setProfileUser] = useState(null);

	return (
		<UserProfileContext.Provider value={{ profileUser, setProfileUser }}>
			{children}
		</UserProfileContext.Provider>
	);
};

export const useProfileUser = () => {
	return useContext(UserProfileContext);
};
