import React, { useEffect, useState } from 'react';
import Instance from '../api/apiPath';
import Buttons from '../components/buttons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [apiData, setApiData]= useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    Instance.get("/search/shows?q=all").then((response)=>{
        console.log(response.data);
        setApiData(response.data);
    }).catch((err)=>{
        console.log(err)
    })
  },[]);
  const visitShow =(e)=>{
    const showData = apiData.filter((data)=>{return data.show.id == e.target.id});
    navigate("/movies",{state:showData});
  }
  return (
    <>
    <div className='grid grid-cols-5 m-6 gap-8'>{apiData.map((data)=>{
        return(
            <div className=''>
            <div className='flex items-center justify-center' ><img className='rounded-lg' src={data.show.image.medium}/></div>
            <div className='ms-4'><h2 className='text-md font-bold'>{data.show.name}</h2>
            <Buttons dataId={data.show.id} btnName='Visit Now' btnStyle='bg-red-500 px-2 py-1 rounded-lg' handleClick={visitShow}/>
            {/* <h2 className='text-md'>{data.show.genres.map((genres)=>{return<span>{genres} ,</span>})}</h2> */}
            {/* <p>{data.description}</p> */}
            </div>
          </div>
        )
    })}
    </div>
    </>
  )
}

export default Home