import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Skills from './containers/skills';
// import Contact from './containers/contact';
import Navbar from './components/navBar';
import './App.scss';

// const Resume = lazy(() => import('./containers/resume'));
const Home = lazy(() => import('./containers/home'));
const Portfolio = lazy(() => import('./containers/portfolio'));
const About = lazy(() => import('./containers/about'));
const Skills = lazy(() => import('./containers/skills'));

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='app__main-page-content'>
          <Suspense
            fallback={
              <div
                style={{ fontSize: 70, color: 'white' }}
                className='app__loading_box'
              >
                <div class='ring'>
                  <h1>Loading...</h1>
                </div>
              </div>
            }
          >
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/portfolio' element={<Portfolio />} />
              {/* <Route path='/resume' element={<Resume />} /> */}
              {/* <Route path='/contact' element={<Contact />} /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
