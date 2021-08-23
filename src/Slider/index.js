import React from "react";


const Slider = ({componentArray}) => {

    const navigationLength = 6

    const renderStepNavigation = () => {

        const bubbleArray = []

        let i =  value.slideStep - navigationLength / 2
        let end = value.slideStep + navigationLength / 2
        if(i < 0){
            i = 0;
            end = navigationLength
        }

        if(end > componentArray.length) {
            i = componentArray.length - navigationLength
            end = componentArray.length
        }

        for (i; i < end; i++) {
            bubbleArray.push(
                <div className="navigationIcons" key={i}>
                    <SliderNavigationBubble position={i} currentStep={value.slideStep} />
                </div>
            )
        }

        return (
            <div className="progress">
                {bubbleArray}
            </div>
        )
    }
    

    return (
        <div>

        </div>
    )

}


export default Slider;