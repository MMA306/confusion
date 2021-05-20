// Importing Modules
import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from './DishdetailComponent';

// Creating a Class-Based Component for Menu Display
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishSelected: null
        };

    }

    onDishSelect(dish) {

        this.setState({
            dishSelected: dish
        });

    }



    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">

                    <Card onClick={() => this.onDishSelect(dish)} >
                        <CardImg className="w-100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <DishDetail dish={this.state.dishSelected} />


            </div>
        );
    }
}

export default Menu;
