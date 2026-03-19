'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';
import { ArrowRight, MapPin, Share2, Mail, Phone } from 'lucide-react';
import { KIIAKO_ADDRESS, KIIAKO_EMAIL, KIIAKO_PHONE } from '@/lib/utls';



export default function ContactPage() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });


  const handleShare = async () => {
    const url = 'https://maps.google.com/?q=6.185414,1.1327135';
    const text = `Kiiako — ${KIIAKO_ADDRESS}`;
    if (navigator.share) {
      await navigator.share({ title: 'Kiiako', text, url });
    } else {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/public/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           "x-api-key": "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: t('contactPage.form.messages.success') });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message || t('contactPage.form.messages.error') });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: t('contactPage.form.messages.connectionError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="bg-background-3 dark:bg-background-7">
      <Header />
      <main>
        {/* Contact Section */}
        <section
          className="relative pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 overflow-hidden"
          aria-label="Contact Information and Form"
        >
          {/* Background Halos */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="main-container">
            <div className="space-y-[70px]">
              {/* Heading */}
              <div className="max-w-[680px] mx-auto text-center space-y-6 relative z-10">
                <FadeIn delay={0.2}>
                  <span className="cb-badge mb-4">
                    {t('contactPage.hero.badge')}
                  </span>
                </FadeIn>
                <div className="space-y-4">
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-2 text-secondary dark:text-white">
                      {t('contactPage.hero.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-lg text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('contactPage.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>
              </div>

              <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
                {/* Contact Info Cards */}
                <FadeIn delay={0.4}>
                  <div className="flex flex-col gap-8 md:flex-row lg:flex-col shrink-0">
                    {/* Address */}
                    <div className="group relative overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 rounded-[32px] p-8 w-full md:max-w-[371px] text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                      <div className="pointer-events-none absolute -top-10 -left-10 size-40 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/30 transition-colors" />
                      <div className="relative z-10 space-y-6">
                        <div className="size-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                          <MapPin className="size-8 text-primary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <p className="text-xl  text-secondary dark:text-accent">{t('contactPage.cards.address.title')}</p>
                          <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                            {KIIAKO_ADDRESS}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group relative overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 rounded-[32px] p-8 w-full md:max-w-[371px] text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                      <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20 transition-colors" />
                      <div className="relative z-10 space-y-6">
                        <div className="size-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                          <Mail className="size-8 text-primary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <p className="text-xl text-secondary dark:text-white">{t('contactPage.cards.email.title')}</p>
                          <p className="text-secondary/60 dark:text-accent/60 text-sm">
                            <a href={`mailto:${KIIAKO_EMAIL}`} className="hover:text-primary-500 transition-colors">
                              {KIIAKO_EMAIL}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group relative overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 rounded-[32px] p-8 w-full md:max-w-[371px] text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                      <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-colors" />
                      <div className="relative z-10 space-y-6">
                        <div className="size-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                          <Phone className="size-8 text-primary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <p className="text-xl text-secondary dark:text-accent">{t('contactPage.cards.phone.title')}</p>
                          <p className="text-secondary/60 dark:text-accent/60 text-sm">
                            <a href={`tel:${KIIAKO_PHONE.replace(/\s/g, '')}`} className="hover:text-primary-500 transition-colors">{KIIAKO_PHONE}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Contact Form */}
                <FadeIn delay={0.3}>
                  <div className="max-w-[847px] w-full mx-auto bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200 rounded-[48px] p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {submitStatus.type && (
                        <div className={`p-4 rounded-xl text-center font-medium ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                          {submitStatus.message}
                        </div>
                      )}
                      {/* Name and Phone Number */}

                      <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                        {/* Name */}
                        <div className="space-y-2 lg:max-w-[364px] w-full">
                          <label
                            htmlFor="fullname"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            {t('contactPage.form.labels.name')}
                          </label>
                          <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder={t('contactPage.form.placeholders.name')}
                            required
                            autoComplete="name"
                            className="w-full px-6 py-4 h-14 rounded-full border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-white/[0.02] text-secondary dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-primary-500 transition-all font-medium"
                          />
                        </div>

                        {/* Number */}
                        <div className="space-y-2 max-w-[364px] w-full ">
                          <label
                            htmlFor="number"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            {t('contactPage.form.labels.number')}
                          </label>
                          <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder={t('contactPage.form.placeholders.number')}
                            required
                            autoComplete="tel"
                            className="w-full px-6 py-4 h-14 rounded-full border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-white/[0.02] text-secondary dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-primary-500 transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            {t('contactPage.form.labels.email')}
                          </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder={t('contactPage.form.placeholders.email')}
                          required
                          autoComplete="email"
                          className="w-full px-6 py-4 h-14 rounded-full border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-white/[0.02] text-secondary dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-primary-500 transition-all font-medium"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            {t('contactPage.form.labels.subject')}
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder={t('contactPage.form.placeholders.subject')}
                            required
                            className="w-full px-6 py-4 h-14 rounded-full border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-white/[0.02] text-secondary dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-primary-500 transition-all font-medium"
                          />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                            className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                          >
                            {t('contactPage.form.labels.message')}
                          </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder={t('contactPage.form.placeholders.message')}
                          required
                          className="w-full px-6 py-4 rounded-3xl border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-white/[0.02] text-secondary dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-primary-500 transition-all font-medium resize-none"
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
                          <Trans
                            i18nKey="contactPage.form.labels.terms"
                            components={{
                              1: <a href="#" className="text-primary-500 underline text-tagline-3" />
                            }}
                          />
                        </label>
                      </fieldset>

                      {/* Submit Button */}
                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-primary-500 hover:bg-primary-600 text-white rounded-full h-10 px-6 w-fit flex items-center justify-center gap-3 group transition-all"
                        >
                          {isSubmitting ? (
                            <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <span className="first-letter:uppercase">{t('contactPage.form.button')}</span>
                              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
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
                <div id="map" className="relative w-full min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[566px]">
                  <iframe src="https://maps.google.com/maps?q=6.185414,1.1327135&z=15&output=embed" className="w-full h-full min-h-[300px] lg:min-h-[566px]" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                  {/* Custom popup overlay */}
                  {showPopup && (
                    <div className="absolute bottom-6 left-6 z-10 w-[370px] bg-white dark:bg-background-6 rounded-2xl shadow-xl overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="size-7 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-500">
                              <MapPin size={14}  className='text-black' />
                            </span>
                            <p className="font-semibold text-sm text-secondary dark:text-accent">Kiiako</p>
                          </div>
                        </div>
                        <p className="text-xs text-secondary/60 dark:text-accent/60 leading-relaxed mb-3">{KIIAKO_ADDRESS}</p>
                        <div className="flex justify-between gap-3">
                          <a
                            href="https://maps.google.com/?q=6.185414,1.1327135"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium hover:underline flex items-center gap-1"
                          >
                            {t('contactPage.map.open')}  <ArrowRight size={14}  className='text-black' />
                          </a>
                          <button
                            onClick={handleShare}
                            className="text-xs font-medium text-accent/70 transition-colors cursor-pointer flex items-center gap-1"
                            aria-label={t('contactPage.map.share')}
                          >
                            <Share2 size={12} />
                            {copied ? t('contactPage.map.copied') : t('contactPage.map.share')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
