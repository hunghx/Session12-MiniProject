import { useState } from "react";
import "./App.css";
import FormSearch from "./components/FormSearch";
import ListMovie from "./components/ListMovie";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const dispatch =useDispatch();
const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:8000/listMovies",{name,image_url:image})
  .then((res)=>dispatch({type:"ADD",payload:res.data}))
}
  return (
    <div className="container p-6 mx-auto">
      <h1 className="font-bold text-3xl text-center text-[#efaf1a]">
        Search for movie
      </h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add movie
      </button>

      <FormSearch />
      <ListMovie />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhap ten film"
                />
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Nhap link anh"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit"  data-bs-dismiss="modal" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
