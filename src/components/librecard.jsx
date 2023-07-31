import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import '../index.css'
import { libre } from "../assets";
 
import { LibreCardDetails } from './librecarddetails'

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
  margin-bottom: 3;
  z-index:1000;
  font-size: 80px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 110%; 
  height: 110%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function LibreCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      
    <CardContainer
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.2}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{ cursor: "grabbing" }}
    >
      <TopContainer>
        <CircleWrapper>
          <Circle />
        </CircleWrapper>

        
        <NikeText>Libre</NikeText>
      </TopContainer>
      
      <ShoesWrapper>
        <Shoes
            style={{ x, y, rotateX, rotateY, rotate: "deg", z: 0 }}
            drag
            dragElastic={1.22}
            whileHover={{ cursor: "grabbing" }}
            
          >
           <img src={libre} className="justify-center mb-12" />
          </Shoes>
        </ShoesWrapper>
      <BottomContainer>

        <LibreCardDetails />
     
      </BottomContainer>
      
    </CardContainer>
  
  </CardWrapper>
  );
}