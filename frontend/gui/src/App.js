import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';

import BaseRouter from './routes';

import CustomLayout from './containers/Layout';

import * as actions from './store/actions/auth';

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount", 99999)
    this.props.onTryAutoSignup(); // this are the dispatch that we sent using mapDispatchToProps in the connect method
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>  {/* COMENT: we pass all props to CustomLayout */}
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}


function mapStateToProps(state) { // this pass the items of the state we choose to the props of the components in connect function
  return {
    isAuthenticated: state.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
