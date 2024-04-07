import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vincenzo-romanelli-529a20135",
  },
  {
    icon: faGithub,
    url: "https://github.com/vicemars89",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/_il_vice",
  },
];

const App = () => {
  return (
    <div className="container" style={{ display: "grid", placeItems: "center" }}>
      <div className="profile">
        <div>
          <img
            src="https://ugc.production.linktr.ee/5dec121a-26db-4600-b8f0-7355eec8583c_Romanelli-Vincenzo.jpeg"
            alt="Vincenzo Romanelli"
            style={{ objectFit: "cover", borderRadius: "40%" }}
          />
        </div>
        <p>
          <span className="nome-cognome">Vincenzo Romanelli</span>
          <span className="biografia">Software engineer by day, gamer by night.</span>
        </p>
      </div>
      {links.map((link) => (
        <Button
          variant="outline-primary"
          key={link.icon}
          href={link.url}
          target="_blank"
          style={{ marginTop: "10px" }}
        >
          <FontAwesomeIcon icon={link.icon} style={{ fontSize: "55px" }} />
        </Button>
      ))}
    </div>
  );
};

export default App;
