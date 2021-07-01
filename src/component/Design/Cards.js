import React from 'react'
import CardItem from './CardItem'
import './cards.css'

function Cards() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/blog_1.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
              />
              <CardItem
                src='images/blog_2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/person_3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/person_4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/person_6.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Cards;
  