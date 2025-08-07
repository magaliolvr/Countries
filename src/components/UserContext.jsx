import { createContext, useState } from "react";
import { LucideUser } from "lucide-react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState("Magali");
  const [userImage, setUserImage] = useState("/src/assets/IMG_3207.JPG");
  const [currency, setCurrency] = useState("Euro");
  const [country, setCountry] = useState("Portugal");

  return <UserContext.Provider value={{ user, userImage, currency, country }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
