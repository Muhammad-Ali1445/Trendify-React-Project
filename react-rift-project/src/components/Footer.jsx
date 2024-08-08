


import React from 'react';
import Container from './common/Container';
import Row from './common/Row';

const Footer = () => {
  return (
    <Container className="bg-black h-[70px] py-[14px]">
      <Row className="text-white justify-between h-full items-center">
        <p>© 2023 Trendify Inc.</p>
        <img src="/img/cards.png" alt="cards" className="w-[283px]" />
        <p>Scroll to Top</p>
      </Row>
    </Container>
  );
};

export default Footer;