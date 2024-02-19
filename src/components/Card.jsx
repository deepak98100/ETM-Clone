import React from 'react'

export default function Card(props) {
  return (
    <>
<div className="w-full flex justify-center relative">
    <div className="w-full">
        <img className='w-full' src={props.imagePath} alt="bike" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-full text-center font-bold text-3xl text-white">{props.bikeName}</div>
            <button className='border border-white text-white font-semibold p-2 mt-2'>Buy Now</button>
        </div>
    </div>
</div>


<div className='bg-black px-5 md:px-10 xl:px-16 py-10 text-white'>
<p className='font-semibold text-xl'>SPECIFICATIONS</p>
<div className='grid grid-cols-12'>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>FRAME</p>
      <p className='mt-2'>{props.frame}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>PRODUCT WEIGHT</p>
      <p className='mt-2'>{props.weight}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>WHEELBASE</p>
      <p className='mt-2'>{props.wheelbase}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>SEAT</p>
      <p className='mt-2'>{props.seat}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>ASSEMBLY REQUIRED</p>
      <p className='mt-2'>{props.assembly_required}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>ASSEMBLY TIME</p>
      <p className='mt-2'>{props.assembly_time}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>THROTTLE</p>
      <p className='mt-2'>{props.throttle}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>CONTROLLER</p>
      <p className='mt-2'>{props.controller}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>MOTOR</p>
      <p className='mt-2'>{props.motor}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>SUSPENSION</p>
      <p className='mt-2'>{props.suspension}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>FINAL DRIVE</p>
      <p className='mt-2'>{props.final_drive}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>DRIVEN CHAIN</p>
      <p className='mt-2'>{props.driven_chain}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>BRAKES</p>
      <p className='mt-2'>{props.brakes}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>TIRES</p>
      <p className='mt-2'>{props.tires}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>RECOMMENDED AGE</p>
      <p className='mt-2'>{props.recommended_age}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>BATTERY PACK</p>
      <p className='mt-2'>{props.battery_pack}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>BATTERY LIFE</p>
      <p className='mt-2'>{props.battery_life}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>POWER MODES</p>
      <p className='mt-2'>{props.power_mode}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>CHARGING TIME</p>
      <p className='mt-2'>{props.charging_time}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>CHARGER INCLUDED</p>
      <p className='mt-2'>{props.charger_included}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>BATTERY METER</p>
      <p className='mt-2'>{props.battery_meter}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>DISPLAY</p>
      <p className='mt-2'>{props.display}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>LIGHTS</p>
      <p className='mt-2'>{props.lights}</p>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <p className='mt-3 font-semibold text-xl'>ACCESSORIES MATERIAL</p>
      <p className='mt-2'>{props.accessories_material}</p>
      </div>
    </div>
</div>
    </>
  )
}
