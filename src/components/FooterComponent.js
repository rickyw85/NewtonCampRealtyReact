import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h5>Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>{' '}
                        <a className="btn btn-social-icon btn-pinterest" href="http://pinterest.com/"><i class="fa fa-pinterest"></i></a>{' '}
                        <a className="btn btn-social-icon btn-reddit" href="http://reddit.com/"><i class="fa fa-reddit"></i></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/"><i class="fa fa-linkedin"></i></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;