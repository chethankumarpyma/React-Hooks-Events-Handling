import React, { useState } from 'react';


let Counter = () => {
    let [counter, setCounter] = useState(0);   

    let incrCounter = () => {
        setCounter(counter+1);
    }
return(
    <React.Fragment>
        <section className='mt-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card text-center'>
                            <div className='card-header'>
                                <h1 className='display-4'>{counter}</h1>
                            </div>
                            <div className='card-body'>
                                <button 
                                    onClick={incrCounter} 
                                    className='btn btn-primary-sm'>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
)
}
export default Counter;