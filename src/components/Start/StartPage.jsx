import React from "react";
import LeftSidebar from "../dashboard/LeftSidebar";
import Content from "../dashboard/Content";
import Navbar from "../menu/Navbar";

function StartPage() {
  return (
    <div className="container">
      <div className="row">
        <LeftSidebar />
        <div className="col">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
