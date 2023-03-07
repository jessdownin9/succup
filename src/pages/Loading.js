import React, { useEffect, useRef } from 'react';
import { loadingAnimation } from '../animations/loadingAnimation';
import { useNavigate } from 'react-router-dom';
// import { useStoreItems } from '../context/StoreItemsContext';
// import { config } from '../api/config';

export const Loading = () => {
    const loader = useRef(null);
    const navigate = useNavigate();
    // const { setStoreItems } = useStoreItems();

    useEffect(() => {
      // const fetchData = async () => {
      //   try {
      //     let response = await fetch(`${config.url}/products`);
      //     let jsonResponse = await response.json();
      //     setStoreItems(jsonResponse);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // };
      // fetchData();
      if (loader.current) {
        loadingAnimation(loader.current);
      }
      setTimeout(() => {
        loader.current.style.display = 'none';
        navigate('/home');
      }, 2950);
    }, [navigate]);

    return (
        <div className='loader' ref={loader}>
            <shape></shape>
            <shape></shape>
            <shape></shape>
        </div>
    )
};

export default Loading;