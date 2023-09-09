import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import '../index.css'
import { guitar } from "../assets";
 
import { GuitarifyCardDetails } from './guitarifycarddetails'

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #496944;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: width 0.2s, background-color 0.8s;

 
  &:hover {
    width: 750px; /* Change the width on hover */
    background-color: #264026;
  }
`;





const CircleWrapper = styled.div`
  sm-position: absolute;
  position: absolute;
  top: 0;
  left: 100;
  min-width: 30%;
  min-height: 100%;
  
  border-top-right-radius: 25px;
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
  width: 100%;
  height: 80%;
  sm-position: absolute;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -100000000;
`;

const Shoes = styled(motion.div)`
  position: absolute;
  sm-position: absolute;
  width: auto;
  height: 190px;
  sm-z-index: -100000000;
 
  margin-right: 3em;
  margin-top: 4em;

  img {
    z-index: -1000000000;
    width: auto;
    height: 100%;
   
  }
`;

export function GuitarifyCard(props) {
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
         
        </CircleWrapper>

        
        <NikeText>Guitarify</NikeText>
      </TopContainer>
      <ShoesWrapper>
        <Shoes
            style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 0 }}
            drag
            dragElastic={1.22}
            whileHover={{ cursor: "grabbing" }}
          >
           <img src={guitar} />
          </Shoes>
        </ShoesWrapper>
      <BottomContainer>

        <GuitarifyCardDetails />
     
      </BottomContainer>
      
    </CardContainer>
  
  </CardWrapper>
  );
}