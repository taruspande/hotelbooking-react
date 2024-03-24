import { React, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Carousel from "./Components/Carousel/Carousel.jsx";
// import { Header } from "./Components/Header";
// import Footer from "./Components/Footer/Footer.jsx";
// import { Hotel } from "./Components/Hotel.jsx";
const HomePage = lazy(() => import("./HomePage.jsx"));
const SearchPage = lazy(() => import("./Pages/SearchPage/SearchPage.jsx"));
const SignInForm = lazy(() => import("./Components/Login/SignInForm.jsx"));
const SignUpForm = lazy(() => import("./Components/Login/SignUpForm.jsx"));


function App() {
  return (
    <div>
      {/* <Header />
      <h1 className="carousel-heading">Popular Destinations</h1>
      <Carousel />
      <h1 className="carousel-heading">Top Rated Hotels</h1>
      <div style={{ marginBottom: 100 }}>
        <Carousel />
      </div>
      <Footer /> */}
      <Routes>

        <Route path="*" element={<HomePage />} />
        {/* <Route path="/" element={<SearchPage />} /> */}
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
