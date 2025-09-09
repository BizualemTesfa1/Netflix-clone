import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import RowList from "./components/rows/rowList/Rowlist";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Banner />
      <RowList />
    </div>
  );
}

export default App;
