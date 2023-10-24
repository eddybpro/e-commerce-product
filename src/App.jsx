import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import Navbar from "./components/Navbar";

function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [countItem, setCountItem] = useState(0);
  const [showInCart, setShowInCart] = useState(false);
  const [showLargeImg, setShowLargeImg] = useState(false);
  return (
    <>
      <Navbar
        isEmpty={isEmpty}
        countItem={countItem}
        setCountItem={setCountItem}
        setIsEmpty={setIsEmpty}
        showInCart={showInCart}
        setShowInCart={setShowInCart}
        showLargeImg={showLargeImg}
      />
      <MainCard
        setIsEmpty={setIsEmpty}
        countItem={countItem}
        setCountItem={setCountItem}
        setShowInCart={setShowInCart}
        showLargeImg={showLargeImg}
        setShowLargeImg={setShowLargeImg}
      />
    </>
  );
}

export default App;
