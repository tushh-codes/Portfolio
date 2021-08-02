import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className='landing-grid'>
        <Cell col={12}>
          <img className='avatar' src={Avatar} alt='avatar' />

          <div className='banner-text'>
            <h1>Front-End Devloper</h1>
            <hr />
            <p>HTML | CSS | JavaScript | React | Bootstrap</p>
            <div className='social-link'>
              <a
                href='https://www.linkedin.com/in/tushar-rathore-9927761b3/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-linkedin' aria-hidden='true'></i>
              </a>
              <a
                href='https://github.com/Coder-Tushar'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-github' aria-hidden='true'></i>
              </a>
              <a
                href='https://www.instagram.com/_tushar.rathore_/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-instagram' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Home;
