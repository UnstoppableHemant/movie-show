import Buttons from "../../components/buttons"

const Header = () => {
//const navigate = useNavigate();
  return (
    <nav className='pl-4 pr-6 bg-[#131921] text-white flex justify-between items-center'>
      <div className='flex gap-8 items-center'>
        <img className='h-14 w-35' alt='Movie-Time-Logo' src=""/>
      </div>
      <div className='w-[50%] flex text-black'>
        <input type='text' className='w-full rounded-l-md p-2 border focus:border-[#febd69]' placeholder="Search movies"/>
        <Buttons btnStyle="bg-red-400 rounded-r-md p-2" btnName="Search"/>
        {/* <button className='bg-[#febd69] rounded-r-md p-2' >Search</button> */}
      </div>
      <div className='flex gap-6'>
        {/* <Button btnStyle="" btnName="Sign In"/> */}
        <p>Log In</p>
        <p>Register</p>
      </div>
    </nav>
  )
}

export default Header