// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import { Outlet} from 'react-router-dom';
// import  { Home } from './components/pages/home.js';
// import { Blog } from './components/pages/blog.js';
// import { User } from './components/pages/user';


function App() {
  return (
  
    <div>
       <Menu/>
      {/* <Routes>
        <Route path='/' element={<Home />} >
            <Route path='blog'  element={<Blog />} />
            <Route path='user' element={<User />} />
        </Route>
      </Routes> */}
      <Outlet/>
    </div>

  );
}

export default App;
