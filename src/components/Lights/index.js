//@flow
import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';

class Lights extends Component<*> {
  render() {
    return (
      <LightList>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
        <LI> </LI>
      </LightList>
    );
  }
}

export default Lights;

const width = 12;
const height = 28;
const spacing = 25;
const spread = 1;

const LightList = glamorous.ul({
  zIndex: 1000,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  pointerEvents: 'none',
  width: '100%',
  overflowX: 'hidden',
  paddingBottom: '16px'
});

let flash1 = css.keyframes({
  '0%, 100%': {
    background: 'rgba(0,247,165, 1)',
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,247,165,1)`
  },
  '50%': {
    background: `rgba(0,247,165, 0.4)`,
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,247,165,0.2)`
  }
});

let flash2 = css.keyframes({
  '0%, 100%': {
    background: 'rgba(0,255,255, 1)',
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,255,255,1)`
  },
  '50%': {
    background: `rgba(0,255,255, 0.4)`,
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,255,255,0.2)`
  }
});

let flash3 = css.keyframes({
  '0%, 100%': {
    background: 'rgba(247,0,148,1)',
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(247,0,148,1)`
  },
  '50%': {
    background: `rgba(0,255,255, 0.4)`,
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(247,0,148,0.2)`
  }
});

const LI = glamorous.li({
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  width: width,
  height: height,
  borderRadius: '50%',
  margin: `5px ${spacing}px 0`,
  display: 'inline-block',
  background: 'rgba(0,247,165,1)',
  boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,247,165,1)`,
  animation: `${flash1} 2s infinite ease-in-out alternate`,
  '&:nth-child(2n+1)': {
    background: 'rgba(0,255,255,1)',
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(0,255,255,0.5)`,
    animation: `${flash2} 0.4s infinite ease-in-out alternate`
  },
  '&:nth-child(4n+2)': {
    background: 'rgba(247,0,148,1)',
    boxShadow: `0px ${height / 6}px ${width * 2}px ${spread}px rgba(247,0,148,1)`,
    animation: `${flash3} 1.1s infinite ease-in-out alternate`
  },
  '&:nth-child(odd)': {
    animationDuration: '1.8s'
  },
  '&:nth-child(3n+1)': {
    animationDuration: '1.4s'
  },
  '&:before': {
    content: ' ',
    position: 'absolute',
    background: '#222',
    width: `${width - 2}`,
    height: `${height / 3}`,
    borderRadius: 3,
    top: `${0 - height / 6}`,
    left: '1px'
  },
  '&:after': {
    content: ' ',
    top: `${0 - height / 2}`,
    left: `${width - 3}`,
    position: 'absolute',
    width: `${spacing + 30}`,
    height: `${height / 3 * 2}`,
    borderBottom: 'solid #222 2px',
    borderRadius: '50%'
  },
  '&:last-child:after': {
    content: 'none'
  },
  '&:first-child': {
    marginLeft: -32
  }
});
