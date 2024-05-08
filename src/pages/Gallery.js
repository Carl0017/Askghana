import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Gallery.scss";
import Gallery1 from "../assets/images/IMG-20240312-WA0005.jpg";
import Gallery2 from "../assets/images/IMG-20240312-WA0006.jpg";
import Gallery3 from "../assets/images/IMG-20240312-WA0007.jpg";
import Gallery4 from "../assets/images/IMG-20240312-WA0008.jpg";
import Gallery5 from "../assets/images/IMG-20240312-WA0010.jpg";
import Gallery6 from "../assets/images/IMG-20240312-WA0011.jpg";
import Gallery7 from "../assets/images/IMG-20240312-WA0012.jpg";
import Gallery8 from "../assets/images/IMG-20240318-WA0028.jpg";
import Gallery9 from "../assets/images/IMG-20240312-WA0014.jpg";
import Gallery10 from "../assets/images/IMG-20240312-WA0015.jpg";
import Gallery11 from "../assets/images/IMG-20240312-WA0016.jpg";
import Gallery12 from "../assets/images/IMG-20240312-WA0017.jpg";
import Gallery13 from "../assets/images/IMG-20240312-WA0018.jpg";
import Gallery14 from "../assets/images/IMG-20240312-WA0019.jpg";
import Gallery15 from "../assets/images/IMG-20240312-WA0020.jpg";
import Gallery16 from "../assets/images/IMG-20240318-WA0025.jpg";
import Gallery17 from "../assets/images/IMG-20240318-WA0027.jpg";
import Gallery18 from "../assets/images/IMG-20240318-WA0029.jpg";
import Gallery21 from "../assets/images/IMG-20240318-WA0032.jpg";
import Gallery22 from "../assets/images/IMG-20240318-WA0033.jpg";
import Gallery25 from "../assets/images/IMG-20240318-WA0037.jpg";
import Footer from "../components/Footer";


function Gallery() {
  return (
    <>
     <Navbar />

  {
   /*<div className="Gallery">
            <div className="flexCon">
                <img src={Gallery1} alt="" />
                <img src={Gallery2} alt="" />
                <img src={Gallery3} alt="" />
                <img src={Gallery4} alt="" />
                <img src={Gallery5} alt="" />
                <img src={Gallery6} alt="" />
            </div>   
       </div>
  */ }

<div className="w3-row-padding" id="myGrid" style={{marginBottom:"128px"}}>
  <div className="w3-third">
    <img src={Gallery1} alt="" style={{width:"100%"}} />
    <img src={Gallery2} alt="" style={{width:"100%"}}/>
    <img src={Gallery3} alt="" style={{width:"102%"}}/>
    <img src={Gallery16} alt="" style={{width:"100%"}}/>
    <img src={Gallery5} alt="" style={{width:"100%"}}/>
    <img src={Gallery6} alt="" style={{width:"100%"}}/>
    <img src={Gallery4} alt="" style={{width:"100%"}}/>
  </div>

  <div className="w3-third">
    <img src={Gallery7} alt="" style={{width:"100%"}}/>
    <img src={Gallery8} alt="" style={{width:"100%"}}/>
    <img src={Gallery9} alt="" style={{width:"100%"}}/>
    <img src={Gallery10} alt="" style={{width:"100%"}}/>
    <img src={Gallery11} alt="" style={{width:"100%"}}/>
    <img src={Gallery21} alt="" style={{width:"100%"}}/>
    <img src={Gallery22} alt="" style={{width:"100%"}}/>
  </div>

  <div className="w3-third">
    <img src={Gallery12} alt="" style={{width:"106%"}} />
    <img src={Gallery13} alt="" style={{width:"100%"}}/>
    <img src={Gallery14} alt="" style={{width:"100%"}}/>
    <img src={Gallery15} alt="" style={{width:"100%"}}/>
    <img src={Gallery17} alt="" style={{width:"100%"}}/>
    <img src={Gallery18} alt="" style={{width:"107%"}} />
    <img src={Gallery25} alt="" style={{width:"100%"}}/>
  </div>
</div>

  <Footer />

    </>
  );
}

export default Gallery;
