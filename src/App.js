import './App.css';
import logo from "./fb-logo.svg"

function App() {
  return (
    <>
      <div className="body">
        <div className="container flex mx-auto items-center ">
          <div className="left w-1/2 mt-40 ml-36 mr-8">
            <img src={logo} alt="fb-logo" className='w-72' />
            <p className='text-3xl mx-6 font-serif mb-40'>Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="right border-gray-100 border-2 flex flex-col bg-white p-4 rounded-xl justify-between w-1/3 shadow-lg shadow-black-800">
            <input type="text" placeholder='Email address or phone number' className='border-gray-200 border px-4 h-12 my-2 rounded-lg active:border-b-lime-400 outline-blue-500' />
            <input type="password" placeholder='Password' className='border-gray-200 border px-4 h-12 my-2 rounded-lg outline-blue-500' />
            <button className='px-4 my-2 py-2 bg-blue-600 rounded-lg text-white text-xl font-bold hover:bg-blue-700'>Log In</button>
            <span className='text-center text-blue-500 my-2 cursor-pointer hover:underline'>Forgotten password?</span>
            <hr className='border-grey-600 border mt-4 mb-4' />
            <button className=' mx-auto py-2 w-52 bg-green-500 rounded-lg hover:bg-green-600'> Create New Account </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;