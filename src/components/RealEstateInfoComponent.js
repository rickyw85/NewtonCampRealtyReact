import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
            </Card>
        </div>
    )
}

function RenderDescriptions ({descriptions}) {
    if (descriptions) {
        return (
            <div className="col-md-5 m-1">
                <h4 class="text-center">Listing Details</h4>
                {descriptions.map(description => {
                    return (
                        <div key={description.id}>
                            <h2 class="text-center">{description.text}</h2>
                            <h4 class="text-center">{description.desc}</h4>
                            <p class="text-center font-weight-bold">{description.ldesc}</p>
                        </div>    
                    )
                })}
            </div>       
        )       
    }
    return (
        <div></div>
    );        
}    

function RealEstateInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/listings">Listings</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderDescriptions descriptions={props.descriptions} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )    
    }  
}

export default RealEstateInfo;