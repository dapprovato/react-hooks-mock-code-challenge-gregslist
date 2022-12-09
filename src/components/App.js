import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listCard, setListCard] = useState()

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListCard(data.description)
        setListCard(true)
        console.log("console:", data)
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <ListingsContainer data={data} />
    </div>
  );
}

export default App;
