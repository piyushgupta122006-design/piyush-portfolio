import React from 'react';
import { Skiper19 } from '../ui/svg-follow-scroll';

export const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="w-full">
      <Skiper19
        headingLine1="Let's Build"
        headingLine2="Something Exceptional"
        headingLine3="Together."
        subheading="Open for high-impact full-stack platforms, autonomous AI systems, and engineering collaborations."
        footerTitle="PIYUSH GUPTA"
        email="piyushgupta122006@gmail.com"
        githubUrl="https://github.com/piyushgupta122006-design"
        location="Bhiwandi, Mumbai, India • BNN College (SYCS)"
      />
    </div>
  );
};

export default ContactSection;
