'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';

export default function BlogPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Blog List Section */}
        <section className="md:pt-[160px] pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-14 md:mb-[70px]">
              <FadeIn delay={0.2}>
                <h2>
                  Our recent
                  <span className="text-primary-500 inline-block">news & insights</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="max-w-[738px] mx-auto">
                  Our recent news and insights highlight the latest developments, achievements, and thought
                  leadership shaping our journey forward. From product innovations and strategic partnerships
                  to industry trends
                </p>
              </FadeIn>
            </div>

            {/* Blog List */}
            <div className="grid grid-cols-12 max-md:gap-y-20 md:gap-5 lg:gap-16">
              <div className="max-md:col-span-full max-lg:col-span-7 lg:col-span-8 max-md:order-2 max-w-[793px] space-y-14 md:space-y-[70px]">
                {/* Blog Item 01 */}
                <FadeIn delay={0.3}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                            alt="blog image"
                            className="w-full object-cover rounded-[20px]"
                          />
                        </figure>

                        {/* Blog Content */}
                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span
                              className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]"
                              aria-label="Article category"
                            >
                              Design
                            </span>
                            <span
                              className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]"
                              aria-label="Article category"
                            >
                              Research
                            </span>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <time
                              className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60"
                              dateTime="2025-05-14"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_3920_8875)">
                                  <path
                                    d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z"
                                    className="fill-secondary dark:fill-stroke-8"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_3920_8875">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              14.04.2020
                            </time>

                            <div
                              aria-hidden="true"
                              className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"
                            ></div>

                            <time
                              className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60"
                              dateTime="PT1M"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_3920_8882_fixed)">
                                  <path
                                    d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z"
                                    className="fill-secondary dark:fill-stroke-8"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_3920_8882_fixed">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              4 min
                            </time>
                          </div>

                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a
                              href="#"
                              aria-label="Read full article about electronic prescription in finance sector"
                            >
                              Product-led growth vs sales-led growth which one wins
                            </a>
                          </h3>

                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                              >
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                                  Read more
                                </span>

                                <div className="relative overflow-hidden size-6">
                                  {/* one */}
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z" />
                                      <path d="M5 5H7V7H5V5Z" />
                                      <path d="M14 8H16V10H14V8Z" />
                                      <path d="M8 8H10V10H8V8Z" />
                                      <path d="M17 11H19V13H17V11Z" />
                                      <path d="M11 11H13V13H11V11Z" />
                                      <path d="M14 14H16V16H14V14Z" />
                                      <path d="M8 14H10V16H8V14Z" />
                                      <path d="M11 17H13V19H11V17Z" />
                                      <path d="M5 17H7V19H5V17Z" />
                                    </svg>
                                  </span>

                                  {/* two */}
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z" />
                                      <path d="M5 5H7V7H5V5Z" />
                                      <path d="M14 8H16V10H14V8Z" />
                                      <path d="M8 8H10V10H8V8Z" />
                                      <path d="M17 11H19V13H17V11Z" />
                                      <path d="M11 11H13V13H11V11Z" />
                                      <path d="M14 14H16V16H14V14Z" />
                                      <path d="M8 14H10V16H8V14Z" />
                                      <path d="M11 17H13V19H11V17Z" />
                                      <path d="M5 17H7V19H5V17Z" />
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>

                {/* Blog Item 02 */}
                <FadeIn delay={0.1}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                            alt="blog image"
                            className="w-full object-cover rounded-[20px]"
                          />
                        </figure>

                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Design</span>
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Research</span>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="2025-05-14">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8875)">
                                  <path d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8875"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              01.04.2020
                            </time>
                            <div aria-hidden="true" className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"></div>
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="PT1M">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8882_fixed)">
                                  <path d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8882_fixed"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              4 min
                            </time>
                          </div>

                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a href="#" aria-label="Read full article">Our saas seo strategy 6 months, 300% organic traffic growth</a>
                          </h3>

                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a href="#" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto">
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Read more</span>
                                <div className="relative overflow-hidden size-6">
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg>
                                  </span>
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>

                {/* Blog Item 03 */}
                <FadeIn delay={0.1}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop" alt="blog image" className="w-full object-cover rounded-[20px]"/>
                        </figure>
                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]">Design</span>
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]">Research</span>
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="2025-05-14">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3920_8875)"><path d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z" className="fill-secondary dark:fill-stroke-8"/></g><defs><clipPath id="clip0_3920_8875"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                              14.04.2020
                            </time>
                            <div aria-hidden="true" className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"></div>
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="PT1M">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3920_8882_fixed)"><path d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z" className="fill-secondary dark:fill-stroke-8"/></g><defs><clipPath id="clip0_3920_8882_fixed"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                              4 min
                            </time>
                          </div>
                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a href="#">Decoding saas consolidation what it means for founders</a>
                          </h3>
                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a href="#" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto">
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Read more</span>
                                <div className="relative overflow-hidden size-6">
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg></span>
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg></span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>

                {/* Blog Item 04 */}
                <FadeIn delay={0.1}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" alt="blog image" className="w-full object-cover rounded-[20px]"/>
                        </figure>
                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]">Marketing</span>
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]">Strategy</span>
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="2025-05-14">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3920_8875)"><path d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z" className="fill-secondary dark:fill-stroke-8"/></g><defs><clipPath id="clip0_3920_8875"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                              14.04.2020
                            </time>
                            <div aria-hidden="true" className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"></div>
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="PT1M">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3920_8882_fixed)"><path d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z" className="fill-secondary dark:fill-stroke-8"/></g><defs><clipPath id="clip0_3920_8882_fixed"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                              4 min
                            </time>
                          </div>
                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a href="#">Digital is making place in funds back-office</a>
                          </h3>
                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a href="#" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto">
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Read more</span>
                                <div className="relative overflow-hidden size-6">
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg></span>
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/></svg></span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>

                {/* Blog Item 05 */}
                <FadeIn delay={0.1}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" alt="blog image" className="w-full object-cover rounded-[20px]"/>
                        </figure>

                        {/* Blog Content */}
                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Marketing</span>
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Crypto</span>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="2025-05-14">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8875)">
                                  <path d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8875"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              14.04.2020
                            </time>

                            <div aria-hidden="true" className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"></div>

                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="PT1M">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8882_fixed)">
                                  <path d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8882_fixed"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              4 min
                            </time>
                          </div>

                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a href="#" aria-label="Read full article about electronic prescription in finance sector">
                              A customized electronic prescription designed specifically
                            </a>
                          </h3>

                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a href="#" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto">
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Read more</span>

                                <div className="relative overflow-hidden size-6">
                                  {/* one */}
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/>
                                    </svg>
                                  </span>

                                  {/* two */}
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>

                {/* Blog Item 06 */}
                <FadeIn delay={0.1}>
                  <article className="group">
                    <div className="bg-background-2 dark:bg-background-6 rounded-[20px] relative overflow-hidden scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[26px] items-center">
                        <figure className="lg:max-w-[380px] lg:max-h-[370px]">
                          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop" alt="blog image" className="w-full object-cover rounded-[20px]"/>
                        </figure>

                        {/* Blog Content */}
                        <div className="max-lg:pl-4 pr-8 sm:py-8 py-5">
                          <div className="flex items-center gap-2 mb-8">
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Marketing</span>
                            <span className="badge badge-white font-medium dark:!bg-accent/10 dark:!text-accent/60 dark:backdrop-blur-[17px]" aria-label="Article category">Strategy</span>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="2025-05-14">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8875)">
                                  <path d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8875"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              14.04.2020
                            </time>

                            <div aria-hidden="true" className="w-px inline-block h-5 bg-stroke-2 dark:bg-stroke-6"></div>

                            <time className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60" dateTime="PT1M">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_3920_8882_fixed)">
                                  <path d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z" className="fill-secondary dark:fill-stroke-8"/>
                                </g>
                                <defs><clipPath id="clip0_3920_8882_fixed"><rect width="20" height="20" fill="white"/></clipPath></defs>
                              </svg>
                              5 min
                            </time>
                          </div>

                          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2 mb-4">
                            <a href="#" aria-label="Read full article about electronic prescription in finance sector">
                              Raising your first round saas fundraising tips from the trenches
                            </a>
                          </h3>

                          <div className="md:text-left text-center">
                            <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                              <a href="#" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto">
                                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Read more</span>

                                <div className="relative overflow-hidden size-6">
                                  {/* one */}
                                  <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/>
                                    </svg>
                                  </span>

                                  {/* two */}
                                  <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M11 5H13V7H11V5Z"/><path d="M5 5H7V7H5V5Z"/><path d="M14 8H16V10H14V8Z"/><path d="M8 8H10V10H8V8Z"/><path d="M17 11H19V13H17V11Z"/><path d="M11 11H13V13H11V11Z"/><path d="M14 14H16V16H14V14Z"/><path d="M8 14H10V16H8V14Z"/><path d="M11 17H13V19H11V17Z"/><path d="M5 17H7V19H5V17Z"/>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              </div>

              {/* Blog List Sidebar */}
              <div className="max-md:col-span-full max-lg:col-span-5 lg:col-span-4 max-md:order-1 blog-item bg-background-2 dark:bg-background-6 rounded-[20px] shadow-1 self-start space-y-[52px] max-w-full md:max-w-[410px] px-8 py-[44px]">
                <form action="#" method="post" role="search" aria-label="Search articles" className="flex items-center justify-start gap-3 relative">
                    <input type="search" name="search" id="searchArticles" placeholder="Search articles" required aria-label="Search articles" className="px-[18px] h-11 py-3 placeholder:text-secondary/60 rounded-[360px] focus:outline-1 focus:outline-primary-500 font-normal border placeholder:font-normal border-stroke-3 dark:border-stroke-7 dark:placeholder:text-accent/60 bg-background-1 dark:bg-background-6 shadow-1 max-md:max-w-full w-full dark:text-accent"/>
                    <button type="submit" aria-label="Submit search" className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M11.3404 18.6798C15.6446 18.6798 19.1339 15.1905 19.1339 10.8863C19.1339 6.58205 15.6446 3.09277 11.3404 3.09277C7.03615 3.09277 3.54688 6.58205 3.54688 10.8863C3.54688 15.1905 7.03615 18.6798 11.3404 18.6798Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.8516 16.3975L21.3607 20.9066" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </form>

                  <div>
                    <h3 className="text-heading-5">Categories</h3>
                    <div className="space-y-2 mt-2.5">
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 text-primary-500 transition-colors duration-300">
                        <span>Day Trading</span>
                        <span>(09)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>Finance</span>
                        <span>(20)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>Virtual Hiring</span>
                        <span>(25)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>Headhunting</span>
                        <span>(06)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>Promotions</span>
                        <span>(18)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>Recruitment Agencies</span>
                        <span>(11)</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-5">Recent articles</h3>
                    <div className="space-y-5 mt-6">
                      <div className="flex items-center gap-4">
                        <figure className="max-w-[102px] w-full max-h-[77px] overflow-hidden rounded-[5px] flex-shrink-0">
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop" alt="blog image" className="w-full object-cover"/>
                        </figure>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-tagline-1">
                            <a href="#">We&apos;ve mastered saas pricing models</a>
                          </h4>
                          <p className="text-tagline-3">1 May 2024</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <figure className="max-w-[102px] w-full max-h-[77px] overflow-hidden rounded-[5px] flex-shrink-0">
                          <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=200&h=150&fit=crop" alt="blog image" className="w-full object-cover"/>
                        </figure>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-tagline-1">
                            <a href="#">Decoding saas consolidation what it means for founders</a>
                          </h4>
                          <p className="text-tagline-3">1 May 2024</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <figure className="max-w-[102px] w-full max-h-[77px] overflow-hidden rounded-[5px] flex-shrink-0">
                          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=150&fit=crop" alt="blog image" className="w-full object-cover"/>
                        </figure>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-tagline-1">
                            <a href="#">Digital is making place in funds back-office</a>
                          </h4>
                          <p className="text-tagline-3">1 May 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-5">Tags</h3>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <a href="#">
                        <span className="badge badge-white font-medium dark:!bg-transparent dark:!border dark:!border-stroke-5 dark:!text-accent/60 dark:backdrop-blur-[17px]">Business</span>
                      </a>
                      <a href="#">
                        <span className="badge badge-white font-medium dark:!bg-transparent dark:!border dark:!border-stroke-5 dark:!text-accent/60 dark:backdrop-blur-[17px]">Technology</span>
                      </a>
                      <a href="#">
                        <span className="badge badge-white font-medium dark:!bg-transparent dark:!border dark:!border-stroke-5 dark:!text-accent/60 dark:backdrop-blur-[17px]">Design</span>
                      </a>
                      <a href="#">
                        <span className="badge badge-white font-medium dark:!bg-transparent dark:!border dark:!border-stroke-5 dark:!text-accent/60 dark:backdrop-blur-[17px]">Marketing</span>
                      </a>
                      <a href="#">
                        <span className="badge badge-white font-medium dark:!bg-transparent dark:!border dark:!border-stroke-5 dark:!text-accent/60 dark:backdrop-blur-[17px]">Development</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-5">Past records</h3>
                    <div className="space-y-2 mt-2.5">
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 dark:text-accent transition-colors duration-300">
                        <span>January 2024</span>
                        <span>(09)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>February 2024</span>
                        <span>(20)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>March 2024</span>
                        <span>(25)</span>
                      </a>
                      <a href="#" className="flex items-center justify-between py-1.5 text-tagline-1 hover:text-primary-500 transition-colors duration-300 dark:text-accent">
                        <span>April 2024</span>
                        <span>(06)</span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>

            <FadeIn delay={0.2}>
              <ul className="flex items-center justify-center mt-14 gap-2">
                <li className="group">
                  <a href="#" className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M12.5 6H1.5M1.5 6L6 1.5M1.5 6L6 10.5" className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="group page-active">
                  <a href="#" className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]:bg-primary-500 group-[.page-active]:text-accent dark:group-[.page-active]:text-accent">
                    1
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]::bg-primary-500">
                    2
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]::bg-primary-500">
                    3
                  </a>
                </li>
                <li className="group max-md:hidden">
                  <a href="#" className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]::bg-primary-500">
                    4
                  </a>
                </li>
                <li className="group max-md:hidden">
                  <a href="#" className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]::bg-primary-500">
                    5
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M1.5 6H12.5M12.5 6L8 1.5M12.5 6L8 10.5" className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* CTA v1 section */}
        <section className="py-[50px] md:py-20 lg:py-28 dark:bg-background-7 bg-white" aria-label="Use Case Overview">
          <div className="main-container">
            <div className="flex items-center flex-col lg:flex-row justify-between">
              <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
                <FadeIn delay={0.3}>
                  <span className="badge bg-primary-500 text-white badge-yellow-v2">Get started</span>
                </FadeIn>
                <div className="space-y-3">
                  <FadeIn delay={0.4}>
                    <h2 className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2">
                      Build a complete website using the assistance
                      <span className="text-primary-500 hidden"></span>
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                    <p>Start your free trial today and see your ideas come to life easily and creatively.</p>
                  </FadeIn>
                </div>
              </div>

              <div className="lg:basis-[486px] space-y-6 md:ml-0 xl:ml-[80px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
                <FadeIn delay={0.6}>
                  <form action="#" method="post" className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3">
                    <input type="email" name="email" id="userEmail-cta-v1" placeholder="Enter your email" required className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"/>

                    <div className="group w-full md:w-auto inline-block">
                      <button type="submit" className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary text-center transition-all duration-500 ease-in-out md:h-12 font-normal text-nowrap group-hover:scale-101 lowercase shadow-1 bg-primary-500 border-stroke-7 text-white text-tagline-1 px-5 py-2.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">Get started</span>

                        <div className="relative overflow-hidden size-6">
                          {/* one */}
                          <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white"/>
                              <path d="M5 5H7V7H5V5Z" fill="white"/>
                              <path d="M14 8H16V10H14V8Z" fill="white"/>
                              <path d="M8 8H10V10H8V8Z" fill="white"/>
                              <path d="M17 11H19V13H17V11Z" fill="white"/>
                              <path d="M11 11H13V13H11V11Z" fill="white"/>
                              <path d="M14 14H16V16H14V14Z" fill="white"/>
                              <path d="M8 14H10V16H8V14Z" fill="white"/>
                              <path d="M11 17H13V19H11V17Z" fill="white"/>
                              <path d="M5 17H7V19H5V17Z" fill="white"/>
                            </svg>
                          </span>

                          {/* two */}
                          <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white"/>
                              <path d="M5 5H7V7H5V5Z" fill="white"/>
                              <path d="M14 8H16V10H14V8Z" fill="white"/>
                              <path d="M8 8H10V10H8V8Z" fill="white"/>
                              <path d="M17 11H19V13H17V11Z" fill="white"/>
                              <path d="M11 11H13V13H11V11Z" fill="white"/>
                              <path d="M14 14H16V16H14V14Z" fill="white"/>
                              <path d="M8 14H10V16H8V14Z" fill="white"/>
                              <path d="M11 17H13V19H11V17Z" fill="white"/>
                              <path d="M5 17H7V19H5V17Z" fill="white"/>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                  </form>
                </FadeIn>
                <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
                  <FadeIn delay={0.7}>
                    <li className="flex items-center justify-center gap-2">
                      <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
                          <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"/>
                        </svg>
                      </span>
                      <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
                    </li>
                  </FadeIn>
                  <FadeIn delay={0.8}>
                    <li className="flex items-center justify-center gap-2">
                      <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
                          <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"/>
                        </svg>
                      </span>
                      <p className="text-tagline-3 sm:text-tagline-2">14-Day free trial</p>
                    </li>
                  </FadeIn>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
