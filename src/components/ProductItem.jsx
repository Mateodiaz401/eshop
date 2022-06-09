import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppsContext';
import addToCarImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ products } ) => {

    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    }
    return (
        <div className="ProductItem">
            <img src={products.images[0]} alt={products.title} />
            <div className="product-info">
                <div>
                    <p>${products.price}</p>
                    <p>{products.title}</p>
                </div>
                <figure onClick={ () => handleClick(products)}>
                    <img src={addToCarImage} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;