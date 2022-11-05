import React from 'react';
import Layout from './Layout';
import bg from '../component/404.jpg'
import { Link } from 'react-router-dom';

const ErrorPage=()=>{
    return(
        <Layout>
        <div className='text-center font-weight-bold'>
        <img src={bg} alt='background' style={{height:'71vh',width:'100%'}} />
            <Link to='/' className='bg-danger'>Go To Home</Link>
            </div>
        </Layout>
        )
}

export default ErrorPage;