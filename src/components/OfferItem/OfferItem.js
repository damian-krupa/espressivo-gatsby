import React from "react"
import "./offer-item.scss"

const OfferItem = ({ imageSrc, headerText }) => {
  return (
    <div className="offer-item col-6 col-md-4 col-lg-3">
      <div className="gradient-box">
        <div className="offer-item__content text-center">
          <img
            width="100px"
            height="100px"
            src={imageSrc}
            alt={headerText}
          />
          <span className="offer-item__text">{headerText}</span>
        </div>
      </div>
    </div>
  )
}

export default OfferItem
