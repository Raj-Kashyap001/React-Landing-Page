import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
  const [active, setActive] = useState(false);
  const toggleNavMode = () => {
    setActive(!active);
  };
  return (
    <>
      <Navbar active={active} toggleNavMode={toggleNavMode} />
      <Hero />
    </>
  );
};

export default App;
