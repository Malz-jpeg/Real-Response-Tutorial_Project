import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCentre c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you. 
            We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                </div>
                <div className="flexColStart details">
                  <span>Call</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
