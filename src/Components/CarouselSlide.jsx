function CarouselSlide({image, title, description, slideNumber, totalSlides}) {
    return (
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full  px-2 py-4 mx-10">
            <div className="flex flex-col items-center justify-center  md:ml-[30%]  ">
                <img src={image} className="rounded-full border-2 mr-10 border-gray-400 w-[80px] h-[80px] md:h-[260px] md:w-[260px] " />
               <div className=" ">
               <h3 className=" font-semibold mt-1 text-yellow-600 md:text-3xl ml-14">{title}</h3>
                <p className="text-medium text-gray-300 mt-2 flex flex-wrap">
                    {description}
                </p>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0  z-10">
                    <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber - 1))}`} className="btn btn-circle absolute bg-red-700 left-2">❮</a> 
                    <a href={`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle absolute bg-red-700 right-10">❯</a>
                </div>
            </div>
            
        </div> 
    );
}

export default CarouselSlide;