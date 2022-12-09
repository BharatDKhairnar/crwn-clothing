import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = (props) => {
//   console.log(props);
//   return(
//     <h1>Hello this is the big</h1>
//   )
// }

// const HatsPageDetail = (props) => {
//   console.log(props);
//   return(
//     <h1>Detail page detail id{props.match.params.id}</h1>
//   )
// }

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/' component={ShopPage}/>
      {/* <Route path='/hatspage/:id' component={HatsPageDetail}/> */}
    </div>
  );
}

export default App;
