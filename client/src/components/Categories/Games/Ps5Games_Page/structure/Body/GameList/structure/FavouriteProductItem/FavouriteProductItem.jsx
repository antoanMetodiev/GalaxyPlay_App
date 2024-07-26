import { useLocation, useNavigate } from "react-router-dom";
import style from "../FavouriteProductItem/FavouriteProductItem.module.css";

export const FavouriteProductItem = ({
    product,
}) => {

    console.log(product);

    let navigate = useNavigate();

    debugger;
    function NavigateToProduct() {
        localStorage.setItem('currentGame', JSON.stringify({
            description: product.description,
            imageUrl: product.imageUrl,
            name: product.name,
            otherImageUrl: product.otherImageUrl,
            price: product.price,
            trailer: product.trailer,
        }));

        let arrPath = product.path.split('/');
        arrPath.shift();
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

            <img className={style['product-image']} src={product.imageUrl} alt="product-image" />

            <div className={style['product-content']}>
                <h2 className={style['product-title']}>{product.name}</h2>

                <p className={style['price']}>{product.price} USD</p>
                <button onClick={NavigateToProduct} className={style['view-button']}>View</button>
            </div>
        </div>
    );
}