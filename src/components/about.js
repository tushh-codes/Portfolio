import React from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/img.jpg';

const About = () => {
  return (
    <Grid className='about-page'>
      <Cell col={12}>
        <img
          src={img}
          alt='img'
          style={{
            height: '300px',
            boxShadow: '0 0px 15px 15px black',
            borderRadius: '12px solid black',
            marginTop: '3rem',
          }}
        />

        <p
          style={{
            width: '75%',
            margin: 'auto',
            paddingTop: '2em',
            fontSize: '2.5rem',
            lineHeight: '4rem',
            fontWeight: 'bold',
            fontFamily: "'oxygen',sans-serif",
            letterSpacing: '1.5px',
          }}
        >
          Hey there!! It's Tushar here...<br></br>Always Seeking for
          opportunities..<br></br>On the way to be a decent Devloper :)
        </p>
      </Cell>
    </Grid>
  );
};

export default About;
