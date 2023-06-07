import React from 'react'
import { useLocation } from 'react-router-dom'
import Buttons from '../components/buttons';

const BookTicket = () => {
    const bookShow = useLocation().state;
    console.log(bookShow);
  return (
    <>
    <div className='pt-8 pl-14'>
        <h2 className='text-3xl mb-3 font-semibold'>{bookShow.show.name}</h2>
    </div>
    <div className='w-full flex gap-12 p-8'>
        <div className='ms-4 bg-[#131921] text-white'>
            <img className='' src={bookShow.show.image.medium}/>
            <h3 className='text-md text-center p-2'>Premiered On: {bookShow.show.premiered}</h3>
        </div>
        <div className=''>
            <h3 className='text-xl mb-1'>Ratings {bookShow.show.rating.average}/10</h3>
            <h3 className='rounded-sm bg-[#131921] text-white text-lg ps-2 w-20'>{bookShow.show.language}</h3>
            <p className='flex'>Duration: {bookShow.show.averageRuntime}m</p>
            {/* <Buttons btnStyle='rounded-sm bg-red-400 text-white text-lg px-3 mt-32'  handleClick={bookShow} btnName="Book Ticket"/> */}
        </div>
        <div className='justify-between input-design'>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Email</label>
                <input type='text'/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type='text'/>
            </div>
            <div>
                <label>Payment Type</label>
                <select>
                    <option>Net Banking</option>
                    <option>Credit/Debit Card</option>
                    <option>UPI gateway</option>
                </select>
            </div>
            <br/>
            <div>
                <Buttons btnStyle='rounded-sm bg-red-400 text-white text-lg px-5 py-2'  btnName='Book Now'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookTicket