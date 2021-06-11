import React from 'react'
import CardItem from '../CardsItem/CardsItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall in the middle of the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Never been in the middle of the desert? Nothing strange, but here's a shot to visit Sahara and it's beauties."
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-7.jpg"
                            text="You like the night spent by the camp fire with some good company? Excellent, this is the right choice."
                            label="Camping"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            text="Explore the beauties of Tokyo, this year's tour to Japan is on!"
                            label="Travel"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text="The city that never sleeps. New York tour is now available, reserve before everything is out!"
                            label="Travel"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
