import React, { Fragment } from "react";
import YmapsComponent from "./components/map/Map";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./components/aboutUs/AboutUs";

export default function App() {
  return (
    <Router>
      <Fragment>
        <NavigationBar />
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<YmapsComponent />}>
              </Route>
              <Route path="/aboutus" element={<AboutUs />}>
              </Route>
            </Routes>
          </header>
        </div>
      </Fragment>
    </Router>
  );
}
