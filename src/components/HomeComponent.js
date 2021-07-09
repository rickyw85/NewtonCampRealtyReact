import React from 'react';
import { Card, CardImg, } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.newt} />
                </div>
                <div class="container-fluid">
                    <div class="row row-content">
                        <div class="col text-center">
                            <a href="/index" type="button" class="btn btn-light btn-circle btn-xl">Home</a>{' '}
                            <a href="/aboutus" type="button" class="btn btn-light btn-circle btn-xl">About Me</a>  
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row row-content">
                        <div class="col text-center"> 
                            <a href="/listings" type="button" class="btn btn-light btn-circle btn-xl">Listings</a>{' '}
                            <a href="/contactus" type="button" class="btn btn-light btn-circle btn-xl">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="col-md m-1">
                </div>
            </div>
        </div>
    );
}

export default Home;