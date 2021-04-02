import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import { Redirect, Switch } from "react-router";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured');
        //console.log(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter /* basename={process.env.PUBLIC_URL} */>
                <div className='bg'>
                    <div className='app-wrapper'>
                        <HeaderContainer />
                        <Navbar />
                        <div className='app-wrapper-content'>

                            <Route exact path='/'
                                render={() => <Redirect to={'/profile'} />} />

                            <Route path='/dialogs'
                                render={withSuspense(DialogsContainer)} />


                            <Route path='/profile/:userId?'
                                render={withSuspense(ProfileContainer)} />

                            <Route path='/users'
                                render={() => <UsersContainer />} />

                            <Route path='/login'
                                render={() => <Login />} />

                            <Route path='/my-app'
                                render={() => <Redirect to={'/profile'} />} />

                            {/* <Route path='*'
                                render={() => <div>404 NOT FOUND</div>} /> */}

                        </div>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJsApp;
