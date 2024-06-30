import Playstation5Image from "../resources/images/ps-5.webp";
import Playstation4ProImage from "../resources/images/ps4 pro.jpg";
import Playstation4SlimImage from "../resources/images/ps4 slim.jpg";

import Xbox_X from "../resources/images/xbox x.jpg";
import Xbox_S from "../resources/images/xbox s.jpg";
import Xbox_One from "../resources/images/xbox one.jpg";

import Corsair from "../resources/images/corsair.jpg"
import AcerPredator from "../resources/images/acer predator.webp"
import AlienWare from "../resources/images/alienware pc.jpg"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faP } from "@fortawesome/free-solid-svg-icons";

export const DemoPreview = () => {



    
  return (
    <section className="demo-website-preview">


      {/* PC */}
      <h2>PC</h2>

      <article className="playstation">
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Corsair}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Corsair</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={AcerPredator}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Acer Predator</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={AlienWare}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Alienware</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
      </article>

      {/* Playstation */}
      <h2>Playstation</h2>

      <article className="playstation">
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Playstation5Image}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Playstation 5</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Playstation4ProImage}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Playstation 4 Pro</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Playstation4SlimImage}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>Playstation 4 Slim</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
      </article>

      {/* XBOX */}
      <h2>XBOX</h2>

      <article className="playstation">
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Xbox_X}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>XBOX X</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Xbox_S}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>XBOX S</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
        <div className="playstation _5">
          <img
            className="playstation 5_img"
            src={Xbox_One}
            alt="Playstation 5 image"
          />
          <div className="content">
            <h2>XBOX One X</h2>
            <button>VIEW NOW</button>
          </div>
          <span className="bkg-color"></span>
        </div>
      </article>
    </section>
  );
};
