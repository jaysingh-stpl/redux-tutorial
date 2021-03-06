import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Main} from '../../components/Main';
import {User} from '../../components/User';
import {setName} from '../../actions/userActions';
class App extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <Main changeName={()=>this.props.setName('Anna')}></Main>
                    <User name={this.props.user.name}></User>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name)=> {
            dispatch(setName(name));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);