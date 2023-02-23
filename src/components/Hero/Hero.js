import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Taimur<br />
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText>
      With extensive experience in web development, graphic design, business development, digital marketing, and personal branding, I deliver high-quality work that exceeds clients' expectations. My strong communication skills and collaborative approach ensure successful project delivery.
      Let me bring value to your organization as your web developer, graphic designer.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/taimursh/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;