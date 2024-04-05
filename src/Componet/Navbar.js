


function Navbar() {
    return (
      <>
     
      <div class='container flex mt-2 '>
         <div className="flex justify-between items-center px-0 py-3 bg-white h-30 ">
         <div className='flex justify-between items-center mr-44 cursor-pointer'>
         <svg xmlns="http://www.w3.org/2000/svg"  width="102" height="22"  viewBox="0 0 102 22" style={{display:"flex"}} >
      <g fill-rule="evenodd">
          <path fill="#000" d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z"></path>
          <path fill="#000" d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102z"></path>
          <path fill="#FF5B35" d="M26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z"></path>
      </g>
  </svg>
         </div>
         <div className='flex cursor-pointer mr-96'>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>ویدیوها</a>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>پشتیبانی</a>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>امور سهام</a>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>تپسی پک</a>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>فرصت های شعلی</a>
          <a className='flex cursor-pointer mt-2.5 pr-5 hover:text-primary'>وبلاگ</a>
          <div className='mr-6 bg-primary font-bold text-x decoration-solid text-white bg-0% 0% w-36 pt-2 pr-8 pb-2 pl-2 cursor-pointer box-border rounded-lg border-none'>دانلود تپسی</div>
         </div>
      </div>
      </div>
     
     <div className="py-56 px-44 pb-2.5"> 
                <div> 
                  <h2 className="text-4xl font-bold">سرویس های تپسی</h2> 
                  <div className="flex flex-row justify-between my-12 mx-0 max-w-full overflow-auto cursor-pointer hover:opacity-100"> 
                      <div className=" hover:opacity-100"> 
                      <img src="./Assents/Img/classic.png" className="block w-24  hover:opacity-100"></img> 
                      <span className="text-base mt-3 text-center"> 
                            تپسی کلاسیک 
                      </span> 
                      </div> 
 
               <div className=""> 
              <img src="./Assents/Img/tel.png"className="block w-24  hover:Opacity-100"></img> 
               <span> 
                     تپسی تلفنی 
               </span> 
               </div> 
               <div> 
               <img src="./Assents/Img/line.png " className="block w-24  hover:Opacity-100 "></img> 
               <div> 
                  تپسی لاین 
             </div> 
           </div> 
 
 
 
        <div> 
        <img src="./Assents/Img/motopeyk.png" className="block w-24  hover:Opacity-100"></img> 
        <span> 
            موتور پیک 
        </span> 
        </div> 
 
 
 
        <div> 
        <img src="./Assents/Img/autopeyk.png" className="block w-24  hover:Opacity-100"></img> 
        <span> 
            اتو پیک 
        </span> 
        </div> 
 
 
 
        <div> 
        <img src="./Assents/Img/plus.png" className="block w-24 hover:Opacity-100"></img> 
        <span> 
              تپسی پلاس 
        </span> 
        </div> 
 
 
        <div> 
        <img src="./Assents/Img/hamyar.png" className="block w-24  hover:Opacity-100"></img> 
        <span> 
            همیار 
        </span> 
        </div> 
 
    </div>     
       </div> 
      </div>
      </>
     
    );
  }
  
  export default Navbar;



