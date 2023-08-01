import { motion, useMotionValue, useTransform } from "framer-motion";
import {React, useState} from "react";
import styled from "styled-components";
import '../index.css'

 import { earth } from "../assets";
import { HubbleCardDetails } from './hubblecarddetails'




const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #496944;
  color: #fff;
  position: relative;
  cursor: hover;
`;

const CircleWrapper = styled.div`
  sm-position: absolute;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0.5em;
  right: 15em;
  z-index: 5;
  md-z-index: 5;
  background-color: #97b69d;
  border-radius: 50%;
  bg: hero-pattern;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 1000;
  font-size: 76px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 80%;
  height: 40%;
  sm-position: absolute;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const Shoes = styled(motion.div)`
  position: absolute;
  sm-position: absolute;
  width: auto;
  height: 190px;
  sm-z-index: 0;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;

  img {
    z-index: 0;
    width: auto;
    height: 100%;
   
  }
`;






export function HubbleCard(props) {



  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
   
    <CardWrapper>
      
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 1.5, left: 1.5, right: 1.5, bottom: 1.5 }}
        whileHover={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 0 }}
              drag
              dragElastic={0.12}
              whileHover={{ cursor: "grabbing" }}
            >
             <img src={earth} />
            </Shoes>
          </ShoesWrapper>
          
          <NikeText>HUBBLE</NikeText>
        </TopContainer>
       
        <BottomContainer>
  
          <HubbleCardDetails />
       
        </BottomContainer>
        
      </CardContainer>
    
    </CardWrapper>

  );
}