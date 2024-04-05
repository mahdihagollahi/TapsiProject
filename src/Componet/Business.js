

import { MdKeyboardArrowLeft } from "react-icons/md";




function business(){
    return(
    <>
     <div className=' overflow-x-hidden'>
         <div className="flex  -my-16 mx-40 mr-48 mt-8 pb-40 pt-56 pr-10">
            <div>
             <h2 className="text-black text-4xl font-bold mb-5">
             خدمات تپسی ویژه کسب و کارها
              </h2>
              <p className="text-black opacity-85 text-lg leading-8 text-justify ">
               پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان<br/> درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها<br/> و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های <br/>درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.      
              </p>
              <p className="text-orange-500 cursor-pointer flex pb-4 mb-4 ">
              اطلاعات بیشتر سرویس سازمانی 
              <MdKeyboardArrowLeft style={{color:"orange" , marginBottom:" -4px"}} />
             </p>
             <a className="-mr-2 bg-orange-500 text-sm leading-7 text-white w-40 pt-5 pr-6 pb-4 pl-5 cursor-pointer box-border hover:opacity-90 rounded-xl">
             ورود و ثبت نام پنل سازمانی

             </a>
            </div> 


            <div className="ml-4 -mr-10">
              <img className="-ml-40 mr-48" src='./Assets/Img/i-mac.webp' style={{width:"494px"}}/>
            </div>
      


        </div>
      </div>
    </>
    );
}
export default business;