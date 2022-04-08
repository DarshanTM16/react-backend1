import React from 'react';
import Navbar from './Navbar.js';
import{useState, useEffect} from 'react';
import axios from 'axios';
import './Blogdata.css';
import './bollywoodata.css'

const Bollywoodata = () => {

    const [postdata, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);

    let url = "";

    const getBackendData = () =>{
        axios.get(`${url}/Bollywoodata`)
        .then((res)=>{
            console.log(res.data);
            setPostData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            console.log('done');
            setLoading(false);
        })
    }


    useEffect(()=>{
        getBackendData();
        
    },[]);

    let data = postdata[1];


    if(loading){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <>
            <Navbar />
            <div className="blogDataContainer">
                <div className="blogTitle">{data.postTitle}</div>
                <div className="profile">
                    <div className="profileImage"></div>
                    <div className="pname">Dmitry Nozhenko</div>
                    <div className="pdate">Jan 28, 2019</div>
                    <div className="smIcons">
                        <i class="fab fa-2x fa-facebook-square"></i>
                        <i class="fab fa-2x fa-twitter-square"></i>
                        <i class="fab fa-2x fa-instagram-square"></i>
                        <i class="fab fa-2x fa-youtube-square"></i>
                    </div>
                </div>

                <div className="articleData">
                    <div className="articleImg bimg" id=""></div>
                    <div className="articleInfo">{data.postData} </div>
                </div>
                <div className="profile">
                    <div className="profileImage"></div>
                    <div className="pname">Dmitry Nozhenko</div>
                    <div className="pdate">Jan 28, 2019</div>
                </div>
                


            </div>

            <div className="mfs">
                More from siren
            </div>
            <div className="relatedPost">
                <div className="rp1">
                    <div className="rpimg bimg"></div>
                    <div className="rptitle">{data.postTitle}</div>
                    <div className="profile">
                        <div className="profileImage"></div>
                        <div className="pname">Dmitry Nozhenko</div>
                        <div className="pdate">Jan 28, 2019</div>
                    </div>
                </div>
                <div className="rp1">
                    <div className="rpimg bimg"></div>
                    <div className="rptitle">{data.postTitle}</div>
                    <div className="profile">
                        <div className="profileImage"></div>
                        <div className="pname">Dmitry Nozhenko</div>
                        <div className="pdate">Jan 28, 2019</div>
                    </div>
                </div>
                <div className="rp1">
                    <div className="rpimg bimg"></div>
                    <div className="rptitle">{data.postTitle}</div>
                    <div className="profile">
                        <div className="profileImage"></div>
                        <div className="pname">Dmitry Nozhenko</div>
                        <div className="pdate">Jan 28, 2019</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bollywoodata;