import React from "react";
import { ListGroup, Image } from "react-bootstrap";
import LinkButton from "./LinkButton.js";
const LinkList = () => {
  const links = [
    "https://github.com/nisthagoel30",
    "https://www.instagram.com/_nisthahaha/",
    "https://www.facebook.com/nistha.goel.1829",
    "https://www.youtube.com/channel/UCiup3cF9BMZSmgrMDsog25A",
    "https://twitter.com/GoelNistha",
    "https://www.linkedin.com/in/nistha-goel-062510176/",
  ];
  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          className="mb-2"
          rounded
          alt="logo"
          width="120"
          height="120"
          src={`${process.env.PUBLIC_URL}/IMG_20190921_113830_200.jpg`}
        />
        <h5 className="mb-4 text-white">Nistha Goel</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}{" "}
        {/*mapping links to linkbuttons*/}
      </div>
    </ListGroup>
  );
};
export default LinkList;
