import React, { useState } from 'react'

export default function Navbar() {

  const [search, setSearch] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-purple-600 text-white p-2 text-center justify-center cursor-pointer">
      <div className='inline-flex text-xs'>LOOKING FOR OLD ORDERS? </div>
      <div className="inline-flex underline text-xs">Click here to view your old orders.</div>
    </div>

    <div className='bg-black py-8'>
    <div className='hidden md:block md:flex gap-1 justify-end mb-4 mr-4'>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
      </div>

      {
        search ? <div className='flex gap-2 items-center mx-4'>
          <img width="24" height="12"
        src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1"/>
          <input type="search" className='w-full bg-black text-white rounded-md p-2' placeholder='search out store' />
          <p onClick={() => {
            setSearch(false)
          }} className='text-white cursor-pointer'>X</p>
        </div> : <div className='flex gap-2 justify-between'>
        <div className='md:hidden relative'>
        <button onClick={toggleSidebar} className="text-white font-bold py-2 px-4 rounded">
        {isOpen ? 'Close' : '🟰'}
      </button>
      <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out bg-black text-white absolute inset-y-0 left-0 top-0 z-50 h-full w-64 pt-10`}>
        <button onClick={toggleSidebar} className="absolute top-0 right-0 mt-4 mr-4 bg-transparent text-white font-semibold py-2 px-4 border border-white rounded bg-black">
          Close
        </button>
        <ul className="mt-8 bg-gray-800">
          <li className="py-2 px-4 hover:bg-black cursor-pointer">SHOP 

          <button
                onClick={toggleDropdown}
                className="float-right text-gray-400 focus:outline-none focus:text-gray-500 top-0"
              >
                {isDropdownOpen ? (
                  <img width="14" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/up3.png" alt="up3"/>
                ) : (
                  <img width="14" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/down3.png" alt="down3"/>
                )}
              </button>

          {isDropdownOpen && (
                <ul className="ml-4 mt-2">
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Bikes
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Kits
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Razor
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    ETM
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Sur Ron
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Batteries
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Chargers
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Motors
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Controllers
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer">
                    Merch
                  </li>
                  <li className="text-gray-300 hover:bg-gray-700 px-2 py-1 cursor-pointer ">
                    Gift Card
                  </li>
                </ul>
              )}

          </li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">HOME</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">EMX</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">ETM</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">TRUMOTO</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">PHOTOS</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">CONTACT</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">NEWS</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">ABOUT US</li>
          <li className="py-2 px-4 hover:bg-black cursor-pointer">OLD ORDER HISTORY</li>
          <hr />
          <li className='cursor-pointer hover:bg-black py-2 px-4'>Login</li>
        </ul>

        <div className='flex gap-2 pb-2 pl-3 bg-gray-800'>
        <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
        </div>
      </div>
        </div>
        <div className='ml-3 hidden md:block md:flex items-center'>
        <img width="24" height="12" onClick={() => {
          setSearch(true);
        }} 
        src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1" className='inline-flex'/>
        <div className='text-white gap-3 ml-5 lg:flex mx-auto'>
          <div className='cursor-pointer'>SHOP</div>
          <div className='cursor-pointer'>HOME</div>
          <div className='cursor-pointer'>EMX</div>
          <div className='cursor-pointer'>ETM</div>
          <div className='cursor-pointer'>TRUMOTO</div>
        </div>
        </div>
        <div className='text-white italic flex items-center'>
          <img className='w-24' src="https://static.wixstatic.com/media/4afff4_99425457e45f4d7da7c2799267fc6215~mv2.png/v1/fill/w_330,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Primary%20PNG.png" alt="logo" />
        </div>
        <div className='flex hidden md:block'>
        <div className='text-white gap-3 lg:flex ml-5 mx-auto'> 
          <div className='cursor-pointer'>PHOTOS</div>
          <div className='cursor-pointer'>CONTACT</div>
          <div className='cursor-pointer'>NEWS</div>
          <div className='cursor-pointer'>ABOUT US</div>
          <div className='cursor-pointer'>OLD ORDER</div>
          <div className='cursor-pointer'>HISTORY</div>
        </div>
        </div>


        <div className='flex gap-2 items-center mr-4'>
        <img className='md:hidden' width="28" height="28" onClick={() => {
          setSearch(true);
        }} 
        src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1"/>
        <img width="28" height="28" className='hidden md:block' src="https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="user-male-circle--v1"/>
        <img width="28" height="28" src="https://img.icons8.com/ultraviolet/40/shopping-cart.png" alt="shopping-cart"/>
        </div>
      </div>
      }

    
    </div>
    </>
  )
}
