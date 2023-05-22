import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/action";

const ListMovie = () => {
    const listMovie = useSelector(state=>state.listMovie)
    const search = useSelector(state=>state.search)
    const list = listMovie.filter((movie)=>movie.name.includes(search));
    // console.log(listMovie);
    const dispatch= useDispatch();
    useEffect(()=>{
        // console.log("Chayj use effect cuar listmovie");
       axios.get("http://localhost:8000/listMovies").then((res)=>{
        dispatch(getAll(res.data))
       }).catch((err)=>console.log(err))
    },[])
  return (
    <div className="grid grid-cols-4 gap-4">
    {list.map((item)=><Movie key={item.id} id={item.id} image={item.image_url} name={item.name} />)}
    </div>
  );
};

export default ListMovie;
