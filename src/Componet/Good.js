import { useState } from "react";


function Good(){
    const [state,setstate]=useState(0)
   function Plus(){
    setstate(state+1)
   }

   function Mines(){
    setstate(state-1)
   }
    // function counter() {
    //     var num = document.getElementById("input").value
    //     var num = Number(num) + 1
    //     document.getElementById("input").value = num
    // }
    // function counterr() {
    //     var num = document.getElementById("input").value
    
    //     var num = parseInt(num) - 1
    //     if (num < 0) {
    //         // alert("U DIE")
    //         return
    //     }
    //     document.getElementById("input").value = num
    // }
    // function zarb(){
    //     var sum = 0;
    //     var input = Number(input)
    //     var zarb = Number(zarb)
    //      input = document.getElementById("input").value
    //      zarb = document.getElementById("zarb").value
    //     sum = input * zarb
    //    document.getElementById("calc").value = sum
    
      
    // }
        

    return(
        <>
        
        <div className="text-white pt-24 px-0 pb-12" >
        <div className="flex flex-row-reverse justify-between m-0 py-0 px-36 w-full">
           <div className="ml-52 w-8/12 ">
                <img className="rounded-xl " src='./Assets/Img/nerdMan.jpg' style={{maxWidth:"300%"}} />
                </div>
            <div className="w-full">
               <h2 className="text-4xl text-black font-bold mb-5">
                     مزایای تپسی برای رانندگان تاکسی <br/>اینترنتی
                </h2>
                 <p className="text-lg text-black  leading-8 mb-4">
                  رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به <br/>همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
                 </p>
                 <h3 className="text-black opacity-95 text-xl  mb-5 mt-12 font-semibold">
                 کسب درآمد روزانه، پایدار و بدون محدودیت
                 </h3>
                 <div className="text-black opacity-95 text-lg leading-8 mb-5">
                <ol>
                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز
                 </li>

                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز
                 </li>



                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز
                 </li>

                </ol>



                <h3 className="text-black opacity-95 text-xl  mb-5 mt-12 font-semibold">
                تضمین امنیت و پشتیبانی رانندگان

                 </h3>



                 <ol>
                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 پشتیبانی ۲۴ ساعته
                 </li>

                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته<br/> تیم امنیت
                 </li>
                </ol>







                <h3 className="text-black opacity-95 text-xl  mb-5 mt-12 font-semibold">
                واریز سهمیه بنزین ویژه رانندگان تپسی

                 </h3>



                 <ol>
                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 نمایش میزان پیمایش ماهانه درون اپلیکیشن
                 </li>

                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 محاسبه‌ی مسافت طی شده تا مسافر در پیمایش
                 </li>
                </ol>


                <h3 className="text-black opacity-95 text-xl  mb-5 mt-12 font-semibold">
                   استفاده از مزایای 

                 <span >
                 <a className="text-sky-600 cursor-pointer no-underline " >  باشگاه رانندگان تپسی   </a>
                 </span>
                 </h3>

                 <ol>
                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ...
                 </li>

                 <li className="list-decimal text-lg m-0 p-0 align-baseline">
                 تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید <br/>اقساطی و ...
                 </li>
                </ol>
               <div className="items-center flex mt-12 max-w-full gap-5 ">
               <a className="items-center bg-blue-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 ">
               ثبت نام راننده تاکسی آنلاین
               </a>
               <a className="items-center bg-blue-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 ">
               دانلود برنامه تپسی راننده
               </a>
              
              <div>
               <div>
                <a onClick={Plus}  className="items-center bg-blue-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 "  >
                   add
                </a>
                <h1  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {state}
                </h1>
                <a onClick={Mines} className="items-center bg-red-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 " >
                     Dell
                </a>
                {/* <br/>
                <br/>
                <input id="zarb" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                <br/>
                <a onClick={zarb} id="add" className="items-center bg-blue-700 rounded-xl text-white flex text-base h-14 justify-center px-4 py-4 whitespace-nowrap w-50 font-semibold cursor-pointer hover:opacity-90 " >
                   calc
                </a>
                <br/>
                <input id="calc" readOnly class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" /> */}

               </div>
              </div>









               </div>
              


              </div>





                
             

             </div>
          </div>
        </div>
        </>
    );
} 
export default Good;