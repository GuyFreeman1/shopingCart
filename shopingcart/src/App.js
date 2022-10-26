import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Head from './Head.jsx';
import Cart from './Cart.jsx';
import {CartProvider} from 'react-use-cart' 


function App() {
  return (
    <div className="App">
       <CartProvider>
    <Head/>
    <Cart/>
      </CartProvider>
    </div>
  );
}

export default App;
