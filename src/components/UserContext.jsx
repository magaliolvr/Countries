import { createContext, useState } from "react";
import { LucideUser } from "lucide-react";
import UserImage from "../assets/IMG_3207.JPG";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState("Magali");
  const [userImage, setUserImage] = useState(UserImage);
  const [currency, setCurrency] = useState("Euro");
  const [country, setCountry] = useState("Portugal");

  return <UserContext.Provider value={{ user, userImage, currency, country }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
