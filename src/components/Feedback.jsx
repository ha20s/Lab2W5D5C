import React from 'react'

function Feedback() {
  return (
    <div className="w-full bg-no-repeat bg-cover" 
    style={{ backgroundImage: `url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2')` }}>
 
 <div className='flex flex-col items-center text-center text-white py-16 px-5 mx-32 max-md:mx-12 max-sm:mx-5 max-sm:py-8'>
   <p className='text-lg max-sm:text-base'>What our customers say</p>
   <p className='text-6xl text-amber-400 my-5'>،،</p>
   <em className='text-4xl py-5 max-md:text-3xl max-sm:text-2xl'>
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptas quae distinctio quaerat."
   </em>



   <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png" alt="Customer Image" className='mt-8 max-w-xs max-md:max-w-[100px] rounded-full' />
   <div className='font-bold py-5'>
   <p>REAL Name</p>
   <p>Location</p>
   <p className='text-amber-400 py-5'> ★ ★ ★ ★ ★</p>
    </div>
 </div>
</div>
  )
}

export default Feedback
