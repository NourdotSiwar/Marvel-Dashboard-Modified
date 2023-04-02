// importing the necessary libraries
import {Outlet, Link} from 'react-router-dom';
import Header from '../Components/Header';

// Layout component is used to display the side navigation bar
const Layout = () => {
      return (
            <div>
                  <div className="sideNav">
                        <br></br>
                        <Header />
                        <Link style={{color: 'white'}} to="/"><h1>📰 Dashboard</h1></Link>
                        <Link style={{color: 'white'}} to="/charts"><h1>📈 Charts</h1></Link>
                  </div>
              <Outlet />
            </div>
          );
};

export default Layout;