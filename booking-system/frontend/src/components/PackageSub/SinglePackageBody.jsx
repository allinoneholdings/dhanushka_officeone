import React from "react";
import imgcard from "../../assets/CardImg.webp";

const SinglePackageBody = () => {
  let id = 23;
  let name = "Package 01";
  let description = "helo";
  let facilities =
    "AC,Unlimited Wifi,Printed Access,Lunch Room,Wash Room,Any Work,consultation Access for Networking Events,Lobby";
  let price = 213;
  let img = `${imgcard}`;

  return (
    <div>
      <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img class="w-full dark:hidden" src={img} alt="" />
              <img
                class="w-full hidden dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt=""
              />
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {name}
              </h1>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  {"Rs: " + price}
                </p>
              </div>

              <form action="">
                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <div class="relative max-w-sm">
                    <input
                      type="date"
                      min="2024-06-04"
                      max="2025-05-05"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="relative max-w-sm">
                    <input
                      type="date"
                      min="2024-06-04"
                      max="2025-05-05"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <div class="w-full max-w-sm min-w-[100px]">
                      <div class="relative">
                        <select class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                          <option value="brazil">2</option>
                          <option value="bucharest">4</option>
                          <option value="london">6</option>
                          <option value="washington">8</option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.2"
                          stroke="currentColor"
                          class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="mb-3 mt-4 text-gray-700 dark:text-gray-400">
                  {"Total Price " + 45}
                </p>
                <a
                  href="#"
                  title=""
                  class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-blue-400 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  Add to favorites
                </a>
              </form>

              <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p class="mb-6 text-gray-500 dark:text-gray-400">{description}</p>

              <p class="text-gray-500 dark:text-gray-400">{facilities}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePackageBody;
