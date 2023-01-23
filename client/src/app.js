import React from "react";
import { useState } from "react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
import Homepage from "./components/pages/homepage";
import UserProfile from "./components/pages/userProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <Router>
      <div>
        <div>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )};

export default App;
