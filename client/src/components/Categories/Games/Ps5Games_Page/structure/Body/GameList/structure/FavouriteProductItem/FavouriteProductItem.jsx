import { useLocation, useNavigate } from "react-router-dom";
import style from "../FavouriteProductItem/FavouriteProductItem.module.css";

export const FavouriteProductItem = ({
    product,
}) => {

    let location = useLocation();
    let navigate = useNavigate();
    function NavigateToProduct() {

        console.log(product);
        let arrPath = product.path.split('/');
        arrPath.shift();
        debugger;
        let currentPath = '';
        if (arrPath[1] === 'games') {
            currentPath = `/${arrPath[0]}/game/${arrPath[2]}/${arrPath[3]}`; 
            navigate(currentPath, { replace: true });
        } else {
            currentPath = `/${arrPath[0]}/${arrPath[1]}/details/${arrPath[2]}`; 
            navigate(currentPath, { replace: true });
        }
    };


    return (
        <div className={style['favourite-product-item-container']}>

            <img className={style['product-image']} src={product.productImage} alt="product-image" />

            <div className={style['product-content']}>
                <h2 className={style['product-title']}>{product.productName}</h2>

                <p className={style['price']}>{product.productPrice} USD</p>
                <button onClick={NavigateToProduct} className={style['view-button']}>View</button>
            </div>
        </div>
    );
}