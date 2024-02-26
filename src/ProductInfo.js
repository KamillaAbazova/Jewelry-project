import { useState } from "react";

export const ProductInfo = ({content}) => {
    const [showInfo, setShowInfo] = useState(false);
  
    const handleButtonInfo = () => {
      setShowInfo(!showInfo);
    };
  
    return (
      <div>
        <button className="showInfo" onClick={handleButtonInfo}>{!showInfo ? 'Show info' : 'Hide info'}</button>
        {showInfo && (
          <div>
            <p className="info">{content}</p>
          </div>
        )}
      </div>
    );
  };