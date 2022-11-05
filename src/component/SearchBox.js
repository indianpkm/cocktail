import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { fetchSearchCoktails } from "../redux/feature/cocktailSlice";

const SearchBox = () => {
    const searchTerm=useRef()
    const dispatch=useDispatch()

    const handleChange=()=>{
        const searchText=searchTerm.current.value
        dispatch(fetchSearchCoktails({searchText}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
    <>
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" ref={searchTerm} onChange={handleChange} className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                     placeholder="Search Here" style={{width:'350px'}} />
                </div>

            </form>
        </div>
    </>)
}

export default SearchBox