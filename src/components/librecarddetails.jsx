import React from "react";
import styled from "styled-components";




const DetailsContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #97b69d;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  z-index: 100000;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #97b69d;
    z-index: 10000;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:-10000000;

  img {
    width: auto;
    height: 13px;
  }
`;

export function LibreCardDetails(props) {
  return (
    <DetailsContainer>
      <SmallText></SmallText>
    
        <MediumText>Tracking blood sugar made easier</MediumText>
       
    
    
      <SpacedHorizontalContainer>
        <MediumText></MediumText>
        <a href="https://github.com/kavan7/MyGluco" target="_blank"><BuyButton>Github</BuyButton></a>
      </SpacedHorizontalContainer>
      <NikeLogo>
       
      </NikeLogo>
    </DetailsContainer>
  );
}