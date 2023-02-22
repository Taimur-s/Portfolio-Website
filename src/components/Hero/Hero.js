import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is what i do my services this how i can help you!
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/taimursh/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;