import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-black text-white text-center py-4'>
         <div className='grid grid-cols-12'>
         <div className='col-span-12 md:col-span-6'>
         <div className='mt-3 cursor-pointer font-semibold'>Search</div>
         <div className='mt-3 cursor-pointer font-semibold'>Terms</div>
         <div className='my-3 cursor-pointer font-semibold'>Privacy Policy</div>
         </div>
         <div className='col-span-12 md:col-span-6 my-3 max-w-xs mx-auto'>
            <p className='font-semibold cursor-pointer'>SIGN UP AND SAVE</p>
            <p className='hidden md:block my-4'>Subscribe to get special offers, free giveaways, and once-in-a-lifeline deals.</p>
            <div className='hidden md:block'>
            <input type="text" placeholder='Enter your email' className='bg-black p-2 mr-1' />
            ✉️
            <hr />

            <div className='hidden md:block md:flex mt-4 gap-2'>
            <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
      <img width="28" height="28" className='cursor-pointer' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </div>
            </div>
         </div>

         </div>
         <hr />

         <div className='flex gap-4 justify-center my-5 mx-5'>
            <img className='h-10 w-16' src="https://e7.pngegg.com/pngimages/388/653/png-clipart-american-express-logo-brand-android-application-package-application-software-american-express-blue-angle-thumbnail.png" alt="amex" />
            <img className='h-10 w-16'   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1200px-Old_Visa_Logo.svg.png" alt="visa" />
            <img className='h-10 w-16' src="https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png" alt="discover" />
            <img className='h-10 w-16' src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg" alt="mastercard" />
            <img className='h-10 w-16' src="https://seeklogo.com/images/S/shop-app-logo-6AC6318997-seeklogo.com.png" alt="shop" />
         </div>

         <p className='mt-8'>© {new Date().getFullYear()} Electro & Company Inc.</p>
      </div>
    </>
  )
}
