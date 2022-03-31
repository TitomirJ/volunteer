import React from 'react';

const TelegramIcon = ({width, height, color}) => {
    return (
        <svg
            width={width ? width : "22"}
            height={height ? height : "22"}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.7438 0.243973L0.726002 9.00198C-0.0393085 9.40983 -0.298157 10.2266 0.541026 10.6698L5.41991 12.5215L17.2164 3.81505C17.8605 3.26848 18.52 3.41422 17.9525 4.01549L7.82091 14.9706L7.50265 19.6068C7.79743 20.3226 8.33718 20.3259 8.68147 19.9701L11.4845 16.8027L16.2852 21.0958C17.4002 21.8841 18.007 21.3754 18.2468 19.9305L21.3957 2.12467C21.7226 0.346184 21.1651 -0.437437 19.7438 0.243973Z"
                  fill={color ? color : "white"}
                  fillOpacity={color ? "1" : "0.7"}
            />
        </svg>
    )
};

export default TelegramIcon;