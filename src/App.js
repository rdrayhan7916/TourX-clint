import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AuthProvider from './context/AuthProvider';
import Admin from './Dashboard/Admin/Admin'
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
