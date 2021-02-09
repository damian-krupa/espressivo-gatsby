import React from "react"
import TitleBadge from "../TitleBadge/TitleBadge"
import OfferItem from "../OfferItem/OfferItem"
import "./company-offer.scss"
import Consulting from "assets/vector_images/consulting.svg"
import SocialMedia from "assets/vector_images/social-media.svg"
import Campaigns from "assets/vector_images/campaigns.svg"
import Branding from "assets/vector_images/branding.svg"
import Star from "assets/vector_images/star.svg"
import Communication from "assets/vector_images/communication.svg"
import Events from "assets/vector_images/balloon.svg"
import Copywriting from "assets/vector_images/copywriting.svg"
import Photoshoots from "assets/vector_images/camera.svg"
import Videomaking from "assets/vector_images/film-tape.svg"
import GoogleAds from "assets/vector_images/google-ads.svg"
import GoogleBusinessCard from "assets/vector_images/business-card.svg"

const CompanyOffer = () => {
  return (
    <>
      <div id="oferta" className="row justify-content-center m-5">
        <TitleBadge value="oferta" />
      </div>
      <section className="row company-offer">
        <OfferItem imageSrc={Consulting} headerText="Konsultacje" />
        <OfferItem imageSrc={SocialMedia} headerText="Social Media" />
        <OfferItem imageSrc={Campaigns} headerText="Kampanie reklamowe" />
        <OfferItem imageSrc={Branding} headerText="Branding" />
        <OfferItem imageSrc={Star} headerText="Influencer Marketing" />
        <OfferItem imageSrc={Communication} headerText="PR komunikacja" />
        <OfferItem imageSrc={Events} headerText="Organizacja Wydarzeń" />
        <OfferItem
          imageSrc={Copywriting}
          headerText="Copywriting SEO redakcja i korekta"
        />
        <OfferItem imageSrc={Photoshoots} headerText="Sesje zdjęciowe" />
        <OfferItem imageSrc={Videomaking} headerText="Realizacje wideo" />
        <OfferItem imageSrc={GoogleAds} headerText="Seo, Google Ads" />
        <OfferItem
          imageSrc={GoogleBusinessCard}
          headerText="Wizytówka Google"
        />
      </section>
    </>
  )
}

export default CompanyOffer
