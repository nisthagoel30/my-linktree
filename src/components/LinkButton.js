import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import youtubeIcon from "@iconify/icons-simple-icons/youtube";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import githubIcon from "@iconify/icons-simple-icons/github";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import "./WidthLimit.scss";
const LinkButton = (props) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (props.link.includes("github")) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes("linkedin")) {
      setIcon(<Icon icon={linkedinIcon} />);
    } else if (props.link.includes("twitter")) {
      setIcon(<Icon icon={twitterIcon} />);
    } else if (props.link.includes("youtube")) {
      setIcon(<Icon icon={youtubeIcon} />);
    } else if (props.link.includes("instagram")) {
      setIcon(<Icon icon={instagramIcon} />);
    } else if (props.link.includes("facebook")) {
      setIcon(<Icon icon={facebookIcon} />);
    }
  }, [props]);
  return (
    <Button
      variant="outline-light"
      href={props.link}
      className="mb-3 max-button"
      block
      style={{ display: "block", padding: "10px 200px" }}
    >
      {icon}
    </Button>
  );
};
export default LinkButton;
