import axios from "axios";
import { useDispatch } from "react-redux";

const Movie = ({image,name,id}) => {
    const dispatch = useDispatch()
    const handleDelete=()=>{
        axios.delete("http://localhost:8000/listMovies/"+id)
        .then(()=>{
            dispatch({type:"DELETE",payload:id})
        })
    }
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="w-full rounded-t-lg"
          src={image}
          alt
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
        </a>
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-xl text-dark fs-4">{name}</h5>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Movie;
