import React, { useState } from 'react'
import './Carousel.css'
import { images } from '../Helpers/carouselData'

function Carousel() {
    const [currImg, setCurrImg] = useState(0)
    const [animationType, setAnimationType] = useState('ease')
    const [animationDelay, setAnimationDelay] = useState(2)

    const handleAnimationTypeChange = (e) => {
        setAnimationType(e.target.value)
    }
    const handleAnimationDelayChange = (e) => {
        setAnimationDelay(e.target.value)
    }
    const animationStyles = {
        backgroundImage: `url(${images[currImg].img})`,
        transition: `${animationType} ${animationDelay + 's'}`,
    }
    console.log(animationType)
    console.log(animationStyles)
    return (
        <div className="carousel">
            <div
                className="carouselInner"
                style={animationStyles}
            >
                <div
                    style={{
                        textDecoration: (currImg > 0) ? 'none' : 'block'
                    }}
                    className="left"
                    onClick={() => { currImg > 0 && setCurrImg(currImg - 1) }}
                ></div>
                <div
                    className="right"
                    onClick={() => { currImg < images.length - 1 && setCurrImg(currImg + 1) }}
                ></div>
            </div>
            <div className="animation-selector">
                <div>
                    <select
                        className="animation-select"
                        onChange={handleAnimationTypeChange}
                    >
                        <option value="ease">Ease</option>
                        <option value="ease-in">Ease-In</option>
                        <option value="ease-out">Ease-Out</option>
                        <option value="linear">Linear</option>
                    </select>
                </div>
                <div className="range">
                    <label>Delay :</label>
                    <input onChange={handleAnimationDelayChange} type="range" step="0.25" min=".5" max="3"></input>
                </div>
            </div>
        </div >
    )
}

export default Carousel