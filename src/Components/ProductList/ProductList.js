import { useDispatch } from 'react-redux';
import './ProductList.css';
import { toggleIsLoading, addProduts } from '../../features/products/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();

     function getProducts() {
        let url = 'http://localhost:3001/posts/';
        const res = []
        try {
            fetch(url)
                .then(resolve => {
                    return resolve.json();
                })
                .then(parseData => {
                    
                    console.log(parseData);
                    
                    dispatch(toggleIsLoading());
                    // dispatch(addProduts(res));

            })

                return
        } catch (error) {
            console.log(error);
        }
    }
    getProducts()
    

    
    
    return (
        <div>
            asd
        </div>
    )
}

export default ProductList;