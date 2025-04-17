import React from "react";

const TabCards: React.FC<{ currentTab: number }> = ({ currentTab }) => {
  return (
    <div>
      <h1> {`Tabs ${currentTab}`} </h1>
    </div>
  );
};

export default TabCards;
