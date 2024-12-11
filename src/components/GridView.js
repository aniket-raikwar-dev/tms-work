import React from "react";
import GridCard from "./GridCard";

const GridView = ({ data, showModal }) => {
  return (
    <div className="grid-container">
      {data.map((item) => (
        <GridCard data={item} showModal={() => showModal(item?.id)} />
      ))}
    </div>
  );
};

export default GridView;
