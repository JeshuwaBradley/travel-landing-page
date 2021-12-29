import React from 'react';
import './slider.css';
import { useInView } from 'react-intersection-observer';



function Slider({imageSrc, title, subtitle, flipped}) {
    
    
        const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
        });
    

    const renderContent = () => {
        if(!flipped){
            return(
                <>
                    <img src={imageSrc} alt='Travel made simple' className='sliderImage'  />
                    <div className='sliderContent'>
                        <h1 className='sliderTitle'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className='sliderContent'>
                        <h1 className='sliderTitle'>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt='Travel made simple' className='sliderImage'  />
                </>
            )
        }
    }
    return (
        <div className={inView ? 'slider sliderIn' : 'slider'} ref={ref}>
            {renderContent()}
        </div>
    )
}

export default Slider;
