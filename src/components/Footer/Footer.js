import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:0092-331-401-0886'>0092-331-401-0886</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:tamur.hashmi@gmail.com'>tamur.hashmi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={'https://github.com/Taimur-s/'}>
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons href={'https://www.linkedin.com/in/taimursh/'}>
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
          <SocialIcons href={'https://wa.me/message/6UBWHEFI5IS7I1'}>
            <AiFillPhone size={'3rem'} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
