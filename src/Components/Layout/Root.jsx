import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
