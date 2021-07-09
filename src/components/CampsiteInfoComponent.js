import React, {Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label,  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
            </Card>
        </div>
    )
}

function RenderComments ({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4 class="text-center">Listing Details</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h2 class="text-center">{comment.text}</h2>
                            <h4 class="text-center">{comment.desc}</h4>
                            <p class="text-center font-weight-bold">{comment.ldesc}</p>
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

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )    
    }  
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isModalOpen: false,
          touched: {
            author: false,
            comment: false,
          },
        };  
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: "+ JSON.stringify(values));
    }

    render() {
        return(
            <React.Fragment>
                <Button outline className="fa fa-pencil fa-lg" onClick={this.toggleModal}>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>    
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                validators={{
                                    required, 
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be at least 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text">Comment</Label>
                                <Control.textarea model=".text" id="text" name="text" rows="6" className="form-control" />
                            </div>   
                            <Button type="submit" value="submit" color="primary">Submit</Button>     
                            </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
     );
  }  
}    
export default CampsiteInfo;