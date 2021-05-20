// Importing Modules
import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

// Creating a Class-Based Component for Dish Details
class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: this.props.detail
        };
    }

    // Creating a Method to Render The Comments
    renderComments(comments) {
        
        if (!comments) {
            return (<div></div>)
        }
        const text = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {text}
                </ul>

            </div>
        )
    }

    // Creating a Metohd to Render The Dishes
    renderDish(dish) {

        if (dish) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg className="w-100" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    

    // Main Render Method 
    render() {
        
        const dish = this.props.dish

        if (!dish) {
            return (<div></div>);
        }
        
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }

}

export default DishDetail;