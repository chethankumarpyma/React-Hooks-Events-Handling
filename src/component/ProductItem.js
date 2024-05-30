import React, {useState} from 'react';

let ProductItem = () => {
    let [product , setProduct] = useState({
        sno : '10ANB',
        image : 'https://images-na.ssl-images-amazon.com/images/I/61WKkuufjBL._AC_SL1500_.jpg',
        name : 'Smart Watch',
        price : 1500,
        qty : 2
    });

    let incrQty = () => {
        setProduct({
            ...product,
            qty : product.qty + 1
        });
    };

    let decrQty = () => {
        setProduct({
            ...product,
            qty : (product.qty - 1 > 0) ? product.qty - 1 : 1
        });
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Cart Items</p>
                            <p className="lead"> Sequi, suscipit</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <pre>{JSON.stringify(product)}</pre>*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-primary table-striped">
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>NAME</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.sno}</td>
                                        <td>
                                            <img src={product.image} width="50" height="50" alt=""/>
                                        </td>
                                        <td>{product.name}</td>
                                        <td>&#8377;{product.price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle mx-1" onClick={decrQty}/>
                                            {product.qty}
                                            <i className="fa fa-plus-circle mx-1" onClick={incrQty}/>
                                        </td>
                                        <td>&#8377;{(product.price * product.qty)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ProductItem;