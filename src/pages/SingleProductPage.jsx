import React from 'react'
import Butter from "buttercms";

import SingleProduct from '../components/SingleProduct'

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);
function SingleProductPage() {
    return (
        <div>
            <SingleProduct/>
            
        </div>
    )
}

export default SingleProductPage