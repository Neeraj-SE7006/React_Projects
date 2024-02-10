import "./App.css";

function App() {
  const cssStyle = {};

  let curr_time = new Date(2024, 1, 1, 14);
  curr_time = curr_time.getHours();
  let greeting = "";
  if (curr_time >= 1 && curr_time < 12) {
    greeting = "Good Morning!";
    cssStyle.color = "green";
  } else if (curr_time >= 12 && curr_time < 19) {
    greeting = "Good Afternoon!";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good Night!";
    cssStyle.color = "black";
  }
  return (
    <h1 className="headingStyle">
      Hello sir, <span style={cssStyle}>{greeting}</span>
    </h1>
  );
}

export default App;
