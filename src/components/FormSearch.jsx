import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/action";

export default function FormSearch() {
    // const [search , setSearch] = useState("");
    const dispatch = useDispatch();
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     dispatch(searchMovie(search));
    // }
  return (
    <div className="my-6 text-center">
      {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
      <form>
        <input
          className="px-2 py-1 border-2 border-red-500 border-solid rounded-xl"
          type="text"
          
          onChange={(e)=>dispatch(searchMovie(e.target.value))}
          placeholder="search for movie ..."
        />
        <button type="submit" className="ms-4 text-[#f9f7f7] px-2 py-1 border rounded-lg bg-orange-400">
          Search
        </button>
      </form>
    </div>
  );
}
