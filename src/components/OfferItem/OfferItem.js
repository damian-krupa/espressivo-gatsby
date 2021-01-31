import React from "react"
import "./offer-item.scss"
import Icon from "assets/vector_images/consulting.svg"

const OfferItem = () => {
  return (
    <div className="offer-item col-6 col-md-4 col-lg-3">
      <div className="gradient-box">
        <div className="offer-icon p-3 text-center">
          <Icon />
          <h4>Konsultacje</h4>
        </div>
      </div>
    </div>
  )
}

export default OfferItem
