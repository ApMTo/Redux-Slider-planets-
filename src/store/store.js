import { createStore } from "redux";

const store = createStore(
  (state, action) => {
    switch (action.type) {
      case "getImages":
        return {
          ...state,
          images: action.payload,
          currentPlanet: action.payload[0],
        };
      case "changeImage":
        return {
          ...state,
          currentImage: action.payload.image,
          currentPlanet: action.payload.planet,
          animation: {
            isStarted: true,
            isOpened: false,

            rotateDeg: action.payload.rotateDeg,
          },
        };
      case "hideAnimation":
        return {
          ...state,
          currentInfo: {
            title: action.payload.title,
            info: action.payload.info,
          },
        };
      case "openImage": {
        return {
          ...state,
          animation: {
            isOpened: true
          }
        };
      }
      case 'closeImage':
        return {
          ...state, 
          animation: {
            isOpened: false,
          }
        }
      default:
        return {
          ...state,
        };
    }
  },
  {
    images: [],
    currentImage: [
      "https://cdn3.iconfinder.com/data/icons/solar-system-3/100/Mercury-512.png",
    ],
    currentInfo: {
      title: "Mercury",
      info: "Mercury is the smallest planet in our Solar System and the closest to the Sun.",
    },
    currentPlanet: {},
    animation: {
      isStarted: false,
      isOpened: false,
      rotateDeg: 0,
    },
  }
);

export default store;
