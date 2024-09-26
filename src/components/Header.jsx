import React from 'react'

function Header() {
  return (
    <div className="w-full  bg-no-repeat" style={{ backgroundImage: `url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2')`, backgroundSize: 'cover' }}>

      <div className='p-20  max-sm:p-16 text-slate-300'>
        <p className='text-2xl py-3'>FreshGoods</p>
        <p className='text-6xl max-sm:text-4xl '>Concisly <br /> describe your <br /> product or service</p>
        <p className='py-4 pr-36 max-sm:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis accusamus sequi tempore quis similique neque minima corrupti beatae suscipit voluptatem ut odit magni consectetur excepturi, nisi eaque laudantium quo.</p>
        <button className='bg-amber-500 font-bold p-2 rounded text-black'>Order Now</button>
      </div>


    </div> 
  )
}

export default Header
