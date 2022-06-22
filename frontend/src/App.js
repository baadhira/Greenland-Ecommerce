
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
// import { BrowserR } from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ProductScreen from './screens/ProductScreen';
import { CartScreen } from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreeen from './screens/ShippingScreeen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';



function App() {
  return (
   <Router>
     

      <Header/>
      <main className="py-3">
        <Container>
      {/* <Route path="/checkout" element={<Checkout/>}/> */}
      <Routes>
      
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>
          <Route path="/shipping" element={<ShippingScreeen/>}/>
          <Route path="/payment" element={<PaymentScreen/>}/>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}/>

          <Route path="/product/:id" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/cart/:id" element={<CartScreen/>}/>



          </Routes>
        
        </Container>
      </main>
      <Footer/>
   
    </Router>
   
  );
}

export default App;