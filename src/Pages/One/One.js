// import sky from '../../Pic/sky.png';
// import Two from '../Two/Two'
// import { useCallback } from 'react';

import './One.css'
import picSara from '../../Pic/sara.jpg'

function One(){

    // const button = () => {
    //     alert("Hi!");
    // }

    return(
        <>
        <div id='IdOne' className='one'>
             <img className='picSara' src={picSara} />        
        </div>

        {/* <img src={sky} /> */}
        {/* <div className='mainImg'>
            <div className='circle'/>
            <div className='circle' style={{ marginTop:'15px'}} onClick={button} />
            <div className='circle' style={{ marginTop:'15px'}} onClick={Two}/>
            <div className='circle' style={{ marginTop:'15px'}} />
            <div className='circle' style={{ marginTop:'15px'}} />
        </div> */}

        {/* <img src={sky} usemap='#circleMap'/>
        <div style={{backgroundColor:'red'}}>ss</div>
        <map name='circleMap'>
            <area shape='circle' onClick={shoot} coords="337,300,404" style={{color: 'red'}} />
        </map> */}
        
        </>
    );
}

export default One;