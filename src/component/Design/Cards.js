import React from 'react'
import CardItem from './CardItem'
import './cards.css'

function Cards() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Services!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/blog_1.jpg'
                text='Know about the warehousing and customer care facility'
                label='Utilities'
                path='/services'
              />
              <CardItem
                src='images/blog_2.jpg'
                text='Know about the air cargo shipping facility'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn.pixabay.com/photo/2018/09/15/18/51/railway-3680077_960_720.jpg'
                text='Place Your Order to Deliver it through Train'
                label='Country to Country'
                path='/services'
              />
              <CardItem
                src='https://cdn.pixabay.com/photo/2020/06/02/00/03/truck-5248809_960_720.jpg'
                text='Place Your Order to Deliver it through Truck'
                label='City to City'
                path='/products'
              />
              <CardItem
                src='https://cdn.pixabay.com/photo/2020/02/28/08/50/courier-driver-4886839_960_720.jpg'
                text='Place Your Order for Home Delivery'
                label='Door to Door'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Cards;
  