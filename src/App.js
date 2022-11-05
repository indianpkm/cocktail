import{Routes,Route} from 'react-router-dom'
import ErrorPage from './component/ErrorPage';
import Layout from './component/Layout';
import SearchBox from './component/SearchBox';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Layout>
    <SearchBox/>
    <HomePage/>
    </Layout>}></Route>
    <Route path='/products/:id' element={<ProductDetail/>}></Route>
    <Route path="/goToGoogle"
       render={() => window.location = "https://www.google.com"} >Go</Route>
       <Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://google.com'; 
     return null;
}}/>
    <Route path='*' element={<ErrorPage/>}></Route>
  </Routes>
  </>);
}

export default App;
