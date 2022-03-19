import React from "react";

import { Container, CustomButton } from "components";

import {
  IntroContent,
  IntroDesc,
  IntroImgWrapper,
  IntroSectionWrapper,
  IntroTitle,
} from "./IntroSection.styles";

import introImg from "assets/images/intro.png";

const IntroSection: React.FC = () => {
  return (
    <IntroSectionWrapper>
      <IntroContent>
        <Container>
          <IntroTitle className="gradient-font">Cryptid File NFTs</IntroTitle>
          <CustomButton
            onClick={() => {}}
            borderColor={"#FFC75B #956B1B"}
            fColor={"#CBA74A"}
            width={627}
            shadow="#916B21"
          >
            Buy on Opensea
          </CustomButton>
          <IntroDesc className="gradient-font">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
          </IntroDesc>
        </Container>
      </IntroContent>
      <IntroImgWrapper>
        <img src={introImg.src} alt="introImg" />
      </IntroImgWrapper>
    </IntroSectionWrapper>
  );
};

export default IntroSection;
