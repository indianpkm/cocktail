import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { fetchSingleCoktails } from '../redux/feature/cocktailSlice';
import { useDispatch,useSelector } from 'react-redux';
import Layout from '../component/Layout';
import Spinner from '../component/shared/spinner';

const ProductDetail=()=>{
    const [modifiedCocktail,setModifiedCocktail]=useState([])
    const {loading,cocktail}=useSelector((state)=>({...state.app}))
    const dispatch=useDispatch()
    const {id}=useParams()
    useEffect(()=>{
        dispatch(fetchSingleCoktails({id}))
    },[dispatch,id])
    useEffect(()=>{
        if(cocktail.length>0){
            const {
                 strDrink: name,
                 strCategory:category,
                 strDrinkThumb: img,
                 strAlcoholic:info,
                 strGlass : glass,
                 strIngredient1,strIngredient2 ,strIngredient3, strIngredient4 ,strIngredient5
            }=cocktail[0]
            const ingredients=[strIngredient1,strIngredient2 ,strIngredient3, strIngredient4 ,strIngredient5]
            const newCocktail={name,category,info,img,glass,ingredients}
            setModifiedCocktail(newCocktail)
        }else{
            setModifiedCocktail(null)
        }
    },[id,cocktail])
    if(!modifiedCocktail){
        return<h2>no cocktail</h2>
    }else{
        const {name,category,info,img,glass,ingredients}=modifiedCocktail;
        console.log(modifiedCocktail)
        return(<>
        {loading ? (<Spinner/>):(
            <Layout>
                <div className='container mt-4'>
                    <Link to='/' className='btn btn-info'>Go back</Link>
                </div>
                <div className='row mt-4 justify-content-center'>
                    <div className='col-md-5 '>
                        <img className='img-fluid' src={img} alt={name} height={300} width={400}/>
                    </div>
                    <div className='col-md-5'>
                        <h2 style={{color:'blue'}}><b style={{color:'red'}}>Name : </b> {name}</h2>
                        <p className='mt-4'><b>Category:</b> {category}</p>
                        <p><b>Info:</b> {info}</p>
                        <p><b>Glass: </b>{glass}</p>
                        <p><b>Ingredients: </b>{ingredients+' ' +','}</p>
                    </div>
                </div>
            </Layout>
        )}
        </>)
    }
}

export default ProductDetail;