import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderListingsItem({house}) {
    return (
        <Card>
            <Link to={`/listings/${house.id}`}>
                <CardImg width="100%" src={house.image} alt={house.name} />
                <CardImgOverlay>
                    <CardTitle>{house.name}</CardTitle>
                </CardImgOverlay>
            </Link>   
        </Card>
    );
}

function Listings(props) {
        const listings = props.houses.map(house => {
            return (
                <div key={house.id} className="col-md-5 m-1">
                    <RenderListingsItem house={house} />
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