import React from "react";

const ContactArea = () => {
  return (
    <>
      <section className="bd-contact-area x-clip pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-60">
              <div className="bd-contact-form">
                <h3 className="bd-contact-form-title mb-25">
                  Contact Us Right Here
                </h3>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <label htmlFor="name">
                          Name
                          <sup>
                            <i className="fa-solid fa-star-of-life"></i>
                          </sup>
                        </label>
                        <input id="name" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <label htmlFor="email">
                          Email
                          <sup>
                            <i className="fa-solid fa-star-of-life"></i>
                          </sup>
                        </label>
                        <input id="email" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <label htmlFor="phone">
                          Phone
                          <sup>
                            <i className="fa-solid fa-star-of-life"></i>
                          </sup>
                        </label>
                        <input id="phone" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-contact-input mb-20">
                        <label htmlFor="textarea">
                          Comments
                          <sup>
                            <i className="fa-solid fa-star-of-life"></i>
                          </sup>
                        </label>
                        <textarea name="textarea" id="textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 mb-30">
                      <div className="bd-contact-agree d-flex align-items-center">
                        <input
                          className="ryl-cp"
                          type="checkbox"
                          id="check-agree"
                        />
                        <label
                          className="check-label ryl-cp"
                          htmlFor="check-agree"
                        >
                          Save Data for Next Comment
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-contact-agree-btn">
                        <button type="submit" className="bd-btn">
                          Send Now
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6 mb-60">
              <div className="bd-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.9582305776707!2d72.93456397440688!3d19.153305582067315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA5JzExLjkiTiA3MsKwNTYnMTMuNyJF!5e0!3m2!1sen!2sin!4v1709020347509!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
