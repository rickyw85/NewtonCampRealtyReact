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
        houses: state.houses,
        descriptions: state.descriptions,
        newton: state.newton
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home 
                    house={this.props.houses.filter(house => house.featured)[0]}
                    newt={this.props.newton.filter(newt => newt.featured)[0]}
                />
            );
        };

        const HouseWithId = ({match}) => {
            return (
                <RealEstateInfo 
                    house={this.props.houses.filter(house => house.id === +match.params.houseId)[0]}
                    descriptions={this.props.descriptions.filter(description => description.houseId === +match.params.houseId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/listings' render={() => <Listings houses={this.props.houses} />} />
                    <Route path='/listings/:houseId' component={HouseWithId} />
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