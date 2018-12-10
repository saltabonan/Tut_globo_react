import React, {Component} from 'react';
import "./house.css";

class house extends Component {
    state = {}
    render(){
        return (
            <div>
                <div className="row mt-2">
                    <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-md-12">{house.address}</h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img src={`https://thumbs.dreamstime.com/z/sweet-hot-chocolate-mug-christmas-drink-marshmallow-selective-focus-shallow-depth-field-sweet-hot-chocolate-mug-133641831.jpg`}  width={500} height={300} mode='fit' alt="House" />
                    </div>
                    <div className="col-md-5">
                        <p className="price">${house.price}</p>
                        <p>{house.description}</p>
                    </div>
                </div>
            </div>
            )
    }
}

export default house;