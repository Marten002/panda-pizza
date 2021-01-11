import React, { Suspense } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from "react-redux"

import Preloader from "./components/Preloader/Preloader"
import Alert from "./components/Alert/Alert"
import Header from './components/Header/Header'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Shipping from "./pages/Shipping/Shipping"
import Order from "./pages/Order/Order"
import Resolve from "./pages/Resolve/Resolve"
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {

    const { itemsCount } = useSelector(({ cart }) => {
        return {
            itemsCount: cart.itemsCount
        }
    })

    return (
        <Suspense fallback={
            <Preloader/>
        }>
            <Router>
                <div className="app">
                    <Alert className="alert--home"/>
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Home component="pizza"/>
                        </Route>
                        <Route exact path="/sushi">
                            <Home component="sushi"/>
                        </Route>
                        <Route exact path="/sets">
                            <Home component="sets"/>
                        </Route>
                        <Route exact path="/salad">
                            <Home component="salad"/>
                        </Route>
                        <Route exact path="/drinks">
                            <Home component="drinks"/>
                        </Route>
                        <Route exact path="/other">
                            <Home component="other"/>
                        </Route>
                        <Route exact path="/cart/">
                            <Cart/>
                        </Route>
                        <Route
                            exact
                            path="/shipping/"
                            render={() => (itemsCount === 0 ? <Redirect to="/"/> : <Shipping/>)}
                        >
                        </Route>
                        <Route
                            exact
                            path="/order/"
                            render={() => (itemsCount === 0 ? <Redirect to="/"/> : <Order/>)}
                        >
                        </Route>
                        <Route exact path="/resolve/">
                            <Resolve/>
                        </Route>
                        <Route>
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </Suspense>
    )
}

export default App
