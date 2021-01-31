import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import OfferItem from "../OfferItem/OfferItem"
import "./company-offer.scss"

const CompanyOffer = () => {
  return (
    <>
      <div id="oferta" className="row justify-content-center m-5">
        <TitleBadge value="oferta" />
      </div>
      <section className="row company-offer">
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
      </section>
    </>
  )
}

export default CompanyOffer
