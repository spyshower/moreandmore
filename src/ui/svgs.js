import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Leave = ({ size = 36, color = 'rgb(50,50,50)' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        className="size-6"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        // style={{ flexBasis: 200, flexShrink: 0 }}
    >
        <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
    </Svg>
);

export const LongArrow = ({ size = 36, color = 'rgb(50,50,50)' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 435.99 189.16"
        width={size}
        height={size}
        stroke={color}
        // stroke
    >
        <Path
            d="m331.41 10 84.58 84.58m0 0-84.58 84.58m84.58-84.58H10"
            style={{
                fill: color,
                stroke: color,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 34,
            }}
            // strokeWidth={14}
        />
    </Svg>
);

export const Back = ({ size = 36, color = 'rgb(50,50,50)' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={size}
        height={size}
    >
        <Path
            d="M218.63 459.65c-7.34 0-14.68-2.8-20.28-8.4L17.14 270.05l-.03-.03c-.01 0-.02-.02-.03-.02 0-.02-.02-.02-.02-.03-2.7-2.74-4.75-5.87-6.13-9.23a28.642 28.642 0 0 1-2.17-10.62s0-.02 0-.04V249.42c.04-3.76.81-7.34 2.17-10.62 1.38-3.35 3.43-6.49 6.13-9.22s.02-.03.04-.04l.05-.05 181.19-181.2c11.2-11.19 29.36-11.19 40.56 0 11.2 11.2 11.2 29.36 0 40.56L106.66 221.09h354.93c15.84 0 28.68 12.84 28.68 28.68s-12.84 28.68-28.68 28.68H106.66L238.91 410.7c11.2 11.19 11.2 29.36 0 40.55-5.6 5.6-12.94 8.4-20.28 8.4Z"
            style={{
                fill: color,
                strokeWidth: 0,
            }}
        />
    </Svg>
);
export const Heart = ({ size = 36, color = 'rgb(50,50,50)', filled = false }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke={color}
        fill={filled ? color : 'transparent'}
    >
        <Path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </Svg>
);
