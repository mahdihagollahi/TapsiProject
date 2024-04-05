import { GoArrowDown } from "react-icons/go";
import { IoLogoPwa } from "react-icons/io5";
import { PiCarThin } from "react-icons/pi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";













function Header(){
    return(
      <>
      <div className=' overflow-x-hidden'>
<div >
            <img src="./Assets/Img/banner.webp" />
            <div className='absolute'>
                <img className='w-1/3 float-left ml-36 mr-52 z-20 ' style={{marginTop:"-470px"}} src='./Assets/Img/mockup-phone.webp' />
            </div>
        </div>
        <div className="h-80 text-white p-10 px-10 border-solid border-2 border-#424242 rounded-2xl mr-32  absolute" style={{width:"auto" , height:"auto" , backgroundImage: "linear-gradient(51deg, rgba(23, 26, 60, .7) 5%, rgba(23, 26, 60, .3) 95%)" ,boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)" , marginTop:"-441px" , border:"#757575"}}>
         <h1 className="text-5xl -mx-2 my-1" >تپسی</h1>
         <h1 className="text-2xl mx-1.5 my-6">
            اپلیکشین درخواست خودرو و پیک
         </h1>
         <div className="flex justify-center flex-row  ">
           <div className="flex justify-center flex-row  ">
           <div className="items-center flex justify-center w-56 ">
               <a className="bg-white rounded-xl text-black flex text-base h-14 m-1.5 max-w-56 p-4 text-center w-full px-0 py-4 pr-4 gap-1 cursor-pointer">
                <div>
                <GoArrowDown style={{height: "24px",width: "24px" ,marginBottom:"-23px" , marginLeft:"6px" }}/>
                </div>
                <div>
                    <p className="overflow-visible">
                         دانلود اپلیکشین مسافران
                    </p>
                </div>
               </a>
            </div>
           </div>




           <div className="flex justify-center flex-row  ">
           <div className="items-center flex justify-center w-56 ">
               <a className="bg-white rounded-xl text-black flex text-base h-14 m-1.5 max-w-56 p-4 text-center w-full px-0 py-4 pr-4 gap-1 cursor-pointer ">
                <div>
                <IoLogoPwa style={{height: "24px",width: "24px" ,marginBottom:"-23px" , marginLeft:"6px" }}/>
                </div>
                <div>
                    <p className="overflow-visible">
                          وب اپلیکشین مسافران
                    </p>
                </div>
               </a>
            </div>
           </div>

           </div>
           <div className="flex">
              <div className="flex justify-center items-center w-56 ">
           <div className="items-center flex justify-center w-56 ">
               <a className="  rounded-xl text-white flex text-base h-14 m-1.5 max-w-56 p-4 text-center w-full px-0 py-4 gap-1 cursor-pointe border-solid border-2 border-whiter pr-4" style={{backgroundColor: "rgba(23, 26, 60, .5)"}}>
                <div>
                <PiCarThin style={{height: "24px",width: "24px" ,marginBottom:"-23px" , marginLeft:"6px", }}/>
                </div>
                <div>
                    <p className="overflow-visible">
                        ثبت نام رانندگان خودرو
                    </p>
                </div>
               </a>
            </div>
           </div>





           <div className="flex justify-center items-center w-56 ">
           <div className="items-center flex justify-center w-56 ">
               <a className="  rounded-xl text-white flex text-base h-14 m-1.5 max-w-56 p-4 text-center w-full px-0 py-4 gap-1 cursor-pointer border-solid border-2 border-white pr-4" style={{backgroundColor: "rgba(23, 26, 60, .5)"}}>
                <div>
                <GiFullMotorcycleHelmet style={{height: "24px",width: "24px" ,marginBottom:"-23px" , marginLeft:"6px" }}/>
                </div>
                <div>
                    <p className="overflow-visible">
                        ثبت نام رانندگان موتور
                    </p>
                </div>
               </a>
            </div>
           </div>


           </div>
         

         <div className="flex mr-28">


         <div className="flex justify-center items-center w-56 ">
           <div className="items-center flex justify-center w-56 ">
               <a className="  rounded-xl text-white flex text-base h-14 m-1.5 max-w-56 p-4 text-center w-full px-0 py-4 gap-1 cursor-pointer border-solid border-2 border-white pr-4" style={{backgroundColor: "rgba(23, 26, 60, .5)"}}>
                <div>
                <GoArrowDown style={{height: "24px",width: "24px" ,marginBottom:"-23px" , marginLeft:"6px" }}/>
                </div>
                <div>
                    <p className="overflow-visible">
                        دانلود اپلیکشین رانندگان
                    </p>
                </div>
               </a>
            </div>
           </div>



         </div>





           




         

        </div>


      </div>






      </>
    );
}
export default Header;