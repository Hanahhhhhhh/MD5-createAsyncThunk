import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const ProductDetail = () => {
    // const dispatch = useDispatch();

    let navigate = useNavigate();
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        async function fetData() {
            const data = await axios.get("http://localhost:3001/products/" + id)
            setProductDetail(data.data)
        }
        fetData()
    },[])
    return (

        <div>
            <h1>Product Detail </h1>
            <h3>Name: {productDetail.name} </h3>
            <h3>Price: {productDetail.price} VND </h3>
            <h3>Stock: {productDetail.stock} </h3>
            <hr/>
            <strong>Description</strong>
            <p>{productDetail.description}</p>
            <button className={' btn btn-secondary'}
                onClick={()=>{
                    navigate('/list')
                }}
            >Back To All Product</button>
        </div>
    );
};

export default ProductDetail;

