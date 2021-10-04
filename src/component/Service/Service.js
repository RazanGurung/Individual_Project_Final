import React from 'react';
import './service.css';
import CardItem from '../Design/CardItem';

function Service() {
    return (
        <div className="service_container">
            <div className="service_banner">
                <img className="home__image" src="https://images.unsplash.com/photo-1621697944804-d0a393f7e01a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" />
            </div>
            <h1>Our Services</h1>
            <div className="service_content">
                <div className="service-content-options">
                    <CardItem
                        src='images/blog_1.jpg'
                        text='On land service include transportation of cargo from place to place to door to door service'
                        label='Utilities'
                        path='/services'
                    />
                    <div className="cards__item__about">
                        <h1 className="cards__item__heading">Our by Land Service</h1>
                        <div className="cards__item__body">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-content-options">
                    <div className="cards__item__about">
                        <h1 className="cards__item__heading">Our by Air Service</h1>
                        <div className="cards__item__body">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <CardItem
                        src='images/blog_2.jpg'
                        text='On air service includes service of cargo from country to country or city city.'
                        label='Utilities'
                        path='/services'
                    />
                </div>
                <div className="service-content-options">
                    <CardItem
                        src='https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        text='On water service includes delivery of huge cargo from country to country'
                        label='Utilities'
                        path='/services'
                    />
                    <div className="cards__item__about">
                        <h1 className="cards__item__heading">Our by Water Service</h1>
                        <div className="cards__item__body">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Our Services</h1>
        </div>
    )
}

export default Service
