import React from 'react'

export default function Highlights() {
    return (
        <div className='highlights'>
            <div className='highlightsTop'>
                <h1>This weeks specials!</h1>
                <button className='buttonHighlights'>ONLINE MENU</button>
            </div>
            <div className='highlightsBottom'>
                <div className='item item1'>
                    <img src="./greek salad.jpg" alt="pic of a greek salad"></img>
                    <div className='titlePrice'>
                        <h2>Greek Salad</h2>
                        <p>$12.99</p>
                    </div>
                    <h3>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h3>
                    <br></br>
                    <a href="orderAdelivery">Order a delivery</a>
                </div>
                <div className='item item2'>
                    <img src="./bruchetta.jpg" alt="pic of bruchetta"></img>
                    <div className='titlePrice'>
                        <h2>Bruchetta</h2>
                        <p>$5.99</p>
                    </div>
                    <h3>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </h3>
                    <br></br>
                    <a href="orderAdelivery">Order a delivery</a>
                </div>
                <div className='item item3'>
                    <img src="./lemon dessert.jpg" alt="pic of lemon dessert"></img>
                    <div className='titlePrice'>
                        <h2>Lemon Dessert</h2>
                        <p>$5.00</p>
                    </div>
                    <h3>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is a authentic as can be imagined. </h3>
                    <br></br>
                    <a href="orderAdelivery">Order a delivery</a>
                </div>
            </div>
        </div>
    )
}
