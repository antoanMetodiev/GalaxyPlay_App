import Playstation5Image from '../resources/images/ps-5.webp';
import Playstation4Image from '../resources/images/ps4 pro.jpg';

export const DemoPreview = () => {


    return (

        <section className="demo-website-preview">

         
          <h2>Playstation</h2>

          <article className="playstation">
            
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation5Image} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 5</h2>
                <button>BUY NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation5Image} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 5</h2>
                <button>BUY NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
            <div className="playstation _5">
              <img className="playstation 5_img" src={Playstation5Image} alt="Playstation 5 image" />
              <div className='content'>
                <h2>Playstation 5</h2>
                <button>BUY NOW</button>
              </div>
              <span className='bkg-color'></span>
            </div>
          </article>
        </section>
    );
}