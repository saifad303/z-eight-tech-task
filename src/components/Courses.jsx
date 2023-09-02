import React from "react";
import { BsBook, BsStopwatch, BsPerson, BsCameraVideo } from "react-icons/bs";

const Courses = () => {
  /* array to iterate card items */
  const cards = [
    {
      title: "The Ultimate SEO training 2023 + SEO for wordpress",
      img: "https://i.pinimg.com/564x/43/f1/60/43f1601a846ba56fbed07db942c852f7.jpg",
      authorName: "Saif Ahmed",
    },
    {
      title: "Google digital marketing & E-commerce pro certificate",
      img: "https://i.pinimg.com/564x/eb/75/b1/eb75b12bf1160d6d6c27fdd9d6231e5b.jpg",
      authorName: "Rashid Udding",
    },
    {
      title: "IBM Data analyst professional certificate",
      img: "https://i.pinimg.com/564x/fd/74/5a/fd745a9e81eb12b5d2ba4f91fb792bf5.jpg",
      authorName: "Luis Fonsi",
    },
    {
      title: "Machine learning specialization",
      img: "https://i.pinimg.com/564x/ee/93/35/ee9335a863d33c9fb59fa9930711f1fd.jpg",
      authorImg: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Anonymous",
    },
  ];

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 mb-9">
      {/* header section of course start */}
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold capitalize">
          Discover our popular courses
        </h1>
        <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quod incidunt reprehenderit ipsa. Accusantium aspernatur nostrum fugit
          eos. Deserunt earum nisi cumque rem fugit.
        </p>
      </div>
      {/* header section of course end */}

      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card content start */}
        {cards.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm p-3"
            key={key}
          >
            <a href="">
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-md"
              />
              <div className="flex items-center mt-2 pt-3">
                <div className=" flex items-center w-full">
                  <div className="flex-none w-10 h-10 rounded-full border border-[#55C360]">
                    <img
                      src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                      className="w-full h-full rounded-full"
                      alt={items.authorName}
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {items.authorName}
                    </span>
                  </div>
                  <div className=" flex items-center ml-auto gap-2">
                    <svg
                      height="18px"
                      width="18px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 47.94 47.94"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#ED8A19"
                        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
                      />
                    </svg>
                    <span className=" text-slate-500 font-medium">(4.7)</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 mb-3">
                <h3 className="text-lg text-slate-700 font-medium w-[90%] xss:w-64 xs:w-64 md:w-80 lmd:w-96 lg:w-64 sxl:w-80 xl:w-60 2xl:w-64">
                  {items.title}
                </h3>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <div className=" space-y-1">
                  <div className=" flex items-center gap-2">
                    <BsBook></BsBook>
                    <p>10 lessons</p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <BsStopwatch></BsStopwatch>
                    <p>1 hr 50 min</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className=" flex items-center gap-2">
                    <BsPerson></BsPerson>
                    <p>125 students</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCameraVideo></BsCameraVideo>
                    <p>12 Lectures</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-between font-medium mt-5">
                <div className="space-x-2">
                  <span className=" text-slate-700">$145.00</span>
                  <span className=" text-slate-400 line-through">$55.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-[#55C360] rounded-lg duration-150 active:shadow-lg">
                  Add to cart
                </button>
              </div>
            </a>
          </article>
        ))}
        {/* card content end */}
      </div>
    </section>
  );
};

export default Courses;
