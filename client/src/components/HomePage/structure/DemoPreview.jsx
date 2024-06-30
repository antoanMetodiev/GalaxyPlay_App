import Playstation5Image from '../resources/images/ps-5.webp';
import Playstation4ProImage from '../resources/images/ps4 pro.jpg';
import Playstation4SlimImage from '../resources/images/ps4 slim.jpg';

// import XboxX from

export const DemoPreview = () => {


    return (

        <section className="demo-website-preview">

         
          <h2>Playstation</h2>

          <article className="playstation">
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation5Image} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 5</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation4ProImage} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 4 Pro</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation4SlimImage} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 4 Slim</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
          </article>

          {/* XBOX */}
          <h2>XBOX</h2>

          <article className="playstation">
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation5Image} alt="Playstation 5 image" />
              <div className='content'>
                <h2>XBOX X</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation4ProImage} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 4 Pro</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation4SlimImage} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 4 Slim</h2>
                <button>VIEW NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
          </article>
        </section>
    );
}