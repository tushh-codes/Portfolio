import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../images/avataaars.png';
const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <img
              src={img}
              alt='avtar'
              style={{
                height: '200px',
                marginBottom: '-5rem',
                marginRight: '8rem',
              }}
            />
          </div>
          <h2 style={{ paddingTop: '2em' }}>Tushar Rathore</h2>
          <h4 style={{ color: 'grey' }}>Devloper</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
          <p style={{ fontSize: '1.3rem' }}>
            Hey there!! It's Tushar here...<br></br>Always Seeking for
            opportunities..<br></br>On the way to be a good Devloper :)
          </p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
          <h5>Address</h5>
          <p style={{ fontSize: '1.3rem' }}>
            Near Railway Crossing, Sojat Road ,<br></br> Pali
          </p>
          <h5>Phone</h5>
          <p style={{ fontSize: '1.3rem' }}>8619972643</p>
          <h5>Email</h5>
          <p style={{ fontSize: '1.3rem' }}>tushar2643@gmail.com</p>
          <h5>Github</h5>
          <p style={{ fontSize: '1.3rem' }}>github.com/Coder-Tushar</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
        </Cell>
        <Cell className='resume-right-col' col={8}>
          <h2>Education</h2>
          <Education
            startYear={2019}
            endYear={2023}
            schoolName={'MITS JADAN'}
            schoolDesc={'pursuing B. Tech. in CSE (studying in Vth Sem) '}
          />
          <Education
            startYear={2014}
            endYear={2018}
            schoolName={'Siddhart Shiksha Sadan, Sojat Road'}
            schoolDesc={
              'Completed My XII with 89% in Science Stream and X with 89.50%.'
            }
          />

          <hr style={{ borderTop: '3px solid royalblue' }} />

          <h2>Experience</h2>
          <Experience startYear={''} endYear={''} jobName={''} jobDesc={''} />
          <hr style={{ borderTop: '3px solid royalblue' }} />
          <h2>Skills</h2>
          <Skills skill='HTML' progress={80} />
          <Skills skill='javascript' progress={65} />
          <Skills skill='CSS' progress={85} />
          <Skills skill='React' progress={50} />
          <Skills skill='SQL' progress={55} />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
