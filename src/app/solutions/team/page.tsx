'use client'

import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {FadeIn} from '@/components/animations/FadeIn'

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
        {/* Team Members section */}
        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[180px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="main-container space-y-[70px]">
            <div className="text-center space-y-5">
              <FadeIn delay={0.1}>
                <span className="badge badge-cyan">Our team</span>
              </FadeIn>
              <div className="max-w-[620px] mx-auto space-y-3">
                <FadeIn delay={0.2}>
                  <h2>Our innovative, dynamic and talented team</h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p>
                    Our innovative, dynamic, and talented team is the driving force behind our success. Each
                    member brings a unique blend of expertise
                  </p>
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-12 max-sm:gap-y-8 sm:gap-5 md:gap-8">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> John Smith </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-3 lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Facebook profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                              <path
                                d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Instagram profile</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <rect
                                x="11"
                                y="5"
                                width="2"
                                height="2"
                                rx="1"
                                transform="rotate(-90 11 5)"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                              <rect
                                x="11.5"
                                y="4.5"
                                width="1"
                                height="1"
                                rx="0.5"
                                transform="rotate(-90 11.5 4.5)"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Youtube profile</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="16"
                              viewBox="0 0 22 16"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.668 15.0028C18.9724 15.0867 20.91 13.29 21 10.9858V5.01982C20.91 2.71569 18.9724 0.918929 16.668 1.00282H5.332C3.02763 0.918929 1.08998 2.71569 1 5.01982V10.9858C1.08998 13.29 3.02763 15.0867 5.332 15.0028H16.668Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.508 5.17711L13.669 7.32511C13.8738 7.44468 13.9997 7.66398 13.9997 7.90111C13.9997 8.13824 13.8738 8.35754 13.669 8.47711L10.508 10.8271C9.908 11.2341 9 10.8871 9 10.2511V5.75111C9 5.11811 9.909 4.77011 10.508 5.17711Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Linkedin profile</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="11"
                              viewBox="0 0 13 11"
                              fill="none"
                            >
                              <path
                                d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Dribbble profile</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.81146 14.7617C6.69789 15.5957 3.41731 14.1957 1.86521 11.3707C0.313116 8.54567 0.890795 5.02595 3.26447 2.84524C5.63814 0.66452 9.19411 0.386619 11.8777 2.1721C14.5614 3.95759 15.6788 7.34483 14.5845 10.3767C13.8079 12.532 12.0248 14.1702 9.81146 14.7617Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.06142 14.7162C9.03653 15.1297 9.35153 15.485 9.765 15.5099C10.1785 15.5348 10.5338 15.2198 10.5587 14.8063L9.06142 14.7162ZM6.84286 0.874373C6.64188 0.512186 6.18534 0.381502 5.82315 0.582483C5.46097 0.783464 5.33028 1.24 5.53126 1.60219L6.84286 0.874373ZM13.2187 2.9035C13.3591 2.5138 13.157 2.08408 12.7673 1.94368C12.3776 1.80328 11.9479 2.00537 11.8075 2.39506L13.2187 2.9035ZM7.74006 7.03428L7.54644 6.30971L7.54546 6.30997L7.74006 7.03428ZM1.89802 5.05032C1.58158 4.78304 1.10838 4.82289 0.841101 5.13932C0.573819 5.45576 0.613667 5.92896 0.930105 6.19624L1.89802 5.05032ZM2.77955 13.0958C2.63901 13.4855 2.84095 13.9153 3.23059 14.0558C3.62023 14.1963 4.05003 13.9944 4.19057 13.6048L2.77955 13.0958ZM8.25822 8.96384L8.06412 8.23939L8.25822 8.96384ZM14.1013 10.9494C14.4178 11.2166 14.891 11.1766 15.1582 10.8601C15.4254 10.5435 15.3854 10.0703 15.0688 9.80317L14.1013 10.9494ZM9.81006 14.7613L10.5587 14.8063C10.7186 12.1509 10.1178 9.27114 9.32769 6.78072C8.53534 4.28333 7.53363 2.11922 6.84286 0.874373L6.18706 1.23828L5.53126 1.60219C6.17449 2.76135 7.13628 4.83373 7.89793 7.23434C8.66179 9.64192 9.20557 12.3216 9.06142 14.7162L9.81006 14.7613ZM12.5131 2.64928L11.8075 2.39506C11.1142 4.31922 9.52233 5.7817 7.54644 6.30971L7.74006 7.03428L7.93369 7.75886C10.3844 7.10397 12.3588 5.29004 13.2187 2.9035L12.5131 2.64928ZM7.74006 7.03428L7.54546 6.30997C5.57029 6.84064 3.46046 6.37005 1.89802 5.05032L1.41406 5.62328L0.930105 6.19624C2.86801 7.83311 5.48485 8.41679 7.93467 7.75859L7.74006 7.03428ZM3.48506 13.3503L4.19057 13.6048C4.88464 11.6805 6.47642 10.2177 8.45232 9.68829L8.25822 8.96384L8.06412 8.23939C5.614 8.89585 3.64019 10.7097 2.77955 13.0958L3.48506 13.3503ZM8.25822 8.96384L8.45232 9.68829C10.4282 9.15889 12.5381 9.62992 14.1013 10.9494L14.5851 10.3763L15.0688 9.80317C13.1305 8.16701 10.5142 7.58293 8.06412 8.23939L8.25822 8.96384Z"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Behance profile</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="14"
                              viewBox="0 0 16 14"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 7V1H4C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C5.65685 7 7 8.34315 7 10C7 11.6569 5.65685 13 4 13H1V7Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10H15Z"
                                className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4 7.75C4.41421 7.75 4.75 7.41421 4.75 7C4.75 6.58579 4.41421 6.25 4 6.25V7.75ZM9.75 9.99998C9.74999 9.58577 9.41419 9.24999 8.99998 9.25C8.58577 9.25001 8.24999 9.58581 8.25 10L9.75 9.99998ZM10.9295 12.8024L10.6619 13.5031L10.9295 12.8024ZM14.795 12.5C15.0712 12.1913 15.0447 11.7172 14.736 11.441C14.4273 11.1648 13.9532 11.1913 13.677 11.5L14.795 12.5ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75V4.25ZM1 7V7.75H4V7V6.25H1V7ZM9 10L8.25 10C8.25004 11.5548 9.20948 12.9483 10.6619 13.5031L10.9295 12.8024L11.1971 12.1018C10.3257 11.7689 9.75002 10.9328 9.75 9.99998L9 10ZM10.9295 12.8024L10.6619 13.5031C12.1143 14.0578 13.7584 13.6588 14.795 12.5L14.236 12L13.677 11.5C13.0551 12.1953 12.0686 12.4347 11.1971 12.1018L10.9295 12.8024ZM14 5V4.25H10V5V5.75H14V5Z"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              {/* Team Member 2 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> John Lacker </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>

                      {/* Social Links - Same structure as Member 1 */}
                      <div className="flex items-center justify-center gap-3 lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Facebook profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                              <path
                                d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                                className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                              />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Instagram profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <rect x="11" y="5" width="2" height="2" rx="1" transform="rotate(-90 11 5)" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
                              <rect x="11.5" y="4.5" width="1" height="1" rx="0.5" transform="rotate(-90 11.5 4.5)" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeLinecap="round" />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Youtube profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M16.668 15.0028C18.9724 15.0867 20.91 13.29 21 10.9858V5.01982C20.91 2.71569 18.9724 0.918929 16.668 1.00282H5.332C3.02763 0.918929 1.08998 2.71569 1 5.01982V10.9858C1.08998 13.29 3.02763 15.0867 5.332 15.0028H16.668Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.508 5.17711L13.669 7.32511C13.8738 7.44468 13.9997 7.66398 13.9997 7.90111C13.9997 8.13824 13.8738 8.35754 13.669 8.47711L10.508 10.8271C9.908 11.2341 9 10.8871 9 10.2511V5.75111C9 5.11811 9.909 4.77011 10.508 5.17711Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Linkedin profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                              <path d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Dribbble profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.81146 14.7617C6.69789 15.5957 3.41731 14.1957 1.86521 11.3707C0.313116 8.54567 0.890795 5.02595 3.26447 2.84524C5.63814 0.66452 9.19411 0.386619 11.8777 2.1721C14.5614 3.95759 15.6788 7.34483 14.5845 10.3767C13.8079 12.532 12.0248 14.1702 9.81146 14.7617Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M9.06142 14.7162C9.03653 15.1297 9.35153 15.485 9.765 15.5099C10.1785 15.5348 10.5338 15.2198 10.5587 14.8063L9.06142 14.7162ZM6.84286 0.874373C6.64188 0.512186 6.18534 0.381502 5.82315 0.582483C5.46097 0.783464 5.33028 1.24 5.53126 1.60219L6.84286 0.874373ZM13.2187 2.9035C13.3591 2.5138 13.157 2.08408 12.7673 1.94368C12.3776 1.80328 11.9479 2.00537 11.8075 2.39506L13.2187 2.9035ZM7.74006 7.03428L7.54644 6.30971L7.54546 6.30997L7.74006 7.03428ZM1.89802 5.05032C1.58158 4.78304 1.10838 4.82289 0.841101 5.13932C0.573819 5.45576 0.613667 5.92896 0.930105 6.19624L1.89802 5.05032ZM2.77955 13.0958C2.63901 13.4855 2.84095 13.9153 3.23059 14.0558C3.62023 14.1963 4.05003 13.9944 4.19057 13.6048L2.77955 13.0958ZM8.25822 8.96384L8.06412 8.23939L8.25822 8.96384ZM14.1013 10.9494C14.4178 11.2166 14.891 11.1766 15.1582 10.8601C15.4254 10.5435 15.3854 10.0703 15.0688 9.80317L14.1013 10.9494ZM9.81006 14.7613L10.5587 14.8063C10.7186 12.1509 10.1178 9.27114 9.32769 6.78072C8.53534 4.28333 7.53363 2.11922 6.84286 0.874373L6.18706 1.23828L5.53126 1.60219C6.17449 2.76135 7.13628 4.83373 7.89793 7.23434C8.66179 9.64192 9.20557 12.3216 9.06142 14.7162L9.81006 14.7613ZM12.5131 2.64928L11.8075 2.39506C11.1142 4.31922 9.52233 5.7817 7.54644 6.30971L7.74006 7.03428L7.93369 7.75886C10.3844 7.10397 12.3588 5.29004 13.2187 2.9035L12.5131 2.64928ZM7.74006 7.03428L7.54546 6.30997C5.57029 6.84064 3.46046 6.37005 1.89802 5.05032L1.41406 5.62328L0.930105 6.19624C2.86801 7.83311 5.48485 8.41679 7.93467 7.75859L7.74006 7.03428ZM3.48506 13.3503L4.19057 13.6048C4.88464 11.6805 6.47642 10.2177 8.45232 9.68829L8.25822 8.96384L8.06412 8.23939C5.614 8.89585 3.64019 10.7097 2.77955 13.0958L3.48506 13.3503ZM8.25822 8.96384L8.45232 9.68829C10.4282 9.15889 12.5381 9.62992 14.1013 10.9494L14.5851 10.3763L15.0688 9.80317C13.1305 8.16701 10.5142 7.58293 8.06412 8.23939L8.25822 8.96384Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
                            </svg>
                          </span>
                        </a>
                        <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                        <a href="#" className="group/social-link">
                          <span className="sr-only">Behance profile</span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M1 7V1H4C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C5.65685 7 7 8.34315 7 10C7 11.6569 5.65685 13 4 13H1V7Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10H15Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4 7.75C4.41421 7.75 4.75 7.41421 4.75 7C4.75 6.58579 4.41421 6.25 4 6.25V7.75ZM9.75 9.99998C9.74999 9.58577 9.41419 9.24999 8.99998 9.25C8.58577 9.25001 8.24999 9.58581 8.25 10L9.75 9.99998ZM10.9295 12.8024L10.6619 13.5031L10.9295 12.8024ZM14.795 12.5C15.0712 12.1913 15.0447 11.7172 14.736 11.441C14.4273 11.1648 13.9532 11.1913 13.677 11.5L14.795 12.5ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75V4.25ZM1 7V7.75H4V7V6.25H1V7ZM9 10L8.25 10C8.25004 11.5548 9.20948 12.9483 10.6619 13.5031L10.9295 12.8024L11.1971 12.1018C10.3257 11.7689 9.75002 10.9328 9.75 9.99998L9 10ZM10.9295 12.8024L10.6619 13.5031C12.1143 14.0578 13.7584 13.6588 14.795 12.5L14.236 12L13.677 11.5C13.0551 12.1953 12.0686 12.4347 11.1971 12.1018L10.9295 12.8024ZM14 5V4.25H10V5V5.75H14V5Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              {/* Team Member 3 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> William Finley </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> Micheal Jordan </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              {/* Team Member 5 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> John Smith </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              {/* Team Member 6 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> Wills Jack </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              {/* Team Member 7 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> Jordan Mack </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              {/* Team Member 8 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> Picaso Mack </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>

              {/* Team Member 9 */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                    <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop"
                        alt="team member"
                        className="w-full h-full object-cover bg-background-3 dark:bg-background-5 rounded-2xl"
                      />
                    </figure>
                    <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                      <div className="text-center">
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          <a href="#"> Nill Pack </a>
                        </h3>
                        <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                          New York
                        </p>
                      </div>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
            </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-background-2 dark:bg-background-6 pt-[120px] pb-[200px]">
          <div className="main-container">
            <div className="">
              <div className="text-center space-y-3">
                <FadeIn delay={0.1}>
                  <span className="badge badge-cyan mb-5 inline-block">
                    Get started
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 id="newsletter-heading" className="max-w-[1042px] mx-auto">
                    NextSaaS – your ultimate email & transactional messaging platform
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="max-w-[600px] mx-auto">
                    Drive more engagement. improve deliverability. automate your emails.
                  </p>
                </FadeIn>
              </div>

              <div className="space-y-8 mt-[62px] max-sm:w-[80%] max-sm:mx-auto">
                <FadeIn delay={0.4}>
                  <form
                    action="#"
                    method="post"
                    className="max-sm:flex-col flex items-center justify-center gap-3"
                  >
                    <input
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="Enter your email"
                      required
                      className="px-[18px] h-12 py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 dark:bg-background-6 dark:placeholder:text-white/40 text-secondary/60 dark:text-white/60 dark:bg-dark-200 dark:border-[#31332F] focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 max-w-[440px] w-full placeholder:font-normal font-normal"
                    />
                    <button type="submit">
                      <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-lg-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                        >
                          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                            Get started
                          </span>

                          <div className="relative overflow-hidden size-6">
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
                    </button>
                  </form>
                </FadeIn>

                <ul className="flex items-center justify-center gap-[42px]">
                  <FadeIn delay={0.2}>
                    <li className="flex items-center justify-center gap-2">
                      <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path
                            d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </span>
                      <p className="text-tagline-2">No credit card required</p>
                    </li>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <li className="flex items-center justify-center gap-2">
                      <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path
                            d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </span>
                      <p className="text-tagline-2">14-Day free trial</p>
                    </li>
                  </FadeIn>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}


function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
      <a href="#" className="group/social-link">
        <span className="sr-only">Facebook profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
            <path
              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
            />
          </svg>
        </span>
      </a>
      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
      <a href="#" className="group/social-link">
        <span className="sr-only">Instagram profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="11" y="5" width="2" height="2" rx="1" transform="rotate(-90 11 5)" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
            <rect x="11.5" y="4.5" width="1" height="1" rx="0.5" transform="rotate(-90 11.5 4.5)" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeLinecap="round" />
          </svg>
        </span>
      </a>
      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
      <a href="#" className="group/social-link">
        <span className="sr-only">Youtube profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.668 15.0028C18.9724 15.0867 20.91 13.29 21 10.9858V5.01982C20.91 2.71569 18.9724 0.918929 16.668 1.00282H5.332C3.02763 0.918929 1.08998 2.71569 1 5.01982V10.9858C1.08998 13.29 3.02763 15.0867 5.332 15.0028H16.668Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.508 5.17711L13.669 7.32511C13.8738 7.44468 13.9997 7.66398 13.9997 7.90111C13.9997 8.13824 13.8738 8.35754 13.669 8.47711L10.508 10.8271C9.908 11.2341 9 10.8871 9 10.2511V5.75111C9 5.11811 9.909 4.77011 10.508 5.17711Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
      <a href="#" className="group/social-link">
        <span className="sr-only">Linkedin profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
            <path d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
          </svg>
        </span>
      </a>
      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
      <a href="#" className="group/social-link">
        <span className="sr-only">Dribbble profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.81146 14.7617C6.69789 15.5957 3.41731 14.1957 1.86521 11.3707C0.313116 8.54567 0.890795 5.02595 3.26447 2.84524C5.63814 0.66452 9.19411 0.386619 11.8777 2.1721C14.5614 3.95759 15.6788 7.34483 14.5845 10.3767C13.8079 12.532 12.0248 14.1702 9.81146 14.7617Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.06142 14.7162C9.03653 15.1297 9.35153 15.485 9.765 15.5099C10.1785 15.5348 10.5338 15.2198 10.5587 14.8063L9.06142 14.7162ZM6.84286 0.874373C6.64188 0.512186 6.18534 0.381502 5.82315 0.582483C5.46097 0.783464 5.33028 1.24 5.53126 1.60219L6.84286 0.874373ZM13.2187 2.9035C13.3591 2.5138 13.157 2.08408 12.7673 1.94368C12.3776 1.80328 11.9479 2.00537 11.8075 2.39506L13.2187 2.9035ZM7.74006 7.03428L7.54644 6.30971L7.54546 6.30997L7.74006 7.03428ZM1.89802 5.05032C1.58158 4.78304 1.10838 4.82289 0.841101 5.13932C0.573819 5.45576 0.613667 5.92896 0.930105 6.19624L1.89802 5.05032ZM2.77955 13.0958C2.63901 13.4855 2.84095 13.9153 3.23059 14.0558C3.62023 14.1963 4.05003 13.9944 4.19057 13.6048L2.77955 13.0958ZM8.25822 8.96384L8.06412 8.23939L8.25822 8.96384ZM14.1013 10.9494C14.4178 11.2166 14.891 11.1766 15.1582 10.8601C15.4254 10.5435 15.3854 10.0703 15.0688 9.80317L14.1013 10.9494ZM9.81006 14.7613L10.5587 14.8063C10.7186 12.1509 10.1178 9.27114 9.32769 6.78072C8.53534 4.28333 7.53363 2.11922 6.84286 0.874373L6.18706 1.23828L5.53126 1.60219C6.17449 2.76135 7.13628 4.83373 7.89793 7.23434C8.66179 9.64192 9.20557 12.3216 9.06142 14.7162L9.81006 14.7613ZM12.5131 2.64928L11.8075 2.39506C11.1142 4.31922 9.52233 5.7817 7.54644 6.30971L7.74006 7.03428L7.93369 7.75886C10.3844 7.10397 12.3588 5.29004 13.2187 2.9035L12.5131 2.64928ZM7.74006 7.03428L7.54546 6.30997C5.57029 6.84064 3.46046 6.37005 1.89802 5.05032L1.41406 5.62328L0.930105 6.19624C2.86801 7.83311 5.48485 8.41679 7.93467 7.75859L7.74006 7.03428ZM3.48506 13.3503L4.19057 13.6048C4.88464 11.6805 6.47642 10.2177 8.45232 9.68829L8.25822 8.96384L8.06412 8.23939C5.614 8.89585 3.64019 10.7097 2.77955 13.0958L3.48506 13.3503ZM8.25822 8.96384L8.45232 9.68829C10.4282 9.15889 12.5381 9.62992 14.1013 10.9494L14.5851 10.3763L15.0688 9.80317C13.1305 8.16701 10.5142 7.58293 8.06412 8.23939L8.25822 8.96384Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
          </svg>
        </span>
      </a>
      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
      <a href="#" className="group/social-link">
        <span className="sr-only">Behance profile</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 7V1H4C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C5.65685 7 7 8.34315 7 10C7 11.6569 5.65685 13 4 13H1V7Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10H15Z" className="stroke-secondary/40 dark:stroke-accent/40 group-hover/social-link:stroke-secondary dark:group-hover/social-link:stroke-accent transition-colors duration-300 ease-team-ease-1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4 7.75C4.41421 7.75 4.75 7.41421 4.75 7C4.75 6.58579 4.41421 6.25 4 6.25V7.75ZM9.75 9.99998C9.74999 9.58577 9.41419 9.24999 8.99998 9.25C8.58577 9.25001 8.24999 9.58581 8.25 10L9.75 9.99998ZM10.9295 12.8024L10.6619 13.5031L10.9295 12.8024ZM14.795 12.5C15.0712 12.1913 15.0447 11.7172 14.736 11.441C14.4273 11.1648 13.9532 11.1913 13.677 11.5L14.795 12.5ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75V4.25ZM1 7V7.75H4V7V6.25H1V7ZM9 10L8.25 10C8.25004 11.5548 9.20948 12.9483 10.6619 13.5031L10.9295 12.8024L11.1971 12.1018C10.3257 11.7689 9.75002 10.9328 9.75 9.99998L9 10ZM10.9295 12.8024L10.6619 13.5031C12.1143 14.0578 13.7584 13.6588 14.795 12.5L14.236 12L13.677 11.5C13.0551 12.1953 12.0686 12.4347 11.1971 12.1018L10.9295 12.8024ZM14 5V4.25H10V5V5.75H14V5Z" className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1" />
          </svg>
        </span>
      </a>
    </div>
  )
}
