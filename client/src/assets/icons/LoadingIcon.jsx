import React from 'react'

const LoadingIcon = ({className}) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_514_290)">
            <path d="M7 1C7 0.46875 7.4375 0 8 0C12.4062 0 16 3.59375 16 8C16 9.46875 15.5938 10.8438 14.9062 12C14.625 12.5 14.0312 12.6562 13.5312 12.375C13.0625 12.0938 12.9062 11.5 13.1875 11C13.6875 10.125 14 9.09375 14 8C14 4.6875 11.3125 2 8 2C7.4375 2 7 1.5625 7 1Z" fill="#1E1D1E" fillOpacity="0.75" />
        </g>
        <defs>
            <clipPath id="clip0_514_290">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default LoadingIcon