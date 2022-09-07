import React from 'react';
import {Button} from 'elements';
import {formatNumber} from 'utils';
import {ImageHero, ImageHeroFrame, IconCities, IconTraveler, IconTreasure} from 'assets/images';

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
      // top: 30,
      behavior: 'smooth'
    })
  }

  return (
    <section className="container">
      <div class="row align-items-center">
        <div class="col-auto pr-5" style={{ width: 530 }}>
          <h1 class="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p class="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
            We provide what you need to enjoy your holiday with family.
            Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div class="row mt-5 pt-4">
            <div class="col-auto mr-4">
              <img width={36} height={36} src={IconTraveler} alt={`${formatNumber(props.data.travelers)} travelers`} />
              <h6 class="mt-3">
                {formatNumber(props.data.travelers)} 
                <span class="text-gray-500 font-weight-light"> travelers</span>
              </h6>
            </div>
            <div class="col-auto mr-4">
              <img width={36} height={36} src={IconTreasure} alt={`${formatNumber(props.data.treasures)} treasures`} />
              <h6 class="mt-3">
                {formatNumber(props.data.treasures)} 
                <span class="text-gray-500 font-weight-light"> treasures</span>
              </h6>
            </div>
            <div class="col-auto">
              <img width={36} height={36} src={IconCities} alt={`${formatNumber(props.data.cities)} cities`} />
              <h6 class="mt-3">
                {formatNumber(props.data.cities)} 
                <span class="text-gray-500 font-weight-light"> cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-6 pl-5">
          <div style={{width: 520, height:410}}>
            <img
              src={ImageHero}
              alt="Room with couches"
              class="img-fluid position-absolute"
              style={{width: 520, margin: "-20px 0 0 -20px", zIndex: 1}}
            />
            <img
              src={ImageHeroFrame}
              alt="Room with couches frame"
              class="img-fluid position-absolute"
              style={{width: 520, margin: "10px 0 0 10px", zIndex: 0}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}