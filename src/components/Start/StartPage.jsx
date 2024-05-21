import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import Content from "../dashboard/content/Content";
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
