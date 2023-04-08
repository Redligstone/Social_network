import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Main from './components/Main/main';
import { HashRouter as Router } from 'react-router-dom';
import HeaderContainer from './components/Header/header_Container';
import {initializeApp} from './redux/App_reducer'
import { connect } from 'react-redux/es/exports';
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {

  componentDidMount(){
    debugger
    this.props.initializeApp(); 
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }

    return (
      <Router>
        <div className="wrapper" alt='chekk'>
          <header>
            <HeaderContainer/>
          </header>
    
          <div className="content">
            <div className="App">
              <div className='sidebar'>
                  <Sidebar/>
              </div>
              <div className='main'>
                <Main 
                profile={this.props.state.profilePage} 
                messages={this.props.state.messagesPage}
                dispatch={this.props.dispatch}
                store={this.props.store}
                />
              </div>
            </div>
          </div >
        </div >
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized
})
export default connect(mapStateToProps,{initializeApp})(App);
