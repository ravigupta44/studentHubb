import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <a className="" href="https://github.com/kohliharsh">
          <GitHubIcon className="github__logo" />
        </a>
        <p>
          <strong>Made Using React</strong>
        </p>
        <p>
          I do not own WhatsApp brand & logo, this web app clone was created only
          to learn & show my skills in creating web applications and will never
          be used for commercial purposes.
        </p>
      </div>
    </div>
  );
}

export default Footer;
