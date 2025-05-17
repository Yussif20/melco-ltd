import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../utils/AnimatedSection';
import mailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/phone.png';
import placeIcon from '../assets/icons/place.png';

function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error(
        'EmailJS Public Key is missing. Please check your .env file.'
      );
    }
  }, []);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        setStatus('error');
        console.error(
          'Missing EmailJS Service ID or Template ID in .env file.'
        );
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
        return;
      }

      emailjs
        .send(serviceId, templateId, formData)
        .then(
          () => {
            setStatus('success');
            setFormData({
              from_name: '',
              from_email: '',
              subject: '',
              message: '',
            });
            setTimeout(() => setStatus(null), 5000);
          },
          (error) => {
            setStatus('error');
            console.error('EmailJS error:', error.text || error);
            setTimeout(() => setStatus(null), 5000);
          }
        )
        .finally(() => setIsSubmitting(false));
    },
    [formData]
  );

  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 py-16">
      <meta
        name="description"
        content={t(
          'contact_description',
          'Contact Melco (ميلكو) for safety equipment inquiries. Reach out via email, phone, or our form at masterequiment.com/contact.'
        )}
      />
      <meta
        name="keywords"
        content="Melco, ميلكو, contact us, safety equipment, protective gear"
      />
      <link rel="canonical" href="https://masterequiment.com/contact" />
      <AnimatedSection>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#243e87] dark:text-white text-center mb-12">
            {t('contact_title')}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#243e87] dark:text-[#1F2937] mb-6">
                {t('footer_contact')}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:Ahmed@melco-ltd.com"
                  className="flex items-center"
                >
                  <img
                    src={mailIcon}
                    alt={t('email_icon_alt', 'Email Icon')}
                    className="w-6 h-6 mr-3"
                    loading="lazy"
                  />
                  Ahmed@melco-ltd.com
                </a>
                <a href="tel:+966553653329" className="flex items-center">
                  <img
                    src={phoneIcon}
                    alt={t('phone_icon_alt', 'Phone Icon')}
                    className="w-6 h-6 mr-3"
                    loading="lazy"
                  />
                  +966553653329
                </a>
                <p className="flex items-start">
                  <img
                    src={placeIcon}
                    alt={t('place_icon_alt', 'Location Icon')}
                    className="w-6 h-6 mr-3"
                    loading="lazy"
                  />
                  {t('contact_place')}
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/melcosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                  aria-label={t('linkedin_label', 'Melco LinkedIn Profile')}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#243e87] dark:text-[#1F2937] mb-6">
                {t('contact_form_title')}
              </h2>
              <div onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact_form_name')}
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1F2937] focus:border-[#1F2937] transition-all duration-300"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact_form_email')}
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1F2937] focus:border-[#1F2937] transition-all duration-300"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact_form_subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1F2937] focus:border-[#1F2937] transition-all duration-300"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact_form_message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#1F2937] focus:border-[#1F2937] transition-all duration-300"
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#1F2937] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1F2937]/80 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  aria-label={t('contact_form_submit')}
                >
                  {isSubmitting
                    ? t('contact_form_sending')
                    : t('contact_form_submit')}
                </button>
              </div>
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                  {t('contact_form_success')}
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
                  {t('contact_form_error')}
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default ContactUs;
