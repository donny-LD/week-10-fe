import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import ImageContainer from "./components/ImageContainer/imageContainer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const displayPhotos = async () => {
    try {
      const photosData = await fetchPhotos();
      setPhotos(photosData);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      displayPhotos();
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header
        setShowSignup={setShowSignup}
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
      />

      {showSignup && (
        <Signup handleChange={handleChange} setShowSignup={setShowSignup} />
      )}
      {showLogin && (
        <Login
          handleChange={handleChange}
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {isLoggedIn && <ImageContainer photos={photos} />}
      <Footer />
    </>
  );
}

export default App;
