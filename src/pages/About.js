import React from "react";
import { ListGroup, Button, Image } from "react-bootstrap";
import "../components/WidthLimit.scss";
const About = () => {
  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        <Image
          className="mb-2"
          rounded
          alt="logo"
          width="120"
          height="120"
          src={`${process.env.PUBLIC_URL}/IMG_20190921_113830_200.jpg`}
        />
        <h4 className="text-white mb-4">
          <strong>About Me....</strong>
        </h4>
        <h5 className="text-white mb-5 max-button">
          Thanks for showing interest in me. Here is my resume in case you want
          to know more about me.
        </h5>
        <Button
          className="px-5"
          variant="outline-light"
          href={`${process.env.PUBLIC_URL}/My_resume_1.docx`}
          size="lg"
          download
        >
          My Resume
        </Button>
      </div>
    </ListGroup>
  );
};
export default About;
