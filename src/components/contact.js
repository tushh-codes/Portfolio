import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import img from '../images/img.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Tushar Rathore</h2>
            <img
              src={img}
              alt='img'
              style={{ height: '250px', borderRadius: '25px' }}
            />
            <p
              style={{
                width: '75%',
                margin: 'auto',
                paddingTop: '1em',
                fontSize: '1.5rem',
                lineHeight: '3rem',
              }}
            >
              Hey there!! It's Tushar here...<br></br>Always Seeking for
              opportunities..<br></br>On the way to be a good Devloper :)
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent className='phone'>
                    <i className='fas fa-phone-square' aria-hidden='true'></i>
                    8619972643
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className='phone'>
                    <i className='fab fa-instagram' aria-hidden='true'></i>
                    _tushar.rathore_
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className='phone'>
                    <i
                      className='fas fa-envelope-square'
                      aria-hidden='true'
                    ></i>
                    tushar2643@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
