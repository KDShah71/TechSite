import React from "react";

function Footer() {
  return (
    <div className="footer conainer-mt ">
      <div className="footer-container section flex f-jc-sb">
        <div className="write-us">
          <h3>Write Us</h3>
          <strong>General Inquiry</strong>
          <p>info@abc.com</p>
          <p>mkt@xyz.com</p>
        </div>
        <div className="call-us">
          <h3>Call Us</h3>
          <strong>Phone</strong>
          <p>023-112345</p>
          <p>977-12893987281</p>
        </div>
        <div className="visit-us">
          <h3>Visit Us</h3>
          <strong>Office</strong>
          <p>
            amet consectetur <br />
            adipisicing elit. <br />
            ia voluptatem{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="ta-c">
          © 2019. FutureTech Nepal Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
