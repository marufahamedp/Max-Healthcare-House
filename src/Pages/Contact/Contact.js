import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h1 className="text-center my-3 nav-title pb-3">CONTCACT US</h1>
      <div className="container">

        {/* for contact us */}
        
        <Row>
          <Col lg={7} className="mt-lg-5">
            <h3 className="text-center fw-bold mt-lg-5">Feal free to contact us</h3>
            <div>
              <ul className="list-group list-group-flush mt-lg-5">
                <li className="list-group-item px-5 rounded bg-dark text-light border-bottom mb-2"><i className="fas fa-location-arrow"></i>  73 Canal Street, New York, NY</li>
                <li className="list-group-item px-5 rounded bg-dark text-light border-bottom mb-2"><i className="fas fa-phone-alt"></i> +8801315560101</li>
                <li className="list-group-item px-5 rounded bg-dark text-light border-bottom mb-2"><i className="fas fa-mobile-alt"></i> +8801976781492</li>
                <li className="list-group-item px-5 rounded bg-dark text-light mb-2"><i className="fas fa-envelope"></i> marufledp.info@gmail.com</li>
                <li className="list-group-item px-5 rounded bg-dark text-light mb-2"><i class="fas fa-globe-africa"></i> maxhealthhouse.web.app</li>
              </ul>
            </div>
          </Col>
          <Col lg={5} className="p-lg-3">
            <div className="px-4 column rounded">
              <form action="" method="POST">
                <div class="form-group mb-3">
                  <label htmlFor="">Your Name :</label>
                  <input type="text" placeholder="Name" required minlength="3" maxlength="25" />
                </div>
                <div class="form-group mb-3">
                  <label htmlFor="">Your Email :</label>
                  <input type="email" placeholder="Email" required />
                </div>
                <div class="form-group mb-3">
                  <label htmlFor="">Your Message :</label>
                  <textarea name="Message" rows="6" placeholder="Type your message here...."></textarea>
                </div>
                <div class="form-group mb-3 text-center">
                  <button type="submit" class="max-btn"><i class="send-icon far fa-paper-plane"></i>Book An Appointment</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;