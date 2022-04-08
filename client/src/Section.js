import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = (props) => {
   let data = props.data;
   let urldata = props.route;
   return (
      <>
      <Link to={urldata} className='blink'>
         <div className="bollywoodSection">
            <div className="b b1">
               {props.title}
               <div className="border-bolly"></div>
            </div>

               <div className="b b2">
                  <img src={props.imgsrc} alt="travel" />
                  <div className="textb">
                     <h4>{data.heading}</h4>
                     <p>{data.description}</p>
                     <p><b>{props.title}</b>{data.timeline}</p>
                  </div>
               </div>

            <div className="b b3">
               <img src={props.imgsrc} alt="travel" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            

            <div className="b b4">
               <img src={props.imgsrc} alt="travel" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            <div className="b b5">
               <img src={props.imgsrc} alt="travel" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            <div className="b b6">
               <img src={props.imgsrc} alt="" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            <div className="b b7">
               <img src={props.imgsrc} alt="travel" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            <div className="b b8">
               <img src={props.imgsrc} alt="travel" />
               <div className="textb">
                  <h4>{data.heading}</h4>
                  <p>{data.description}</p>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
            </div>
            <div className="r1">
               Top Posts
               <div className="border-bolly"></div>
            </div>
            <div className="r2">
               <div className="container-br">
                  <img src={props.imgsrc} alt="travel" />
                  <div className="text-br">
                     <h4>{data.heading}</h4>
                     <p><span>{props.title}</span>{data.timeline}</p>
                  </div>
                  {/* <span className="number">1</span> */}
               </div>
            </div>
            <div className="r3 r">
               <img src={props.imgsrc} alt="travel" />
               <div className="textbr-d">
                  <h4>{data.heading}</h4>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
               {/* <span className="number-2">2</span> */}
            </div>

            <div className="r4 r">
               <img src={props.imgsrc} alt="" />
               <div className="textbr-d">
                  <h4>{data.heading}</h4>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
               {/* <span className="number-2">3</span> */}
            </div>
            <div className="r5 r">
               <img src={props.imgsrc} alt="" />
               <div className="textbr-d">
                  <h4>{data.heading}</h4>
                  <p><b>{props.title}</b>{data.timeline}</p>
               </div>
               {/* <span className="number-2">4</span> */}
            </div>
            <div className="r6 r">
               <div className="advertisement-b">
                  Advertisement
               </div>
            </div>
         </div>
         <div className="loadmore">
            <i class="fas fa-arrow-down"></i><span className='lm'>LOAD MORE</span>
         </div>

        </Link>

      </>
   )
}

export default Section;