import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, i'm Caleb<br />
          Welcome To
          My Personal Portfolio.
        </SectionTitle>
        <SectionText>
          Front End development With Full Stack Experience
        </SectionText>
        <Button onClick={() => window.location = 'https://mail.google.com/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;