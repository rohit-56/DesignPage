import React from "react";
import image from "../../images/image1.png";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="child1">
        <h1 className="head1">Welcome To Our Program</h1>
        <h1 className="head2">Be a Hvtian</h1>
        <button className="btn btn-primary">Explore Our Programs</button>
      </div>
      <div className="child2">
        <img className="imageLogo" src={image} alt="img" />
      </div>
    </div>
  );
}

export default Home;
