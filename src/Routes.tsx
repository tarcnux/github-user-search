import Footer from 'Components/Footer';
import Navbar from 'Components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';
import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';

const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
);


export default Routes;