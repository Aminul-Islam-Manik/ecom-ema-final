import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import { productAndCart } from './loaders/productAndCart';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', 
      element:<Main></Main>,
      children:[
        {path:'/', 
        loader:async()=>{
          return fetch('products.json')},
        element:<Shop></Shop>},

        {path:'orders', 
        loader: productAndCart,
        element:<Orders></Orders>},

        {path:'inventory', element:<Inventory></Inventory>},
        
        {path:'about', element:<About></About>}
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
