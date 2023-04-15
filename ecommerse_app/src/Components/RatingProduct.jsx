import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";


const RatingProduct = ({ value, text }) => {
    const fullStar = <FontAwesomeIcon icon={faStar} />
const noStar = <FontAwesomeIcon icon="fasl fa-star" />
const halfStar = <FontAwesomeIcon icon={faStarHalfStroke} />
    
  return (
    <React.Fragment>
      <div>
        <span>
            {value>=1 ? [fullStar] : value>=.5 ? [halfStar] : [noStar]}
        </span>
        <span>
            {value>=2 ? [fullStar] : value>=1.5 ? [halfStar] : [noStar]}
        </span>
        <span>
            {value>=3 ? [fullStar] : value>=2.5 ? [halfStar] : [noStar]}
        </span>
        <span>
            {value>=4 ? [fullStar] : value>=3.5 ? [halfStar] : [noStar]}
        </span>
        <span>
            {value>=5 ? [fullStar] : value>=4.5 ? [halfStar] : [noStar]}
        </span>
        <span>{text && text}</span>
      </div>
    </React.Fragment>
  );
};

export default RatingProduct;
