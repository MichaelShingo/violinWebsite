import { FC } from 'react';
import { CommonIconProps, defaultPathClassName } from './utils';

const HomeIcon: FC<CommonIconProps> = props => {
    const { size = '100%', pathClassName = defaultPathClassName } = props;
    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 125 125">
            <g>
                <g id="Layer_1">
                    <path className={pathClassName} d="M14.52,53.67c-3.74,3.29-6.64,5.99-9.72,8.46-.87.7-2.29.71-3.46,1.04.51-1.12.73-2.57,1.58-3.32C21.98,42.86,41.13,25.96,60.2,8.98c1.7-1.51,2.8-1.68,4.57-.09,19.15,17.07,38.38,34.05,57.52,51.12.79.71.92,2.16,1.36,3.27-1.17-.39-2.57-.5-3.47-1.22-3.08-2.48-5.98-5.18-9.53-8.3-.09,2.06-.19,3.26-.19,4.46-.01,14.55,0,29.09-.01,43.64,0,9.85-5.49,15.38-15.24,15.39-21.76,0-43.52,0-65.28,0-9.76,0-15.35-5.51-15.4-15.31-.06-14.55-.02-29.09-.02-43.64,0-1.2,0-2.4,0-4.61ZM62.54,11.21c-14.83,13.11-29.34,25.92-43.79,38.79-.65.58-1.06,1.78-1.06,2.69-.06,16.84-.11,33.69,0,50.53.03,5.31,2.73,9.52,7.59,10.08,6.58.75,13.32.19,20.19.19,0-1.48,0-2.85,0-4.21,0-9.97-.04-19.94.02-29.9.03-4.94,1.78-6.62,6.64-6.64,6.99-.02,13.98-.03,20.97,0,4.71.02,6.4,1.69,6.42,6.42.03,10.31,0,20.62.02,30.94,0,1.22.1,2.43.16,3.9,5.73,0,11.1.03,16.47,0,6.77-.05,11.1-4.06,11.15-10.81.12-16.73.07-33.46-.03-50.18,0-1.18-.72-2.65-1.58-3.49-3.04-2.95-6.29-5.68-9.46-8.49-11.15-9.86-22.3-19.72-33.7-29.79ZM76.39,113.84c0-12.01,0-23.68,0-35.35,0-2.2-1.42-2.54-3.24-2.53-6.87.04-13.75.13-20.61-.04-3.02-.07-4.03,1.03-3.99,3.99.12,10.42.04,20.84.06,31.27,0,.87.19,1.74.3,2.65h27.5Z" />
                </g>
            </g>
        </svg>


    );
};

export default HomeIcon;