import React from 'react'
 
// useFetchHook is a customhook
/**
 * 
 * @param {*} Link 
 * @returns data status error
 */
const useFetchHook = (Link)=> {
    const [data  , setData] = React.useState([])
    const [status  , setStatus] = React.useState(false)
    const [error  , setError] = React.useState(false)
    
    const fetchData = React.useCallback(async()=>{
        try{
        setStatus(true)
         const Beforefetch = await fetch(Link);

         if(Beforefetch.status ===404){
             throw new Error('request is redirecting 404')
         }
         const JsonData = await Beforefetch.json();
             setData(JsonData)
             console.log(JsonData)   
             setError(false)
         setStatus(false)
    }
    catch(Error){
        setError(true)
        setStatus(false)
    }
  
 },[Link])

 React.useEffect(()=>{
     fetchData();
 },[fetchData])

 console.log(data)

 return [ data , status , error ]
}
 export default useFetchHook;