import axios from 'axios';

const productData = ()=>{
    try{
        const data = axios.get("http://localhost:400/data");
        return data;
    }catch(err){
        return err;
    }
}

export {productData}