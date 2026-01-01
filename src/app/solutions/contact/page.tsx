'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ContactPage() {
  return (
    <div className="bg-background-3 dark:bg-background-7">
      <Header />
      <main>
        {/* Contact Section */}
        <section
          className="pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32"
          aria-label="Contact Information and Form"
        >
          <div className="main-container">
            <div className="space-y-[70px]">
              {/* Heading */}
              <div className="max-w-[680px] mx-auto text-center space-y-3">
                <FadeIn delay={0.2}>
                  <h2>Reach out to our support team for help.</h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p>
                    Whether you have a question, need technical assistance, or just want some guidance, our
                    support team is here to help. We&apos;re available around the clock to provide quick and
                    friendly support.
                  </p>
                </FadeIn>
              </div>

              <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
                {/* Contact Info Cards */}
                <FadeIn delay={0.4}>
                  <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
                    {/* Contact Info One */}
                    <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
                      {/* bg overlay */}
                      <figure className="absolute select-none pointer-events-none size-[350px] overflow-hidden top-[-187px] left-[174px] -rotate-[78deg]">
                        <img
                          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=400&fit=crop&auto=format&q=80&blur=100"
                          alt="Decorative gradient overlay"
                          className="size-full object-cover"
                        />
                      </figure>
                      <figure className="size-10 overflow-hidden mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M33.3333 16.6667C33.3333 28.3333 20 36.6667 20 36.6667C20 36.6667 6.66667 28.3333 6.66667 16.6667C6.66667 12.6885 8.24583 8.87301 11.0589 6.05991C13.872 3.24682 17.6875 1.66667 21.6667 1.66667H18.3333C22.3125 1.66667 26.128 3.24682 28.9411 6.05991C31.7542 8.87301 33.3333 12.6885 33.3333 16.6667Z" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="20" cy="16.6667" r="5" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </figure>

                      <div className="space-y-2.5">
                        <p className="text-heading-6 text-accent">Our Address</p>
                        <p className="text-accent/60">2464 Royal Ln. Mesa, New Jersey 45463</p>
                      </div>
                    </div>

                    {/* Contact Info Two */}
                    <div className="card-item bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
                      {/* bg overlay */}
                      <figure className="absolute size-[350px] select-none pointer-events-none overflow-hidden top-[-206px] left-[-36px] rotate-[62deg]">
                        <img
                          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop&auto=format&q=80&blur=100"
                          alt="Decorative gradient overlay"
                          className="size-full object-cover"
                        />
                      </figure>

                      <div className="space-y-6">
                        <figure className="size-10 overflow-hidden mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="33.3333" height="26.6667" x="3.33333" y="6.66667" rx="3.33333" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M36.6667 11.6667L21.6167 21.1667C21.1606 21.4563 20.6365 21.6089 20.1016 21.6089C19.5667 21.6089 19.0426 21.4563 18.5866 21.1667L3.33333 11.6667" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </figure>

                        <div className="space-y-2.5">
                          <p className="text-heading-6 text-accent">Email Us</p>
                          <p className="text-accent/60">
                            <a href="mailto:hello@nextsaaS.com">hello@nextsaaS.com</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info Three */}
                    <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
                      {/* bg overlay */}
                      <figure className="size-[450px] top-[-264px] left-[-255px] absolute select-none pointer-events-none">
                        <img
                          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop&auto=format&q=80&blur=100"
                          alt="Decorative gradient overlay"
                        />
                      </figure>

                      <div className="space-y-6">
                        <figure className="size-10 overflow-hidden mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M36.6667 28.2V32.8667C36.6718 33.3352 36.5816 33.7998 36.4019 34.2311C36.2222 34.6624 35.957 35.0511 35.6228 35.3731C35.2887 35.6951 34.8931 35.9433 34.461 36.1024C34.0288 36.2616 33.5697 36.3283 33.1133 36.2983C28.2583 35.7746 23.6019 34.1373 19.5 31.5333C15.7079 29.1939 12.4728 26.0254 10.0167 22.2667C7.37833 18.1422 5.72967 13.4571 5.21667 8.57667C5.18684 8.12292 5.25288 7.66653 5.41076 7.2368C5.56864 6.80706 5.81507 6.41319 6.13393 6.07989C6.4528 5.74659 6.83781 5.48084 7.2651 5.29936C7.69238 5.11788 8.15278 5.02488 8.61833 5.02667H13.3517C14.1543 5.01817 14.9334 5.28931 15.5566 5.79259C16.1797 6.29587 16.6078 6.99909 16.7683 7.78C17.0697 9.33778 17.5568 10.8545 18.22 12.3033C18.4437 12.8526 18.505 13.4554 18.3967 14.0398C18.2884 14.6242 18.0151 15.1656 17.6083 15.6033L15.5167 17.6667C17.7099 21.6134 20.9199 24.7734 24.9167 26.9333L27.0083 24.8667C27.4503 24.4629 27.9974 24.1915 28.588 24.0839C29.1787 23.9762 29.7879 24.0369 30.3433 24.2583C31.8061 24.9157 33.337 25.3983 34.9083 25.6967C35.7017 25.8586 36.4147 26.295 36.9205 26.9308C37.4262 27.5667 37.6931 28.3628 37.6733 29.1767L36.6667 28.2Z" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </figure>

                        <div className="space-y-2.5">
                          <p className="text-heading-6 text-accent">Call Us</p>
                          <p className="text-accent/60">
                            <a href="tel:+391035256845933">+391 (0)35 2568 4593</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Contact Form */}
                <FadeIn delay={0.3}>
                  <div className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11">
                    <form action="#" method="POST" className="space-y-8">
                      {/* Name and Phone Number */}
                      <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                        {/* Name */}
                        <div className="space-y-2 lg:max-w-[364px] w-full">
                          <label
                            htmlFor="fullname"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            Your name
                          </label>
                          <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your name"
                            required
                            autoComplete="name"
                            className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                          />
                        </div>

                        {/* Number */}
                        <div className="space-y-2 max-w-[364px] w-full">
                          <label
                            htmlFor="number"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            Your number
                          </label>
                          <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Enter your number"
                            required
                            autoComplete="tel"
                            className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          autoComplete="email"
                          className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Enter your subject"
                          required
                          className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                        >
                          Write message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={7}
                          placeholder="Enter your messages"
                          required
                          className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                        ></textarea>
                      </div>

                      {/* Terms Checkbox */}
                      <fieldset className="flex items-center gap-2 mb-4">
                        <label htmlFor="terms" className="flex items-center gap-x-3">
                          <input id="terms" type="checkbox" className="sr-only peer" required />
                          <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer"></span>
                        </label>
                        <label
                          htmlFor="terms"
                          className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60"
                        >
                          I agree with the{' '}
                          <a href="#" className="text-primary-500 underline text-tagline-3">
                            terms and conditions
                          </a>
                        </label>
                      </fieldset>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="btn btn-md btn-secondary w-full hover:btn-primary dark:btn-accent before:content-none first-letter:uppercase"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Map */}
        <section
          className="md:pt-[80px] lg:pt-[100px] pb-[100px] md:pb-[150px] lg:pb-[200px]"
          aria-label="Location Map"
        >
          <div className="main-container">
            <FadeIn delay={0.1}>
              <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5">
                <div id="map" className="w-full min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[566px] bg-background-3 dark:bg-background-7 flex items-center justify-center">
                  <p className="text-secondary/60 dark:text-accent/60">Map placeholder</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
