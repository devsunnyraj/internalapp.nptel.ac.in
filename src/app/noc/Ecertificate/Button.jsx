import React from "react";
import '../../../styles/firstPage.css'

const Button = () => {
    const handleClick = () => {
      const pdfUrl = `/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs75/Course/NPTEL25CS75S24310149804466796.pdf`;
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };
    return (
        <>
        <button id="firstButton" onClick={handleClick}>Course Certificate</button>
        </>
    )
}

export default Button;