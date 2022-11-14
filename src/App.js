import { createContext } from "react";
import { List } from "./List";

const colorInfo = 'red';
export const ColorContext = createContext('red');

const profileInfo = {
  name: 'gottu91',
  age: 31,
};
export const ProfileContext = createContext(profileInfo);

function App() {
  return (
    <>
      <p>Appだよ</p>
      <ColorContext.Provider value={colorInfo}>
        <ProfileContext.Provider value={profileInfo}>
          <List></List>
        </ProfileContext.Provider>
      </ColorContext.Provider>
    </>
  );
}

export default App;