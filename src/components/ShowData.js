import useFetchHook from './useFetchHook';
import React from 'react'

// ShowData Component is collects the data what result parameters getting from three API Links
// ShowData Component prints the list of userdata, albumsdata and photodata
const  ShowData = () => {
        
    //albumId , photosId only stores the filtered data clicked perticular user profile and user Album's 
        const [albumId , setAlbumId] = React.useState([]);
        const [photosId , setPhotosId] = React.useState([]);
    // show , showPhoto , showbutton are stores the states Booleans for according to displaying data
        const [show , SetShow] = React.useState(true)
        const [showPhoto , setShowPhoto] = React.useState(true);
        const [showbutton,setShowbutton] =React.useState(false);

    /**
     * Responsible for API data handling using `useFetchHook` component
     * @param {*} data: stores the API result.
     * @param {boolean} status: stores the state based on the API Link behaviour
     * @param {boolean} error: stores the state based on the API Error.
     */
    const [data , status , error ] = useFetchHook('https://jsonplaceholder.typicode.com/users');
    const [albumData ] = useFetchHook('https://jsonplaceholder.typicode.com/albums')
    const [photoData ] = useFetchHook('https://jsonplaceholder.typicode.com/photos')
    /**
     * user variable can stored the user mappeddata while rendering...
     * data was painted on the screen by using the array.map method
     * Loading... will appear while mapping data initially
     * If API Link is not responding or getting 404 HTML Error then error message will print on screen
     */
    const user = status? <h1 style ={{fontSize : "50px"}} >Loading.....</h1>:(error)?<div className = {"error"}><h1 style ={{color : 'red'}} >
        your API link is not responding<span style ={{color : 'black' , fontsize : "10px"}}> please check your link</span></h1></div>:<>{data.map((e , i) =>
   
   <div key = {e.id} className = {"listCards"} >
        <div className = "data" ><span className = {"Hedding"}>Name :</span> {e.name}</div>
        <div className = "data"><span className = {"Hedding"}> Address :</span> {e.address.city}</div>
        <div className = "data"><span className = {"Hedding"}> Street :</span> {e.address.street}</div>
        <div className = "data"><span className = {"Hedding"}> Zipcode :</span> {e.address.zipcode}</div>
        <button className ={"btnAccess"} onClick = {()=>albumFunction(e.id)} style = {{margin : "5px 0px"}}>click Profile {e.id}</button>

    </div>
    )}</>
       
                // albumFunction responsible for filtering the user albums and that will stores into albumId when clicks `click profile` button
                const albumFunction=(id)=>{
                
                    setAlbumId(albumData.filter((e)=>(e.userId === id)?e:''))
                        SetShow(false)
                        setShowbutton(true)
                }
                // console.log(albumId)
                 // photoFunction responsible for filtering the user photos and that will stores into photosId when clicks `view Album` button    
                const photoFunction=(id)=>{
                    setPhotosId(photoData.filter((v)=>v.albumId ===id?v:''))
                        setShowbutton(false)
                        setShowPhoto(false)  
                }
                //console.log(photosId)

 // album variable responsible for storing mapping albumId array data             
const album =  albumId.map((ele)=>
<div className = {'listCar'} key = {ele.id} >
    <h6> Albums : {ele.title}</h6>
    <button className = {'buttonalbm'} onClick ={()=>photoFunction(ele.id)} style = {{margin : '10px 0px'}}>view Album</button>
</div>)
//console.log(albumId)
 // photo variable responsible for storing mapping albumId array data  
const photo = !photosId?null:photosId.map((e)=>
       <div  className = {"gridimg"} key ={e.id } >
       <img height = '400px' alt = {'img'} src= {e.url}/><h5> Title :{e.title}</h5>
       </div>)

            // userListHandle is for displaying data when states changes   
            const userListHandle =()=>{
                SetShow(true)
                setAlbumId([])
                setShowbutton(false)
            }
            // albumListHandler is for displaying data when states changes  
            const albumListHandler =()=>{
                setShowbutton(true)
                SetShow(false)
                setShowPhoto(true)

            }
    return (
<div>
    {show?<div>{user}</div>:null}
    {!showPhoto?<div>{photo}
        <div  >
            <button className = {'backAlbam'} onClick = {albumListHandler} >Goto AlbumList</button>
        </div>
    </div>:
    <div>{album}</div>}
    {showbutton?  <button className = {'btnBack'} onClick = {userListHandle} >Goto UserList</button>:null}
</div>
    )
}

export default ShowData;
