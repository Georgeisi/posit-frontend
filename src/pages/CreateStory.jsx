import React, { useContext, useState } from 'react'
import RootLayout from '../LayOut/RootLayout'
import edit from '../assests/icons/edit.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Context/AuthContext'
import { toast } from 'react-hot-toast'

const CreateStory = () => {
  const [title, setTile] = useState("");
  const [tags, setTags] = useState("");
  const [story, setStory] = useState("");
  const{token}=useContext(AuthContext)
  const Navigate=useNavigate()

  const createNewStory=async(formData)=>{
    const res= await fetch('http://127.0.0.1:8000/api/stories/create/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(formData)

    })

    const data = res.json()
    // console.log(res.status);
    if (res.status===201){

      toast.success('Story craeted succesfully')
      Navigate('/my-stories')
    }
    if(res.status===400){
      toast.error('something went wrong')
      return
    }

  }

  return (
    <RootLayout>
        <form onSubmit={(e)=>{
          e.preventDefault()
          const formData={
            tags,
            story,
            title,
          }
          createNewStory(formData)
        }} className='mw1240 mx-auto text-start py-4 d-flex flex-column gap-3' action="">
        <h1>Create Story</h1>
            <div className=' position-relative'>
                <img className='position-absolute bg-white px-2' src={edit} alt="" />
                <input onChange={(e)=>{
                  setTile(e.target.value)

                }}  className='w-100 px-3 py-2 fw-semibold border rounded-1 ' placeholder='Title' type="text" name="" id="" />
            </div>
            <div className='position-relative'> 
                 <img className='position-absolute bg-white px-2 ' src={edit} alt="" />
                 <input onChange={(e)=>{
                  setTags(e.target.value)

                }} className='w-100 px-3 py-2 fw-semibold border rounded-1'  placeholder='Tags' type="text" name="" id="" />

            </div> 
            <div className='position-relative'>
                 <img className='position-absolute bg-white px-2 fw-semibold ' src={edit} alt="" />
                <textarea onChange={(e)=>{
                  setStory(e.target.value)

                }} className='w-100 px-3 fw-semibold py-2 border rounded-1' placeholder='write your story.....' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='btn  bg-blue w-50 rounded-0 mx-auto text-white'>Publish Story</button>
            
        </form>
    </RootLayout>
  )
}

export default CreateStory