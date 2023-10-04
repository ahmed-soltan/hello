import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router-dom";
import UseFireStore from "../firebase/UseFireStore";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [state, handleSubmit] = useForm("maygpgdg");
  const [message, setMessage] = useState(initialState);
  const { addMessage } = UseFireStore();
  const [video, setVideo] = useState([]);
  const handleInput = ({ target }) => {
    setMessage({
      ...message,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    fetch(
      "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json"
    )
      .then((res) => res.json())
      .then((data) => setVideo(data.videos));
  }, []);

  const handleMessage = async (e) => {
    e.preventDefault();

    // Call both functions asynchronously
    const [formspreeResponse] = await Promise.all([
      handleSubmit(e),
      addMessage(message),
    ]);

    if (formspreeResponse && formspreeResponse.success) {
      setMessage(initialState);
    }
  };

  if (state.succeeded) {
    return (
      <div className="my-5 d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center text-black">
          Thanks for Messaging us! We Will Respond As Soon As Possible.
        </h1>
        <NavLink to="/" className="btn btn-black my-3">
          Back To Home Page
        </NavLink>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="py-5">
      <div className="container my-5">
        {video &&
          video.map((item) => (
            <div key={item.id}>
              <img src={item.default_thumb.src} />
              <video controls></video>
              <h1>{item.title}</h1>
            </div>
          ))}
        <h1 className="text-center text-black my-5">CONTACT US</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.2810849211096!2d31.004595576354735!3d30.569609574663446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d7c785f0d073%3A0x9c93909ec94eced3!2sTOWN%20TEAM!5e0!3m2!1sen!2seg!4v1695720399181!5m2!1sen!2seg"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="my-4 d-flex align-items-center justify-content-start gap-5 flex-wrap bg-white p-3 rounded">
          <form onSubmit={handleMessage} style={{ width: "600px" }}>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                style={{ backgroundColor: "#f4f4f4", border: "0" }}
                id="name"
                type="text"
                name="name"
                className="form-control"
                onChange={handleInput}
                value={message.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                style={{ backgroundColor: "#f4f4f4", border: "0" }}
                id="email"
                type="email"
                name="email"
                className="form-control"
                onChange={handleInput}
                value={message.email}
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                onChange={handleInput}
                value={message.message}
                style={{ backgroundColor: "#f4f4f4", border: "0" }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn btn-black"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
          <div className=" d-flex align-items-start justify-content-start flex-column gap-3 my-5">
            <h1 className="fw-bold text-black">Get in Touch with us</h1>
            <div className="d-flex align-items-center justify-content-start">
              <i className="fs-6 fa-solid fa-house me-3"></i>
              <span className="text-black">xyz street , NewYork , USA</span>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <i className="fs-6 fa-solid fa-phone me-3"></i>
              <span className="text-black">+(91)223-254</span>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <i className="fs-6 fa-solid fa-envelope me-3"></i>
              <span className="text-black">HinamoriStore@gmail.com</span>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <i className="fs-6 fa-solid fa-calendar-days me-3"></i>
              <span className="text-black">Monday-Friday 10AM-8PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
