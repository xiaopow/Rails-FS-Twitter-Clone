import React from 'react';
import { handleErrors } from '@utils/fetchHelper';
import Login from './login';
import Signup from './signup';
import './home.scss';
import image from './images/background_1.png'; 


class Home extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  render () {
    const { authenticated } = this.state;
      return (
        <React.Fragment>
          <nav className='navbar sticky-top'>
            <a className='navbar-brand' href='#'><h6>Twitter Clone</h6></a>   
            <ul className='language'>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' role='button' href='#'>
                  language: <strong>English</strong><span className='caret'></span>
                </a>
                <ul className='dropdown-menu row' role='menu'>
                  <li className="col-xs-12"><a href="#">Bahasa Malaya</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Dansk</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">English</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Japanese</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Greek</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Swahili</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Icelandic</a></li>
                  <hr className='py-0 my-0'/>
                  <li className="col-xs-12"><a href="#">Russian</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", minHeight:'100vh', minWidth:'100vw', position:'fixed' }}>
            <div className='container'>
              <div className='row'>
                <div className='col-0 col-md-1'></div>
                <div className='col-12 col-md-5 homecard ml-3'>
                    <h1 className='mb-4'><strong>Welcome to Twitter.</strong></h1>
                    <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>    
                    <div className='ferg-info'>
                      <a href='https://github.com/Valatulkas' target='_blank' id='ferg'>jFerg - FullStack Twitter Clone Project</a>
                      <br />
                      <a href='altcademy.com' target='_blank' id='alt'>photo by @Hackpacific</a>
                    </div>              
                </div>
                <div className='col-0 col-md-1'></div>
                <div className='col-12 col-md-3 user-action mr-3'>
                    <Login />
                    <div className='mt-4'>
                      <Signup />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    
  }
}

export default Home;