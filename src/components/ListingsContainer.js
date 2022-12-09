import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {data} ) {
  return (
    <main>
      <ul className="cards">
        <ListingCard />
      </ul>
    </main>
  );
}

export default ListingsContainer;
