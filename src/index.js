import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarReading from "./StarReading";
import New from "./New";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarReading size={32} color="blue" onSetRating={setMovieRating} />
      <p>this movie was rating {movieRating} Star</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <StarReading
        MaxRating={5}
        messaga={["terrible", "bad", "okay", "good", "amazing"]}
      />
      <StarReading size={24} color="red" className="test" defultRating={3} />
      <Test />
    </React.StrictMode>
    <New />
  </>
);
