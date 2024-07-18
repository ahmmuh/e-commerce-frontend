import {
  faCoffee,
  faHome,
  faLaptop,
  faPersonBiking,
  faSnowboarding,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <ul className="list-group  mt-2">
      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faHome} />
        <Link className="links" style={{ marginLeft: ".7rem" }} to={"/"}>
          Start
        </Link>
      </li>
      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faLaptop} />{" "}
        <Link
          className="links"
          style={{ marginLeft: ".7rem" }}
          to={"/electronics"}
        >
          Elektronik
        </Link>
      </li>

      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faCar} />
        <Link
          className="links"
          style={{ marginLeft: ".7rem" }}
          to={"/vehicles"}
        >
          Fordon
        </Link>
      </li>

      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faHome} />
        <Link className="links" style={{ marginLeft: ".7rem" }} to={"/houses"}>
          Bostad
        </Link>
      </li>

      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faTshirt} />
        <Link className="links" style={{ marginLeft: ".7rem" }} to={"/clothes"}>
          Kläder
        </Link>
      </li>

      <li className="list-group-item d-flex  align-items-center">
        <FontAwesomeIcon icon={faSnowboarding} />
        <Link className="links" style={{ marginLeft: ".7rem" }} to={"/hobbies"}>
          Hobby & Fritid
        </Link>
      </li>
    </ul>
  );
}
{
  /* <div className="col-4 sidebar"> */
}

{
  /* <div className="d-flex flex-column">
           
          </div> */
}
{
  /* </div> */
}
