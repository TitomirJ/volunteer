import React from 'react';

const EarthIcon = ({width}) => {
    return (
        <svg width={width ? width : "40"} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8623 0.451538C9.11702 0.451538 0.375 9.19356 0.375 19.9389C0.375 30.6842 9.11702 39.4262 19.8623 39.4262C30.6077 39.4262 39.3497 30.6842 39.3497 19.9389C39.3497 9.19356 30.6077 0.451538 19.8623 0.451538ZM4.27247 19.9389C4.27247 18.187 4.57647 16.5052 5.11237 14.9326L8.16994 17.9901L12.0674 21.8876V25.7851L15.9649 29.6825L17.9136 31.6313V35.3943C10.2375 34.4297 4.27247 27.8741 4.27247 19.9389ZM32.1978 29.4351C30.9253 28.41 28.9961 27.7338 27.6573 27.7338V25.7851C27.6573 24.7514 27.2467 23.7601 26.5157 23.0292C25.7848 22.2982 24.7935 21.8876 23.7598 21.8876H15.9649V16.0414C16.9985 16.0414 17.9899 15.6308 18.7208 14.8999C19.4517 14.169 19.8623 13.1776 19.8623 12.1439V10.1952H21.8111C22.8447 10.1952 23.8361 9.78458 24.567 9.05367C25.2979 8.32275 25.7085 7.33141 25.7085 6.29774V5.49681C31.4144 7.81386 35.4522 13.4106 35.4522 19.9389C35.4519 23.3778 34.3069 26.7188 32.1978 29.4351Z" fill="#C9ECFF"/>
        </svg>
    )
};

export default EarthIcon;