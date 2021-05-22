// Importing Modules

import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

// Creating a Class-Based Component for Dish Detail

    // Creating a Method to Render The Comments
    function RenderComments({ comments }) {
        
        if (!comments) {
            return (<div></div>)
        }
        const text = comments.map(comment => {
            return (
                
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
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
    function RenderDish({ dish }) {

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
    const DishDetail = (props) => {
        
        const dish = props.dish

        if (!dish) {
            return (<div></div>);
        }
        
        const dishItem = <RenderDish dish={props.dish} />
        const dishComment = <RenderComments comments={props.dish.comments} />;

        return (
            <div className='container d-flex'>
                {dishItem}
                {dishComment}
            </div>
        )
    }

export default DishDetail;