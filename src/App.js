import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
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
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            })
          })
        } else {
          this.setState({currentUser:userAuth})
        } 
        console.log(this.state.currentUser);       
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        {/* <Route path='/hatspage/:id' component={HatsPageDetail}/> */}
      </div>
    );
  }
}

export default App;
