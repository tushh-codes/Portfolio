import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://reactjs.org/logo-og.png) center / cover',
                fontFamily: '',
              }}
            >
              Monsters Rolodex
            </CardTitle>
            <CardText
              style={{
                color: 'black',
                fontSize: '1.2rem',
              }}
            >
              A Basic React Js Project
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://coder-tushar.github.io/monsters-rolodex/'
                style={{ textTransform: 'Capitalize', fontSize: '1.2rem' }}
              >
                Github
                <i
                  className='fab fa-github'
                  aria-hidden='true'
                  style={{ color: 'black', padding: '5px' }}
                ></i>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://startupbonsai.com/wp-content/uploads/2020/07/Best-Online-Quiz-Makers-Social.jpg) center / cover',
                fontFamily: '',
              }}
            >
              A Quiz App
            </CardTitle>
            <CardText
              style={{
                color: 'black',
                fontSize: '1.2rem',
              }}
            >
              Quiz App
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://coder-tushar.github.io/quiz-app/'
                style={{ textTransform: 'Capitalize', fontSize: '1.2rem' }}
              >
                Github
                <i
                  className='fab fa-github'
                  aria-hidden='true'
                  style={{ color: 'black', padding: '5px' }}
                ></i>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8ifR1WgZec3AaalNWAzFlm_TBUNKxJpTZg&usqp=CAU) center / cover',
                fontFamily: '',
              }}
            >
              Bootstrap Website
            </CardTitle>
            <CardText
              style={{
                color: 'black',
                fontSize: '1.2rem',
              }}
            >
              icoder
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://coder-tushar.github.io/icoder/'
                style={{ textTransform: 'Capitalize', fontSize: '1.2rem' }}
              >
                Github
                <i
                  className='fab fa-github'
                  aria-hidden='true'
                  style={{ color: 'black', padding: '5px' }}
                ></i>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Bootstrap</Tab>
        </Tabs>
        <Grid className='projects-page'>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
