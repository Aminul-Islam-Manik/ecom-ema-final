import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', 
      element:<Main></Main>,
      children:[
        {path:'/', element:<Shop></Shop>},
        {path:'shop', 
        loader:async()=>{
          return fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        },
        element:<Shop></Shop>},
        {path:'inventory', element:<Inventory></Inventory>}
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
