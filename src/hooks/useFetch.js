import { useEffect, useState } from "react"

export const useFetch =(url,token )=>{
    const [data,setData]=useState(null)
    const[loading,setloading]=useState(true)
    const[error,setError]=useState(null)

useEffect(()=>{
    
    const getData=async()=>{
        if(token){
            const res =await fetch(url,{
                method: 'GET',
                headers:{
                    'Content-type':'application/json',
                    'Authorization': `Token ${token}`
                }
            
            })
            const recieveData=await res.json()
            console.log(recieveData);
            setData(recieveData)
            setloading(false)

        }else{
            const res=await fetch(url)
            const recieveData = await res.json()
            console.log(recieveData);
            setData(recieveData)
            setloading(false)

        }
        
    }
    setTimeout(()=>{
        getData().catch((error)=>{
            setError('Oops something went wrong')
            setloading(false)
        })

    },2000)

},[url])

    return({data,loading,error})

}