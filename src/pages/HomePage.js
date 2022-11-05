import React, { useState, useEffect } from 'react';
import Layout from '../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoktails } from '../redux/feature/cocktailSlice';
import Spinner from '../component/shared/spinner';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [modifiedCocktails, setModifiedCocktails] = useState([])
    const { loading, cocktails, error } = useSelector(state => ({ ...state.app }))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCoktails());
    }, [dispatch])
    useEffect(() => {
        if (cocktails) {
            const newCocktails = cocktails.map(item => {
                const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    img: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                }
            })
            setModifiedCocktails(newCocktails)
        } else {
            setModifiedCocktails([])
        }
    }, [cocktails])
    if (loading) {
        return <Spinner />
    }
    if(!cocktails){
        return(<Layout><h2>No cocktail found</h2></Layout>)
    }
    if (error) {
        return <p>{error.message}</p>
    }
    return (
        <>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-center'>
                    {modifiedCocktails.map((item) => (
                        <div className='col-md-4 col-lg-3 col-sm-6 d-flex mt-4 justify-content-center align-items-center' key={item.id}>

                            <div className="card" style={{ width: '15rem' }}>
                                <img src={item.img} className="img-fluid card-img-top" alt="item.name" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-title">{item.glass}</h5>
                                    <p className="card-text">{item.info}</p>
                                    <Link to={`/products/${item.id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage;