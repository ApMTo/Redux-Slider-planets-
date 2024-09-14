import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import images from "../../DB/DB";

function HomePage() {
  const dispatch = useDispatch();
  const imagesData = useSelector((state) => state.images);
  const currentImage = useSelector((state) => state.currentImage);
  const animation = useSelector((state) => state.animation);
  const currentInfo = useSelector((state) => state.currentInfo);

  useEffect(() => {
    dispatch({ type: "getImages", payload: images });
  }, []);

  const changeImage = (image) => {
    const targetDeg = 270;
    const rotateDeg = targetDeg - image.num;

    dispatch({
      type: "changeImage",
      payload: {
        image: image.url,
        rotateDeg: rotateDeg,
        planet: image,
      },
    });

    setTimeout(() => {
      dispatch({
        type: "hideAnimation",
        payload: {
          title: image.title,
          info: image.info,
        },
      });
    }, 2000);
  };
  return (
    <>
      <div className="App">
        <div className="currentInfo_box">
          <div>
            <h3>{currentInfo.title}</h3>
            <h4>{currentInfo.info}</h4>
            <Link to="/gallery">
              <h4>See more...</h4>
            </Link>
          </div>
        </div>
        <div
          className={animation.isStarted ? "allImages rotateBox" : "allImages"}
          style={{ "--rotate-angle": `${animation.rotateDeg}deg` }}
        >
          <div className="currentImage">
            <img src={currentImage} alt="currentPlanete" />
          </div>
          {imagesData.map((image, index) => {
            const style = {
              transform: `rotate(${image.num}deg) translate(225px) rotate(0)`,
            };
            return (
              <div
                className="imageTag"
                style={style}
                key={index}
                onClick={() => changeImage(image)}
              >
                <div
                  className="imageWrapper"
                  style={{ transform: `rotate(-${image.num}deg)` }}
                >
                  <img src={image.url} alt={`Image${index + 1}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
