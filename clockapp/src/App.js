import React, { useState } from "react";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const styleHeading = {
    marginLeft: "42%",
    color: "gray",
    marginTop: "25%",
  };

  const update = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(update, 1000);

  return (
    <>
      <h1 style={styleHeading}>{ctime}</h1>
    </>
  );
};
export default App;
