import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Buttons from '../components/buttons';

const Movies = () => {
    const showData = useLocation().state[0];
    const navigate =useNavigate();
    const description = {__html:showData.show.summary};
    const bookShow =(e)=>{
      //const bookData = apiData.filter((data)=>{return data.show.id == e.target.id});
      navigate("/bookTicket",{state:showData});
    }
    console.log(showData);
  return (
    <>
    <div className='w-full flex gap-12 p-8'>
        <div className='ms-4 bg-[#131921] text-white'>
            <img className='' src={showData.show.image.medium}/>
            <h3 className='text-md text-center p-2'>Premiered On: {showData.show.premiered}</h3>
        </div>
        <div className=''>
            <h2 className='text-3xl mb-3 font-semibold'>{showData.show.name}</h2>
            <h3 className='text-xl mb-1'>Ratings {showData.show.rating.average}/10</h3>
            <h3 className='text-lg'>{showData.show.status}</h3>
            <h3 className='rounded-sm bg-[#131921] text-white text-lg ps-2 w-20'>{showData.show.language}</h3>
            <p className='flex'>{showData.show.averageRuntime}m {showData.show.genres} </p>
            <Buttons btnStyle='rounded-sm bg-red-400 text-white text-lg px-3 mt-32'  handleClick={bookShow} btnName="Book Ticket"/>
        </div>
    </div>
    <div className='px-8'>
      <p dangerouslySetInnerHTML={description}></p>
    </div>
    </>
  )
}

export default Movies