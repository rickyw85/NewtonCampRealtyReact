import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Newton Camp</h2>
                    <hr />
                </div>
            </div>
            <div className="col">
                <Card className="bg-light mt-3">
                    <CardBody>
                        <blockquote class="blockquote card-body">
                            <p class="mb-0">“Buyers decide in the first eight seconds of seeing a home if they’re interested in buying it. Get out of your car, walk in their shoes and see what they see within the first eight seconds.”</p>
                            <footer class="blockquote-footer">Barbara Corcoran,</footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </div>
            <div class="row row-content">
            <div class="col-sm-6">
                <h3>Who is Newton Camp</h3>
                <p>Three time Real Estate Agent in the Tristate Region of the Year Newton Camp is a family man that happens to sell houses. Camp entered the real estate industry thirteen years ago after losing his mother to heart disease. Camp vowed to live a healthier and prosperous life in his mother's spirit. He has since been the most sought after real estate agent in all of California. His methods are proven with financial proof. Camp can and will get you the house you want. He is never out bid. His strengths are mirrored in his power to sell. Camp has never met a house that he could not sell. At the end of the day, Newton Camp just wants to go home to his loving wife and two and a half precious children. With them, he practices his favorite hobby of woodworking and carpentry. </p>
            </div>
            <div class="col-sm-6">    
                <img src="/assets/images/hands.jpg" class="image-fluid col" alt="Newton Camp" />
            </div>
        </div> 
        </div>
    );
}

export default About;