'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function CareerPage() {
  return (
    <>
      <Header />

      <main>
        {/* Career section */}
        <section className="pb-[100px] xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <h2>
                We&apos;re building the ruture of NextSaaS— <br className="hidden md:block" />
                come build It with us.
              </h2>
            </div>
            <figure className="mb-18">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" alt="banner-image" className="rounded-2xl" />
            </figure>
            <div className="space-y-8 max-w-[840px] mx-auto">
              <h4>Become part of a passionate community fueled by common interests.</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                Adipiscing viverra vulputate curabitur est.
              </p>

              <p>
                Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
                suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
                eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
              </p>
              <p>
                Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
                in rhoncus magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum
                rhoncus commodo amet nec auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur.
                Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.
              </p>

              <p>
                Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
                suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
                eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
              </p>
              <p>
                Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
                in rhoncus magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum
                rhoncus commodo amet nec auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur.
                Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.
              </p>

              <p>
                Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
                suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
                eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
              </p>
              <p>
                Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
                in rhoncus magna augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum
                rhoncus commodo amet nec auctor nibh vel mi blandit.
              </p>
            </div>
          </div>
        </section>

        {/* Feature section */}
        <section className="bg-white dark:bg-background-6 py-[100px] xl:py-[200px]">
          <div className="main-container">
            <div className="text-center mb-8 md:mb-[52px]">
              <span className="badge bg-primary-500 text-white mb-5"> More Features </span>
              <h2>
                Managing your money has
                <br className="hidden md:block" />
                never been easier
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Smart expense tracking
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Real-time analytics
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Secure payment processing
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Automated budgeting tools
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Multi-currency support
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl block dark:hidden"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
                    alt="feature"
                    className="w-full h-full object-cover rounded-2xl hidden dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                    Investment portfolio tracking
                  </h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Positions section */}
        <section className="py-[100px] xl:py-[200px]">
          <div className="main-container">
            <div className="text-center mb-14">
              <span className="badge bg-primary-500 text-white mb-5">Open Positions </span>
              <h2>
                Become part of the
                <br className="hidden md:block" />
                dream-team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Position 1*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">New york</span>
                    <span className="badge badge-gray-light">Full-time</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">
                      Digital is making place in funds back-office
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
              {/* Position 2*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">Germany</span>
                    <span className="badge badge-gray-light">Full-time</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">Systems administrator</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
              {/* Position 3*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">Australia</span>
                    <span className="badge badge-gray-light">Remote</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">Technical project manager</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
              {/* Position 4*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">Canada</span>
                    <span className="badge badge-gray-light">Remote</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">Marketing lead</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
              {/* Position 5*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">London</span>
                    <span className="badge badge-gray-light">Part-time</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">Cybersecurity analyst</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
              {/* Position 6*/}
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-gray-light">New york</span>
                    <span className="badge badge-gray-light">Full-time</span>
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">Information security specialist</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
                      Adipiscing viverra vulputate curabitur est.
                    </p>
                  </div>
                  <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                    <a
                      href="/solutions/career/details"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Read more
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
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

                        {/* two  */}
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
        </section>

        {/* CTA v1 section */}
        <section className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white" aria-label="Use Case Overview">
          <div className="main-container">
            <div className="flex items-center flex-col lg:flex-row justify-between">
              <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
                <span className="badge bg-primary-500 text-white badge-green">Get started</span>
                <div className="space-y-3">
                  <h2 className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2">
                    Build a complete website using the assistance
                    <span className="text-primary-500 hidden"></span>
                  </h2>
                  <p>Start your free trial today and see your ideas come to life easily and creatively.</p>
                </div>
              </div>

              <div className="lg:basis-[486px] space-y-6 md:ml-0 xl:ml-[80px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
                <form
                  action="#"
                  method="post"
                  className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    id="userEmail-cta-v1"
                    placeholder="Enter your email"
                    required
                    className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"
                  />

                  <div className="group w-full md:w-auto inline-block">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary text-center transition-all duration-500 ease-in-out md:h-12 font-normal text-nowrap group-hover:scale-101 lowercase shadow-1 bg-primary-500 border-stroke-7 text-white text-tagline-1 px-5 py-2.5 w-full md:w-auto mx-auto md:mx-0 hover:btn-secondary dark:hover:btn-accent"
                    >
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Get started
                      </span>

                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
                        <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M11 5H13V7H11V5Z" fill="white" />
                            <path d="M5 5H7V7H5V5Z" fill="white" />
                            <path d="M14 8H16V10H14V8Z" fill="white" />
                            <path d="M8 8H10V10H8V8Z" fill="white" />
                            <path d="M17 11H19V13H17V11Z" fill="white" />
                            <path d="M11 11H13V13H11V11Z" fill="white" />
                            <path d="M14 14H16V16H14V14Z" fill="white" />
                            <path d="M8 14H10V16H8V14Z" fill="white" />
                            <path d="M11 17H13V19H11V17Z" fill="white" />
                            <path d="M5 17H7V19H5V17Z" fill="white" />
                          </svg>
                        </span>

                        {/* two  */}
                        <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M11 5H13V7H11V5Z" fill="white" />
                            <path d="M5 5H7V7H5V5Z" fill="white" />
                            <path d="M14 8H16V10H14V8Z" fill="white" />
                            <path d="M8 8H10V10H8V8Z" fill="white" />
                            <path d="M17 11H19V13H17V11Z" fill="white" />
                            <path d="M11 11H13V13H11V11Z" fill="white" />
                            <path d="M14 14H16V16H14V14Z" fill="white" />
                            <path d="M8 14H10V16H8V14Z" fill="white" />
                            <path d="M11 17H13V19H11V17Z" fill="white" />
                            <path d="M5 17H7V19H5V17Z" fill="white" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                </form>
                <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
                  <li className="flex items-center justify-center gap-2">
                    <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        aria-hidden="true"
                        className="fill-white dark:fill-secondary"
                      >
                        <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                      </svg>
                    </span>
                    <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        aria-hidden="true"
                        className="fill-white dark:fill-secondary"
                      >
                        <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                      </svg>
                    </span>
                    <p className="text-tagline-3 sm:text-tagline-2">14-Day free trial</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
