import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
});

const DevLogoFull = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      viewBox="0 0 1000 1000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: '2',
      }}
    >
      <g transform="matrix(9.0926,0,0,9.0926,-704.356,-504.705)">
        <g transform="matrix(-43.9316,31.0289,31.0289,43.9316,143.99,78.8867)">
          <path
            d="M0.068,-0.194L1.293,-0.194L1.224,0.208L0.352,0.208L0.068,-0.194Z"
            style={{ fill: 'url(#_Linear1)', fillRule: 'nonzero' }}
          />
        </g>
        <g transform="matrix(25.1672,11.3821,11.3821,-25.1672,88.4482,119.43)">
          <path
            d="M0.369,-0.093L0.812,-0.261L0.577,0.261L0.369,-0.093Z"
            style={{ fill: 'url(#_Linear2)', fillRule: 'nonzero' }}
          />
        </g>
        <g transform="matrix(43.9314,-31.0293,-31.0293,-43.9314,142.496,126.421)">
          <path
            d="M-0.427,-0.2L0.797,-0.2L0.728,0.201L-0.144,0.201L-0.427,-0.2Z"
            style={{ fill: 'url(#_Linear3)', fillRule: 'nonzero' }}
          />
        </g>
        <g transform="matrix(9.96946,11.7196,11.7196,-9.96946,153.525,86.4337)">
          <path
            d="M1.045,0.367L0.196,0.298L0.978,-0.367L1.045,0.367Z"
            style={{ fill: 'url(#_Linear4)', fillRule: 'nonzero' }}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.998919,-0.0464871,-0.0464871,0.998919,1.34248,0.0312209)"
        >
          <stop
            offset="0"
            style={{ stopColor: 'rgb(80,0,244)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(114,18,255)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(114,18,255)', stopOpacity: '1' }}
          />
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,-1,0,6.43621e-06)"
        >
          <stop
            offset="0"
            style={{ stopColor: 'rgb(15,0,100)', stopOpacity: '1' }}
          />
          <stop
            offset="0"
            style={{ stopColor: 'rgb(15,0,100)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(78,41,198)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(78,41,198)', stopOpacity: '1' }}
          />
        </linearGradient>
        <linearGradient
          id="_Linear3"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.99998,-0.00631504,-0.00631504,-0.99998,3.71983e-06,0.00117807)"
        >
          <stop
            offset="0"
            style={{ stopColor: 'rgb(229,0,255)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(169,0,206)', stopOpacity: '1' }}
          />
        </linearGradient>
        <linearGradient
          id="_Linear4"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,-5.55112e-17,-5.55112e-17,-1,0,1.03769e-05)"
        >
          <stop
            offset="0"
            style={{ stopColor: 'rgb(169,0,206)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(120,0,163)', stopOpacity: '1' }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'rgb(120,0,163)', stopOpacity: '1' }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DevLogoFull;
