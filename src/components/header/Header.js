import React from 'react';
import { css } from "@emotion/core";
import styled from '@emotion/styled'
import { Link } from "@reach/router";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 24px 24px 0 24px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-colour: #000;

    @media screen and (max-width: 560px) {
      min-height: 100px;
    }

    img {
      max-width: 50px;
    }
  `;

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  `;

  const Title = styled.h2`
    margin: 0;
    font-size: 1.2em;
  `;

  const SubTitle = styled.h3`
    margin: 0;
      font-size: 0.8em;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <>
      <Container>
        <StyledLink to="/">
          <img src="https://jvcparry.files.wordpress.com/2020/08/cropped-jvcp-logo-inverted.png" alt="" />
          <TitleContainer>
            <Title>JVC Parry</Title>
            <SubTitle>Indie TTRPG creator</SubTitle>
          </TitleContainer>
        </StyledLink>
        {/* <MobileNav /> */}
      </Container>
      {/* <Nav /> */}
    </>
  );
}

export default Header;

