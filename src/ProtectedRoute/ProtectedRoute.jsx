import React from 'react';

const ProtectedRoute = () => {
    const textStyle = {
        color: 'red', 
    };

    return (
        <div className='pt-[85px] pb-[20px]'>
            <h3 style={textStyle}>This Protected Route</h3>
        </div>
    );
};

export default ProtectedRoute;