import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/home'
                scroll
              >
                Coder_Tushar
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to='/home'>Home</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/about'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '1.6rem',
                }}
                to='/home'
                scroll
              >
                Coder_Tushar
              </Link>
            }
            className='drawer'
          >
            <Navigation>
              <Link to='/home' style={{ color: 'black', fontSize: '1.3rem' }}>
                Home
              </Link>
              <Link to='/resume' style={{ color: 'black', fontSize: '1.3rem' }}>
                Resume
              </Link>
              <Link to='/about' style={{ color: 'black', fontSize: '1.3rem' }}>
                About Me
              </Link>
              <Link
                to='/projects'
                style={{ color: 'black', fontSize: '1.3rem' }}
              >
                Projects
              </Link>
              <Link
                to='/contact'
                style={{ color: 'black', fontSize: '1.3rem' }}
              >
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />

            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
