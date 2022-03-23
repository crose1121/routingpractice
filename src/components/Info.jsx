import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {

    const {num, textcolor="black", bgcolor="white"} = useParams();

    return (
        <div>
            {
                isNaN(num)?
                <h1 style={{color:textcolor, backgroundColor: bgcolor}}>The word is {num}</h1>
                :<h1 style={{color:textcolor, backgroundColor: bgcolor}}>The number is {num}</h1>
            }
        </div>
    );
};


export default Info;