import {Outlet, Link} from 'react-router-dom';
import Header from '../Components/Header';

const Layout = () => {
      return (
            <div>
                  <div className="sideNav">
                        <br></br>
                        <Header />
                        <Link style={{color: 'white'}}
                         to="/"><h1>📰 Dashboard</h1></Link>
                        <Link style={{color: 'white'}} to="/search"><h1>🔍 Search</h1></Link>
                        <Link style={{color: 'white'}} to="/about"><h1>🏠 About</h1></Link>
                  </div>
              <Outlet />
            </div>
          );
};

export default Layout;