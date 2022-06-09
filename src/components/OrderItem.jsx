import React, {useContext} from 'react';
import AppContext from '@context/AppsContext'
import '@styles/OrderItem.scss';
import iconclose from '@icons/icon_close.png'

const OrderItem = ({ product,index }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product, index);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={iconclose} className="itemremove" alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;