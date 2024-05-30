import React, { useState } from "react";

let WishMessage = () => {
    let [message, setMessage] = useState('hello')

    let ClickGoodMorning = ()=>{
        setMessage('Good Morning')
    }

    let ClickGoodAfterNoon =()=>{
        setMessage('Good AfterNoon')
    }

    let ClickGoodEvening = () => {
        setMessage('Good Evening')
    }


    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">WishMessage</p>
                                </div>
                                <div className="card-body">
                                    <h2>{message}</h2>
                                    <button onClick={ClickGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={ClickGoodAfterNoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={ClickGoodEvening}  className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default WishMessage;