import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  let data = props.data[0];
  return (
    <>
      <footer>
        <div className="top-post-container">
          <div className="main-image">
            <img src='https://wallpapercave.com/wp/wp8916448.jpg' alt="" />
            <div className="text-main">{data.mheading}<br />
              <p className="timeline-main">{data.type} {data.timeline}</p>
            </div>
          </div>
          <div className="top-post">
            Top Posts
            <div className="border-bottom"></div>
          </div>
          <div className="tp1 tp">
            <Link to="/hollydata" className='blink'>
              <div className="tpimage-1">
                <img src='https://wallpapercave.com/wp/wp4747196.jpg' alt="" height="100%" width="100%" />
                <div className="tp1-text">
                  <h4>Captain America review</h4>
                  <p><span>Hollywood</span>{data.timeline}</p>
                </div>
                <span className="num">1</span>
              </div>
            </Link>
          </div>
          <div className="tp2 tp">
            <Link to="/traveldata" className='blink'>
              <div className="tpimage-2">
                <img src='https://wallpapercave.com/wp/wp2037798.jpg' alt="" height="100%" width="25%" />
                <div className="tp2-text">
                  <h4>{data.h2}</h4>
                  <p><span>{data.type}</span>{data.timeline}</p>
                </div>
                <span className="num">2</span>
              </div>
            </Link>
          </div>
          <div className="tp3 tp">
            <Link to="/bollywoodata" className='blink'>
              <div className="tpimage-3">
                <img src='https://wallpapercave.com/wp/wp7874491.jpg' alt="" height="100%" width="25%" />
                <div className="tp3-text">
                  <h4>Taare Zameen Par review</h4>
                  <p><span>Bollywood</span>{data.timeline}</p>
                </div>
                <span className="num">3</span>
              </div>
            </Link>
          </div>
          <div className="tp4 tp">
            <Link to="/techdata" className='blink'>
              <div className="tpimage-4">
                <img src='https://wallpapercave.com/wp/wp2823522.jpg' alt="" height="100%" width="25%" />
                <div className="tp4-text">
                  <h4>Check out the latest tech news</h4>
                  <p><span>Technology</span>{data.timeline}</p>
                </div>
                <span className="num">4</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="latest-stories">
          <div className="l-stories">
            Latest Stories
            <div className="border-bottom-l"></div>
          </div>

          <div className="latest-story-container">
            <div className="ls-1 ls">
              <Link to="/traveldata" className='blink'>
                <h4>Explore wonders of world</h4>
                <p>{data.trdata}
                </p>
                <p><b>Travel</b>{data.timeline}</p>
              </Link>
            </div>
            <div className="ls-2 ls">
              <Link to="/hollydata" className='blink'>
                <h4>Captain America review</h4>
                <p>{data.hdata}
                </p>
                <p><b>Hollywood</b>{data.timeline}</p>
              </Link>
            </div>
            <div className="ls-3 ls">
              <Link to="/fitdata" className='blink'>
                <h4>Importance of fitness</h4>
                <p>{data.fdata}
                </p>
                <p><b>Fitness</b>{data.timeline}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="view-more"><span className="arrow"><i class="fas fa-arrow-down"></i></span>VIEW MORE</div>
      </footer>
    </>
  );
}

export default Footer;