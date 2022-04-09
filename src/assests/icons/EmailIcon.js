import React from 'react';

const EmailIcon = ({width, height, color}) => {
    return (
        <svg
            width={width ? width : "19"}
            height={height ? height : "13"}
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.07498 1.786L8.57498 5.815C8.82698 5.95 9.15298 6.014 9.48098 6.014C9.80898 6.014 10.135 5.95 10.387 5.815L17.887 1.786C18.376 1.523 18.838 0.5 17.941 0.5H1.02198C0.124978 0.5 0.586978 1.523 1.07498 1.786ZM18.114 3.989L10.387 8.016C10.047 8.194 9.80898 8.215 9.48098 8.215C9.15298 8.215 8.91498 8.194 8.57498 8.016C8.23498 7.838 1.44198 4.277 0.886978 3.988C0.496978 3.784 0.500978 4.023 0.500978 4.207V11.5C0.500978 11.92 1.06698 12.5 1.50098 12.5H17.501C17.935 12.5 18.501 11.92 18.501 11.5V4.208C18.501 4.024 18.505 3.785 18.114 3.989Z"
                fill={color ? color : "white"}
            />
        </svg>
    )
};

export default EmailIcon;