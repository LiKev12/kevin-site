import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color"title="Welcome!" scroll>
                <Navigation>
                    <a href="#">Home</a>
                    <a href="#aboutme">About</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="KeyWatch">
                <Navigation>
                    <a href="#">Home</a>
                    <a href="#aboutme">About</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                    </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <LandingPage />
                <AboutMe />
                <Projects />
                <Contact />
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
