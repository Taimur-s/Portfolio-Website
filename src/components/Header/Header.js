import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMobile, AiFillPhone } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href={'/'}>
        <a style={{ display: 'flex', alignItems:'center', color:'white', marginBottom:'20px'}}>
          <DiCssdeck size='2rem'/> <Span>Portfolio</Span>
          </a>
      </Link>
    </Div1>
    <Div2 style={{marginTop:'2px'}}>
      <li>
        <Link href={'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href={'#tech'}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#about'}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 style={{marginTop:'2px'}}>
      <SocialIcons  href={'https://github.com/Taimur-s/'}>
        <AiFillGithub size= {'3rem'}/>
      </SocialIcons>
      <SocialIcons  href={'https://www.linkedin.com/in/taimursh/'}>
        <AiFillLinkedin size= {'3rem'}/>
      </SocialIcons>
      <SocialIcons  href={'https://wa.me/message/6UBWHEFI5IS7I1'}>
        <AiFillPhone size= {'3rem'}/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
