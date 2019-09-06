import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
// import { Drawer } from 'react-mdl';
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
                    <a href="#home" style={{color: 'white !important'}}><b>Home</b></a>
                    <a href="#aboutme"><b>About</b></a>
                    <a href="#projects"><b>Work</b></a>
                    <a href="#contact"><b>Contact</b></a>
                </Navigation>
            </Header>
            {/*<Drawer title="Welcome!">
                <Navigation>
                    <a href="#home">Home</a>
                    <a href="#aboutme">About</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                    </Navigation>
            </Drawer>*/}
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
