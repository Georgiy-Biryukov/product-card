import React from 'react'
import { Carousel } from '../Carousel'
import { FavoriteIcon } from 'assets/icons/FavoriteIcon'
import { MoreButtonIcon } from 'assets/icons/MoreButtonIcon'
import { RatingIcon } from 'assets/icons/RatingIcon'

import productImage from 'assets/images/bg.png'
import countryFlag from 'assets/images/country-flag.png'

import './styles.scss'

export const Card = ({ variant = 'light' }) => {
  return (
    <div className={`card ${variant} `}>
      <div className="card-top">
        <div className="card-rating">
          <RatingIcon />
          <span>3.7</span>
        </div>
        <div className="card-image">
          <Carousel>
            <img src={productImage} alt="card-img" />
            <img src={productImage} alt="card-img" />
            <img src={productImage} alt="card-img" />
          </Carousel>
        </div>
        <div className="card-interaction">
          <FavoriteIcon />
          <MoreButtonIcon />
        </div>
      </div>
      <div className="card-content">
        <span className="card-brand">Writers’ Tears</span>
        <h5 className="card-name">Whiskey Writers' Tears Red Head, Writers’ Tears</h5>
        <p className="card-description">Speyside Single Malt Scotch Whisky Distillery Bottling</p>
        <div className="card-variant">
          <span className="card-volume">500 ml</span>
          <div className="card-manufacturer">
            <div className="manufacturer-image">
              <img src={countryFlag} alt="country-flag" />
            </div>
            <span className="manufacturer-name">Ireland</span>
          </div>
        </div>
      </div>
    </div>
  )
}
