import React from 'react';
import '../assets/styles/Partners.scss';
import NHIS from '../assets/images/NHIS.png';
import NLA from '../assets/images/NLA.png';
import WAYLEAD from '../assets/images/waylead.png';
import Nya from '../assets/images/Nya.png';
import TLC from "../assets/images/tlc.png";

function Partners() {
  return (
    <div className='Partners'>
       
        <div className='partnersLogo'>
            <img src={NHIS} alt='National Lotteries Authority' />
            <img src={NLA} alt='National Youth Authority' />
            <img src={WAYLEAD} alt='Waylead Ghana' />
            <img src={Nya} alt='National Health Insurance Scheme' />
            <img src={TLC} alt='TLC Homecare' />
        </div>
    </div>
  )
}

export default Partners