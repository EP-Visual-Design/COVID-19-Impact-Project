import React from 'react';
import styled from 'styled-components';

const AboutTab = () => {
  return (
    <StyledDiv>
      <section aria-labelledby="heading-purpose">
        <h2 id="heading-purpose">Purpose</h2>
        <p>
          More than numbers, I hope this site will help contribute to answering
          these questions: <br />
          How to mourn and memorialize the thousands dying everyday from the
          COVID-19 pandemic?
          <br />
          How to assess the impact on the families and the communities of the
          deceased? <br />
          How to build enduring institutions to mitigate their suffering and
          address systemic inequalities?
        </p>
      </section>
      <section aria-labelledby="section-development">
        <h2 id="section-development">Development and Coding</h2>
        <ul>
          <li>
            <a
              href="http://johnhenrythompson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              John Henry Thompson
            </a>
          </li>
        </ul>
        <h3>Inspiration</h3>
        <ul>
          <li>Shindy Johnson</li>
        </ul>
        <h3>Special Thanks</h3>
        <ul>
          <li>
            <a
              href="http://philsinatra.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phil Sinatra
            </a>
          </li>
          <li>
            <a
              href="http://epvisual.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EP Visual Design
            </a>
          </li>
        </ul>
        <h3>Dedication</h3>
        <ul>
          <li>For the Essential Workers</li>
        </ul>
      </section>
      {/* <p>
        Why and How this site is built:{' '}
        <a
          href="https://epvisual.com/covid19-document/"
          target="_blank"
          rel="noopener noreferrer"
        >
          COVID-19 Document
        </a>
      </p> */}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 1rem 0 0;
  padding: 1.5rem;

  section {
    margin-bottom: 3rem;
  }
`;

export default AboutTab;
