import React, { useState } from "react";
import "./gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();
  const currentPlanet = useSelector((state) => state.currentPlanet);
  const animation = useSelector((state) => state.animation);
  const navigate = useNavigate();
  const [currentPlanetImage, setCurrentPlanetImage] = useState("");
  const openImage = (img) => {
    setCurrentPlanetImage(img);
    dispatch({ type: "openImage" });
  };

  const closeImage = () => {
    dispatch({ type: "closeImage" });
  };
  return (
    <>
      {animation.isOpened ? (
        <div className="opened_image">
          <div className="opened_image_box">
            <img src={currentPlanetImage} alt="" />
            <i
              class="fa-solid fa-xmark closeImage"
              onClick={() => closeImage()}
            ></i>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="goBack">
        <i class="fa-solid fa-xmark" onClick={() => navigate("/")}></i>
      </div>
      <div className="gallery">
        <div className="gallery_body">
          <div className="planet_info">
            <div className="planet_image">
              <img src={currentPlanet.thubmnail[0]} alt="" />
            </div>
            <div className="planet_title">
              <h2>{currentPlanet.title}</h2>
            </div>

            <>
              <div className="allInfo">
                <ul>
                  {currentPlanet.id <= 8 ? (
                    <>
                      <li>Diameter - {currentPlanet.planetInfo.diameter}</li>
                      <li>
                        {" "}
                        Distance from Sun -{" "}
                        {currentPlanet.planetInfo.distanceFromSun}
                      </li>
                      <li>
                        Orbital Period -{" "}
                        {currentPlanet.planetInfo.orbitalPeriod}
                      </li>
                      <li>
                        Rotation Period -{" "}
                        {currentPlanet.planetInfo.rotationPeriod}
                      </li>
                      <li>
                        Atmosphere - {currentPlanet.planetInfo.atmosphere}
                      </li>
                      <li>
                        Surface Temperature -{" "}
                        {currentPlanet.planetInfo.surfaceTemperature}
                      </li>
                      <li>
                        Notable Features -{" "}
                        {currentPlanet.planetInfo.notableFeatures}
                      </li>
                      <li>
                        Exploration - {currentPlanet.planetInfo.exploration}
                      </li>
                      <li>
                        Interesting Fact -{" "}
                        {currentPlanet.planetInfo.interestingFact}
                      </li>
                    </>
                  ) : (
                    <li>Infomation - {currentPlanet.mainInfo}</li>
                  )}
                </ul>
              </div>
            </>
          </div>
          <div className="planet_gallery">
            <div className="gallery_title">
              <h2>{currentPlanet.title} images</h2>
              <div className="gallery_images">
                {currentPlanet.thubmnail.map((img) => {
                  return (
                    <img src={img} alt="" onClick={() => openImage(img)} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
