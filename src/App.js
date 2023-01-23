import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CurrentUserContext from './contexts/current-user/current-user.context';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null;

  componentDidMount() {

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if(userAuth) { // If authenticated successfully
          const userRef = await createUserProfileDocument(userAuth); // Store the login user data into document

          userRef.onSnapshot( snapShot => {
            this.setState({currentUser :{
                id:snapShot.id,
                ...snapShot.data()
              }});
          });
        } else {
          this.setState({ currentUser: userAuth })
        }
        
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header/>
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => 
            this.state.currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage/> )
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
