import React, { useEffect, useRef } from 'react';
import { loadingAnimation } from '../animations/loadingAnimation';
import { useNavigate } from 'react-router-dom';

export const Loading = () => {
    const loader = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
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