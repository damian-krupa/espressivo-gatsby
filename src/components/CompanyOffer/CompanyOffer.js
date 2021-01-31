import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import OfferItem from "../OfferItem/OfferItem"

const CompanyOffer = () => {
  return (
    <>
      <div className="row justify-content-center m-5">
        <TitleBadge value="oferta" />
      </div>
      <section className="row mb-5">
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
