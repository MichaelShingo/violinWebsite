import { FC } from 'react';
import { CommonIconProps, defaultPathClassName } from './utils';

const EighthNoteArrowIcon: FC<CommonIconProps> = props => {
    const { size = '100%', pathClassName = defaultPathClassName } = props;
    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 125 125">
            <g>
                <g id="Layer_1">
                    <g>
                        <path className={pathClassName} d="M110.94,86.49c-.88.25-1.39.4-1.9.54-10.13,2.9-20.26,5.8-30.39,8.7-.42.12-.92.41-1.26.29-.56-.2-1.28-.59-1.46-1.08-.14-.39.32-1.12.69-1.54.25-.28.81-.3,1.23-.42,10.13-2.9,20.26-5.8,30.39-8.7.51-.15,1.02-.29,1.89-.54-.69-.42-1.11-.69-1.54-.94-4.74-2.66-9.49-5.32-14.24-7.98-.43-.24-1-.41-1.22-.78-.27-.47-.5-1.24-.28-1.64.2-.38.98-.51,1.53-.62.23-.05.52.22.78.37,6.3,3.49,12.6,6.99,18.9,10.49,1.41.78,1.56,1.31.79,2.71-3.51,6.35-7.03,12.69-10.56,19.03-.74,1.33-1.89,1.63-2.46.58-.27-.5-.13-1.44.17-1.99,2.66-4.97,5.4-9.9,8.11-14.84.23-.42.44-.85.84-1.63Z" />
                        <path className={pathClassName} d="M60.41,95.08v-5.34c0-24.35.08-48.69-.08-73.04-.02-3.67.79-5.47,4.66-6.42,11.33-2.78,22.53-6.06,33.79-9.12,1.24-.34,2.51-.57,4.24-.96,0,7.39,0,14.51,0,21.63,0,4.56-.13,9.12.05,13.67.1,2.5-.7,3.59-3.23,4.24-10.67,2.75-21.25,5.85-31.91,8.63-2.97.77-4.12,1.97-4.08,5.27.21,15.75.09,31.5.09,47.26,0,12.73-5.01,19.2-17.55,22.53-9.46,2.52-18.62,1.7-27.1-3.29-12.75-7.51-12.79-21.77-.24-29.52,11.45-7.06,27.95-6.11,38.52,2.23.67.53,1.34,1.06,2.83,2.23ZM36.67,121.15c7.37-.29,14.3-1.66,19.73-7.07,5.48-5.45,5.37-12.15-.16-17.53-9.51-9.24-29.09-9.29-38.69-.1-5.79,5.54-5.87,12.15-.14,17.77,5.37,5.26,12.17,6.58,19.27,6.93ZM63.97,45.68c11.89-3.2,23.01-6.14,34.07-9.29.72-.21,1.36-2.07,1.38-3.17.13-6.76.07-13.53.07-20.29,0-2.53,0-5.05,0-8.12-11.78,3.17-22.77,6.1-33.73,9.15-.74.21-1.7,1.4-1.7,2.14-.12,9.6-.08,19.21-.08,29.58Z" />
                    </g>
                </g>
            </g>
        </svg>


    );
};

export default EighthNoteArrowIcon;