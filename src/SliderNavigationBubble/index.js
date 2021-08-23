import React, { useEffect, useState } from "react";
import './SliderNavigationBubble.css'


const calculateHeight = (pos) => {
    //return "10.000000pt"
    switch (pos) {
        case -2:
            return "7.000000pt"
        case -3:
            return "5.000000pt"
        case 1:
            return "8.000000pt"
        case 2:
            return "6.000000pt"

        default:
            if (pos > 2 || pos < -3) {
                return "5.000000pt"
            }
            return "10.000000pt"
    }
}


const SliderNavigationBubble = ({ position, currentStep }) => {


    const [didEnter, setDidEnter] = useState(false)
    const [isNext, setIsNext] = useState(false)

    

    useEffect(() => {

        if (currentStep == position) {
            setDidEnter(true)
        }
        
        if (currentStep + 1 == position) {
            setIsNext(true)
        }
    }, [currentStep])

    if (currentStep == position) {

        return (
            <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="10.000000pt" height={calculateHeight(position - currentStep)} viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    className={`currentBubbleTransition ${didEnter && "currentBubble"}`}
                    stroke="none">
                    <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829
                        -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022
                        397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0
                        1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960
                        -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14
                        -704 26 -815 18z"/>
                </g>
            </svg>
        )

    } else if (currentStep + 1 == position) {
        return (
        <svg key={"test"} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="10.000000pt" height={calculateHeight(position - currentStep)} viewBox="0 0 1280.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                className={`bubbleTransition ${isNext && "bubble"}`}
                stroke="none">
                <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829
                        -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022
                        397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0
                        1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960
                        -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14
                        -704 26 -815 18z"/>
            </g>
        </svg>
        )
    }


    else if (currentStep > position) {

        return (
            <svg version="1.1" id="Capa_1" x="0px" y="0px" width="10.000000pt" height={calculateHeight(position - currentStep)}
                viewBox="0 0 490 490" style={{ enableBackground: "new 0 0 490 490" }} >
                <polygon fill="#0f9470" points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
            </svg>

        )
    } else {
        return (

            <svg key={"a"} version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="10.000000pt" height={calculateHeight(position - currentStep)} viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#bdbec0"
                    stroke="none">
                    <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829
                            -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022
                            397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0
                            1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960
                            -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14
                            -704 26 -815 18z"/>
                </g>
            </svg>
        )

    }
}


export default SliderNavigationBubble