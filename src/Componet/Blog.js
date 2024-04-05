function Blog(){
    return(
        <>
        <div className="border-none text-2xl m-0 p-0 align-baseline ">
       <div className="m-0 px-28 py-36 w-full">
         <h2 className="text-black text-4xl font-bold mb-12 ">
         تازه‌ ترین‌های وبلاگ تپسی
         </h2>
         <div className="flex flex-row justify-between -mr-0.5 gap-32">
         <a className="p-6  cursor-pointer hover:shadow-md">
            <img className="rounded-xl w-80" />
            <h3 className="text-black text-2xl font-medium my-2.5 mx-0 text-nowrap">
            بیانیه شرکت تپسی در ارتباط با حذف <br/> گزینه «عجله دارم»
            </h3>
            <p className="text-black text-lg leading-6 overflow-hidden text-justify text-nowrap">
            با انتشار یک گزارش آماری تپسی از چگونگی<br/> تعامل مسافران و راننده ها ذیل خدمات تاکسی <br/> اینترنتی پرده برداشت شرکت تپسی با ...
            </p>
         </a>



         <a className="p-6  cursor-pointer -mr-28 -ml-24 hover:shadow-md ">
            <img className="rounded-xl w-80" src='./Assets/Img/Justice.jpg' />
            <h3 className="text-black text-2xl font-medium my-2.5 mx-0 text-nowrap">
            معطل کردن راننده ها توسط مسافر <br/> پرتکرار ترین شکایت ثبت شده در مرکز <br/> تماس تپسی
            </h3>
            <p className="text-black text-lg leading-6 overflow-hidden text-justify text-nowrap">
            با انتشار یک گزارش آماری تپسی از چگونگی<br/> تعامل مسافران و راننده ها ذیل خدمات تاکسی <br/> اینترنتی پرده برداشت شرکت تپسی با ...
            </p>
         </a>




         <a className="p-6  cursor-pointer ml-64 hover:shadow-md">
            <img className="rounded-xl w-80" src='./Assets/Img/pakro-cover.jpg' />
            <h3 className="text-black text-2xl font-medium my-2.5 mx-0 text-nowrap">
            تجربه یک سفر ویژه با سرویسVIP<br/>تپسی
            </h3>
            <p className="text-black text-lg leading-6 overflow-hidden text-justify text-nowrap">
            یکی از نکات مهم در تپسی بهبود مستمر تجربه <br/> مسافران در سفر است ما همیشه تلاش <br/> کرده ایم
            </p>
         </a>




         </div>
       </div>
     </div>
        </>
    );
}
export default Blog;