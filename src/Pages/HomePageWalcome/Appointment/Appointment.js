import React from 'react';
import './Appointment.css'
const Appointment = () => {
    return (
        <div>
            <div className="max-appointment">
                <h4 className="text-center max-app fw-bold">Book An Appointment</h4>
    <form action="" method="POST">
      <div className="form-group mb-3">
        <input type="text" placeholder="Name" required minlength="3" maxlength="25" />
      </div>
      <div className="form-group mb-3">
        <input type="text" placeholder="Doctor Name" required minlength="3" maxlength="25" />
      </div>
      <div className="form-group mb-3">
        <input type="text"  placeholder="Appointment Date" required />
      </div>
      <div className="form-group mb-3">
        <input type="text" placeholder="Phone Number" required />
      </div>
      <div className="form-group mb-3">
        <textarea name="Message" rows="3" placeholder="Type your message here...."></textarea>
      </div>
      <div className="form-group mb-3 text-center">
        <button type="submit" className="max-btn"><i className="send-icon far fa-paper-plane"></i>Book An Appointment</button>
      </div>
    </form>
  </div>
        </div>
    );
};

export default Appointment;