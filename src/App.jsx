import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Topbar from './components/Topbar';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Bag from './components/Bag';
import Search from './components/Search';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './assets/css/normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

function App() {
  const [toggleBag, setToggleBag] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleBagHandle = () => setToggleBag(!toggleBag);
  const toggleSearchHandle = () => setToggleSearch(!toggleSearch);
  const drawerOpen = toggleBag || toggleSearch ? 'app--is-drawer-visible' : '';

  return (
    <div className={`app ${drawerOpen}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Topbar toggleBag={toggleBagHandle} toggleSearch={toggleSearchHandle} />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/produto/:productname">
            <Product />
          </Route>
        </Switch>
        {toggleBag && <Bag toggle={toggleBagHandle} />}
        {toggleSearch && <Search toggle={toggleSearchHandle} />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
