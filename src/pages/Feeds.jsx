import React, { useContext } from 'react'
import RootLayout from '../LayOut/RootLayout'
import { AuthContext } from '../components/Context/AuthContext';
import splash from '../assests/Images/unsplash_Z2bJeJQRbW0.png'
import { useFetch } from '../hooks/useFetch';
import Loading from '../utils/Loading';
import bridge from '../assests/Images/Rectangle 42.png'

const Feeds = () => {
  
  const {token}=useContext (AuthContext) 
  const {data,loading,error}= useFetch(`http://127.0.0.1:8000/api/stories/ `)
  return (
    <RootLayout>
    <div className=" d-flex flex-column flex-md-row align-items-center mw1240 mx-auto">
    <div className="text-md-start">
      <h1>You've got a story,Postit.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis hic
        voluptatem atque odit facere, assumenda unde laborum earum explicabo
        molestias!
      </p>
     
    </div>
      <img className="w-50 mx-auto" src={splash} alt="" />
  </div>

  {data&& <div className='row w-100  mw1240 mx-auto gap-2 py-5'>
    {data.map((datum)=>{
        return <div key={datum.id} className='col-md-5 col-lg-3 text-start'>
          <div className='position-relative'>
          <img className='w-100' src={bridge} alt="" />
          <p style={{
            bottom:'0px',
            left:'10px'
            
          }} className='position-absolute text-white bg-primary px-3 rounded'>{datum.tags}</p>
          </div>
            <div className='py-2'>
            <h3>{datum.title}</h3>
            <p>By {datum.author.username}- {datum.created_at}</p>
            <p>{datum.story}</p>
            </div>
        </div>

    })}
    
    </div>}
  { <Loading loading={loading}/>}
  {error&&<h2 className='fw-bold text-blue'>{error}</h2>}
  
  
</RootLayout>
  )
}

export default Feeds