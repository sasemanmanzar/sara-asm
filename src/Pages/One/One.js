import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useCallback, useState, useEffect, useRef } from 'react';

function One(){

  // function handleLogoDisplay() {
  //   if (window.innerWidth < 768) {
  //     document.getElementById("smallLogo").style.display = "block"
  //     document.getElementById("bigLogo").style.display = "none"
  //   } else {
  //     document.getElementById("smallLogo").style.display = "none"
  //     document.getElementById("bigLogo").style.display = "block"
  //   }
  // }
  
  // window.addEventListener('resize', handleLogoDisplay);

  // function sizePage(){
  //   if (window.innerWidth < 799){
  //     document.getElementById('boxPicText').style.backgroundColor = "yellow";

  //     document.getElementById('boxPicText').style.animation = "none";
  //   }
  //   else{
  //     document.getElementById('boxPicText').style.backgroundColor = "red";
  //   }
  // }
  
  // window.addEventListener('load', sizePage);



    // window.addEventListener("load", () => {
    //       document.body.classList.remove("pageLoad");
    //     });

    // const button = () => {
    //     alert("Hi!");
    // }

      const scrollToMarginPage2 = () => {
        const marginDot2 = document.getElementById('IdTwo'); 
          if (marginDot2) {
            marginDot2.scrollIntoView();
          }
      };

      const scrollToMarginPage3 = () => {
        const marginDot3 = document.getElementById('IdThree'); 
          if (marginDot3) {
            marginDot3.scrollIntoView();
          }
      };
    
      const scrollToMarginPage4 = () => {
        const marginDot4 = document.getElementById('IdFour'); 
          if (marginDot4) {
            marginDot4.scrollIntoView();
          }
      };
    
      const scrollToMarginPage5 = () => {
        const marginDot5 = document.getElementById('IdFive'); 
          if (marginDot5) {
            marginDot5.scrollIntoView();
          }
      };

      const scrollToMarginPage6 = () => {
        const marginDot6 = document.getElementById('IdSix'); 
          if (marginDot6) {
            marginDot6.scrollIntoView();
          }
      };

      // const [isMoreSara , setMoreSara] = useState(false);
      // const onSaraClick = useCallback( () => { setMoreSara(!isMoreSara); } , [isMoreSara] );
      // const infoClassSara = (isMoreSara ?  "Rectangle-Large" : "sara_area Rectangle");

      // const [isWidthTurningPoint, setAnimation] = useState(false);
      // const onSaraClick = useCallback( () => { setAnimation(!isWidthTurningPoint); } , [isWidthTurningPoint] );
      // const infoClassSara = (isWidthTurningPoint ?  "Rectangle-Large" : "sara_area Rectangle");

      // var Width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
     

      

        const [width, setWidth]   = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);

        const previousWidthValue = useRef("");
        const previousHeightValue = useRef("");

        useEffect(() => {
          previousWidthValue.current = width;
        }, [width]);

        useEffect(() => {
          previousHeightValue.current = height;
        }, [height]);
        
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        useEffect(() => {
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }, []);

        function handleAnimation() {

          if (previousWidthValue.current > 800 && width <= 800 && width < previousWidthValue.current) {
            document.getElementById("boxPicText").style.animationName = "animationPic";
            document.getElementById("boxPicText").style.animationDuration = "4s";            
          } 
          if (previousWidthValue.current < 800 && width > 800 && previousWidthValue.current < width){
            document.getElementById("boxPicText").style.animationName = "animationPicInverse";
            document.getElementById("boxPicText").style.animationDuration = "4s";
          }

        }
        useEffect(() => {
          window.addEventListener("resize", handleAnimation);
          return () => window.removeEventListener("resize", handleAnimation);
      }, []);


    return(
        <div id='IdOne' className='one'>
            <div style={{color:"red"}}>{width} <br/> {height} <br/> old= <br/> {previousWidthValue.current} <br/> {previousHeightValue.current}</div>

            <div id="boxPicText" className='boxPicText'>
                <img className='picSara' src={picSara} alt="" />
                <div className='textPageOne'>سارا آسمان منظر</div>
             </div>
             
             <div className='circlePageOne circlePageOne1' onClick={scrollToMarginPage6}><p>تماس با ما</p></div>
             <div className='circlePageOne circlePageOne2' onClick={scrollToMarginPage5}><p>تجارب</p></div>
             <div className='circlePageOne circlePageOne3' onClick={scrollToMarginPage4}><p>مهارت ها</p></div>
             <div className='circlePageOne circlePageOne4' onClick={scrollToMarginPage3}><p>مقالات</p></div>
             <div className='circlePageOne circlePageOne5' onClick={scrollToMarginPage2}><p>سوابق تحصیلی</p></div>

        </div>
    );
}

export default One;