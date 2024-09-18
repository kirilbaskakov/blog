import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <input placeholder="Full Name" />
      <input placeholder="Your Email" />
      <input placeholder="Query Related" />
      <input placeholder="Message" />
      <button className="button">Send message</button>
    </form>
  );
};

export default ContactForm;
