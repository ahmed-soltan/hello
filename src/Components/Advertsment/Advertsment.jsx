import smartWatch from "../../assets/images/smart.jpg";
import Laptop from "../../assets/images/laptop.jpg";
import iphone from "../../assets/images/iphone.jpg";
import fillingSound from "../../assets/images/filling sound.jpg";
import "./style.css";
const Advertisement = () => {
  return (
    <div className="cont p-5">
      <h3 className="text-black fw-bold w-100 text-center mb-5">Best Sales</h3>
      <div className="row gap-3 adContainer">
        <div className="bg-black text-white p-2 m-2" style={{ width: "330px" }}>
          <small style={{ color: "#d1d1d1" }}>Big Screen</small>
          <h4 className="text-white fw-bold">Smart Watch Series Seven</h4>
          <span style={{ color: "#d1d1d1" }}>
            from $399 $16.62/mo. For 24 mo*.
          </span>
          <img src={smartWatch} style={{ width: "100%" }} />
        </div>
        <div className="bg-white p-2 m-2" style={{ width: "330px" }}>
          <small>Studio Display</small>
          <h4 className="text-black fw-bold">600 nits of brightness</h4>
          <span>27 inches 5k Retina display</span>
          <img src={Laptop} style={{ width: "100%" }} />
        </div>
        <div className="bg-white p-2 m-2" style={{ width: "330px" }}>
          <small>Smart Phones</small>
          <h4 className="text-black fw-bold">SmartPhone 13 pro.</h4>
          <span>
            Now in Green from $999.00 or $41.62/mo. For 24 mo.footnote*
          </span>
          <img src={iphone} style={{ width: "100%" }} />
        </div>
        <div className="bg-white p-2 m-2" style={{ width: "330px" }}>
          <small>Home Speakers</small>
          <h4 className="text-black fw-bold">Room Filling Sound</h4>
          <span>from $699 $36.62/mo. For 24 mo*.</span>
          <img src={fillingSound} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
