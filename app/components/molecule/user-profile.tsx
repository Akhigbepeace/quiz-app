import React, { useEffect, useState } from "react";
import Typography from "../atom/typography";
import Cookie from "js-cookie";

const UserProfile = () => {
  const [userData, setUserData] = useState<{
    fullName: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve user data from cookies
    const storedData = Cookie.get("user");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#211E2A] text-white w-full flex items-center justify-between h-16 px-10">
      <Typography variant="p" weight="extraBold" color="white">
        Name: {userData.fullName}
      </Typography>
      <Typography variant="p" weight="extraBold" color="white">
        Email: {userData.email}
      </Typography>
    </div>
  );
};

export default UserProfile;
