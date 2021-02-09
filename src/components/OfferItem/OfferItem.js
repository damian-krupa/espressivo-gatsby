import React from "react"
import "./offer-item.scss"

const OfferItem = ({ imageSrc, headerText }) => {
  return (
    <div className="offer-item col-6 col-md-4 col-lg-3">
      <div className="gradient-box">
        <div className="offer-icon p-3 text-center">
          <img width="100px" height="100px" src={imageSrc} alt={headerText} />
          <h5>{headerText}</h5>
        </div>
      </div>
    </div>
  )
}

export default OfferItem
