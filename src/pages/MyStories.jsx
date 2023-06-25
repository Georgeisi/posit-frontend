import React, { useContext } from "react";
import RootLayout from "../LayOut/RootLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../components/Context/AuthContext";
import Loading from "../utils/Loading";
import { toast } from "react-hot-toast";

const MyStories = () => {
  const navigate=useNavigate()
  const { token } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/user/",
    token
  );
    const deleteRequest=async(id)=>{
      const res= await fetch(`http://127.0.0.1:8000/api/stories/${id}`,{
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json',
          Authorization: `Token ${token}`
        }

      })
      if(res.status===200){
        toast.success('Succesfully deleted story')
        setTimeout(()=>{
          navigate(0)
        },2000)
      }
      if (res.status===400){
        toast.error('something went wrong')
      }
    }
  return (
    <RootLayout>
      <div>
        <div className="d-flex justify-content-between align-items-center mw1240 mx-auto py-4 ">
          <h1>My Stories</h1>
          <Link to={"/create-story"} className="btn bg-dark text-white">
            Write Story
          </Link>
        </div>
        <div className="d-flex mw1240 mx-auto gap-3  border-bottom mb-5">
          <p>All</p>
          <p>Drafts </p>
          <p>Published</p>
        </div>
        <div className="mw1240 mx-auto">
          {data&& data.map((datum)=>{
                return <div key={datum.id} className="d-flex justify-content-between align-items-start text-start"  >
                   <div className="w-50">
                   <p className="fw-semibold">{datum.title}</p>
                    <p>{datum.story}</p>
                   </div>
                   <div className="d-flex gap-3">
                    <Link to={`/edit-story/${datum.id}`} className="btn bg-blue text-white px-4">Edit post</Link >
                    <Link onClick={()=>{deleteRequest(datum.id)}} className="btn border-blue text-blue px-3" >Delete</Link >
                   </div>
                </div>
            })}

          { <Loading loading={loading}/>}
          {error&&<h2 className='fw-bold text-blue'>{error}</h2>}
        </div>
      </div>
    </RootLayout>
  );
};

export default MyStories;
