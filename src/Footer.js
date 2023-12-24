import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <section id="footer">
              <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                {/* <a href="https://www.linkedin.com/in/deepakpandey710/"><img src={navIcon1} alt="" /></a> */}
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
        </section>
    )
}
export default Footer;