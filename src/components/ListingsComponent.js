import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderListingsItem({campsite}) {
    return (
        <Card>
            <Link to={`/listings/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>   
        </Card>
    );
}

function Listings(props) {
        const listings = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderListingsItem campsite={campsite} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Listings</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Current Listings</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {listings}
            </div>
        </div>
    );
}

export default Listings;