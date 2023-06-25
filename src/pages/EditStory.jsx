import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../LayOut/RootLayout";
import edit from "../assests/icons/edit.png";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../components/Context/AuthContext";
import { toast } from "react-hot-toast";

const EditStory = () => {
  const { id } = useParams();
  console.log(id);
  const { token } = useContext(AuthContext);
  const [title, setTile] = useState("");
  const [tags, setTags] = useState("");
  const [story, setStory] = useState("");

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:8000/api/stories/${id}`,
    token
  );

  const Navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setTile(data.title);
      setStory(data.story);
      setTags(data.tags);
    }
  }, [data]);

  const updateStory = async (updatedStory) => {
    const res = await fetch(`http://127.0.0.1:8000/api/stories/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(updatedStory),
    });
    if (res.status === 400) {
      toast.error("uh oh something went wrong");
      return;
    }

    if (res.status === 200) {
      toast.success("updated succesfully");
      Navigate("/my-stories");
    }
    const data = res.json();
  };
  return (
    <RootLayout>
      <form
        className="mw1240 mx-auto text-start py-4 d-flex flex-column gap-3 "
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const formData={
            title,
            tags,
            story,
          }
          updateStory(formData)
        }}
      >
        <h1>Edit Story</h1>
        <div className="d-flex align-items-center border rounded-1 px-2">
          <label htmlFor="Title">Title:</label>
          <input
            className="w-100 px-3 py-2 fw-semibold border-0 "
            value={title}
            type="text"
            name=""
            id="Title"
            onChange={(e) => {
              setTile(e.target.value);
            }}
          />
        </div>
        <div className="d-flex align-items-center border rounded-1 px-2">
          <label htmlFor="">Tags:</label>

          <input
            className="w-100 px-3 py-2 fw-semibold border-0"
            value={tags}
            type="text"
            name=""
            id="Tags"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <div className="">
          <textarea
            className="w-100 px-3 fw-semibold py-2 border rounded-1"
            value={story}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setStory(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn  bg-blue w-50 rounded-0 mx-auto text-white">
          Update Story
        </button>
      </form>
    </RootLayout>
  );
};

export default EditStory;
