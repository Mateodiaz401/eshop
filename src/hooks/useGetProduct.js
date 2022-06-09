import  {useState, useEffect} from 'react';
import axios from  'axios';

const useGetProducts = (API) =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios(API);
                setProducts(response.data)
            }
            fetchData();
        } catch (error) {
            console.log(error, error.message);
        }
    }, []);
    return products;

}

export default useGetProducts;