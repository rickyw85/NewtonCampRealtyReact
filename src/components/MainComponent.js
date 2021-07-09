import React, { Component } from 'react';
import Listings from './ListingsComponent';
import RealEstateInfo from './RealEstateInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        descriptions: state.descriptions,
        newton: state.newton
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home 
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    newt={this.props.newton.filter(newt => newt.featured)[0]}
                />
            );
        };

        const CampsiteWithId = ({match}) => {
            return (
                <RealEstateInfo 
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    descriptions={this.props.descriptions.filter(description => description.campsiteId === +match.params.campsiteId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/listings' render={() => <Listings campsites={this.props.campsites} />} />
                    <Route path='/listings/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={About} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));