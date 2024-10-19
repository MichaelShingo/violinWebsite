import { FC } from 'react';
import { CommonIconProps, defaultPathClassName } from './utils';

const PartyIcon: FC<CommonIconProps> = props => {
    const { size = '100%', pathClassName = defaultPathClassName } = props;
    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 125 125">
            <path className={pathClassName} d="M29.44,47.84c2.36-.34,4.58.21,6.41,1.76,10.61,13.29,29.28,25.93,39.1,39.13,6.41,8.63-1.45,11.81-7.95,14.54-18.63,7.81-38.25,13.5-56.88,21.35-6.67,1.94-11.77-3.73-9.57-10.35,8.66-18.62,13.46-43,22.74-60.9,1.46-2.82,2.63-5.01,6.16-5.52ZM29.4,51.7c-3.43.99-5.54,12.11-7.2,15.31l34.55,35.31c1.58.71,14.56-4.12,15.53-5.37,1.15-1.48,1.08-4.05-.03-5.54l-37.2-37.92c-1.49-1.5-3.53-2.4-5.65-1.79ZM52.85,105l-32.54-32.92-6.63,17.39.37,1.22,20.7,20.36,18.1-6.05ZM30.39,113.52c.32-1.18-.31-1.28-.76-1.94-3.96-5.71-12.95-11.62-17.44-17.4l-8.91,23.59c.11,1.08,1.42,2.69,2.35,3.11,4.22,1.9,19.26-7.21,24.76-7.36Z" />
            <path className={pathClassName} d="M121.51,1.31l1.82,1.08c.56,2.19-5.48,7.03-7.49,7.99-7.26,3.49-16.64-.62-20.03,10.17-2.96,9.4-.36,18.62-10.05,25.58-5.23,3.76-9.72,2.48-14.88,4.48-1.81.7-7.94,6.78-8.74,3.64,3.88-10.72,17.44-5.97,24.32-13.62,7.38-8.2.93-23.89,13.71-30.44,4.9-2.51,8.53-1.21,12.88-2.61,3.46-1.12,5.09-5,8.46-6.28Z" />
            <path className={pathClassName} d="M119.31,63.39c1.17-.06,2.77-.74,3.66.54,2.86,4.13-9.81,3.57-12.23,4.08-10.83,2.29-17.07,10.13-23.43,18.4-6.03,1.28,4.06-10.9,5.07-11.98,7.45-7.93,16.26-10.49,26.94-11.05Z" />
            <path className={pathClassName} d="M59.45,1.22c3.62-.76,1.16,9.21.77,10.85-1.62,6.77-5.51,14.1-10.07,19.36-1.28,1.48-8.74,8.76-10.06,8.51-1.19-.23-1.35-1.89-.79-3.09.91-1.96,7.69-7.18,9.66-9.7,3.95-5.06,6.94-12.53,8.34-18.77.59-2.62-.71-5.44,2.14-7.16Z" />
            <path className={pathClassName} d="M13.14,1.36c10.8-2.36,13.33,13.55,3.5,15.18C6.08,18.28,4.53,3.25,13.14,1.36ZM11.99,11.87c2.4,2.38,7.11,1.08,6.86-3.29-.43-7.55-11.92-1.72-6.86,3.29Z" />
            <path className={pathClassName} d="M113.83,32.35c10.8-2.36,13.33,13.55,3.5,15.18-10.57,1.74-12.12-13.29-3.5-15.18ZM112.68,42.86c2.4,2.38,7.11,1.08,6.86-3.29-.43-7.55-11.92-1.72-6.86,3.29Z" />
            <path className={pathClassName} d="M113.83,102.05c10.8-2.36,13.33,13.55,3.5,15.18-10.57,1.74-12.12-13.29-3.5-15.18ZM112.68,112.56c2.4,2.38,7.11,1.08,6.86-3.29-.43-7.55-11.92-1.72-6.86,3.29Z" />
        </svg>
    );
};

export default PartyIcon;