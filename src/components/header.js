import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "../images/logo.svg";

const HeaderWrapper = styled.header`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;
const HeaderContainer = styled.div`
  margin: 0;
  max-width: 960px;
  padding: 1rem;
  h1 {
    margin: 0 0 0 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={Logo} alt="Level Up Logo" style={{ width: "100px" }} />
        <h1>{siteTitle}</h1>
      </Link>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
