import React from 'react';

const gridClass = "grid grid-cols-1 md:grid-cols-3 gap-4 p-4";
const overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition duration-300 ";
const textClass = "text-white text-xl font-bold ";

const ImageCard = ({ src, alt, title}) => {
  return (
    <a href="#"><div className="relative group card ">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className={`${overlayClass} `}>
      {/* <span className={`${textClass} p-8`}>haloo world is nice but you had to stugule to live</span> */}
        <span className={`${textClass}`}>{title}</span>
      </div>
    </div>
    </a>
  );
};

const ImageGrid = () => {
  return (
    <div className={gridClass}>
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Group-Discussions:16x9?ts=1710823877471&fit=constrain&dpr=off&wid=480" alt="Filings & Reports" title="Filings & Reports" />
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Careers-Consulting-Marquee:16x9?ts=1697128696930&fit=constrain&dpr=off&wid=480" alt="Stock Information" title="Stock Information" />
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Lady-Smiling-While-Wearing-Eye-Glasses:16x9?ts=1685437177158&fit=constrain&dpr=off&wid=480" alt="Governance & Sustainability" title="Governance & Sustainability" />
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Team-Having-Group-Discussions:16x9?ts=1685437177272&fit=constrain&dpr=off&wid=480" alt="News" title="News" />
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Man-Wearing-Eye-Glasses:16x9?ts=1685437177220&fit=constrain&dpr=off&wid=480" alt="Investor Events" title="Investor Events" />
      <ImageCard src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Careers-Consulting-Marquee:16x9?ts=1697128696930&fit=constrain&dpr=off&wid=480" alt="Quick Links" title="Quick Links" />
    </div>
  );
};



export default ImageGrid;
