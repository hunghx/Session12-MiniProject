export const getAll = (data)=>{
    // console.log("vaof action");
   return {
    type:"GETALL",
    payload: data
}};
export const searchMovie = (search)=>({
    type:"SEARCH",
    payload: search
});