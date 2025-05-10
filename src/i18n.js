import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav_about: 'About Us',
      nav_products: 'Our Products',
      nav_contact: 'Contact Us',
      // Hero Section
      hero_title: 'Safety First with Melco Master Equipment',
      hero_subtext: 'Premium personal protective equipment for ultimate workplace safety.',
      hero_button: 'Explore Our Products',
      // About Section
      about_title: 'About Melco Master Equipment',
      mission_title: 'Our Mission',
      mission_text: 'We strive to meet our clients’ needs by providing high-quality products and services driven by innovation and efficiency, while building long-term business relationships founded on trust and commitment enhancing our market position and supporting our partners’ growth and success.',
      vision_title: 'Our Vision',
      vision_text: 'To be the first choice and trusted destination in the commercial sector by delivering innovative products and services that enhance business efficiency and contribute to sustainable economic growth in the Kingdom of Saudi Arabia.',
      values_title: 'Our Values',
      values_text: 'Integrity, Quality, Innovation, and Customer Satisfaction.',
      // Products Section
      products_title: 'Personal Protective Equipment (PPE)',
      head_protection: 'Head Protection',
      head_protection_desc: 'Helmets and hard hats for maximum head safety.',
      eye_face_protection: 'Eye and Face Protection',
      eye_face_protection_desc: 'Safety glasses and face shields for clear vision and protection.',
      hearing_protection: 'Hearing Protection',
      hearing_protection_desc: 'Earmuffs and earplugs to safeguard against noise.',
      respiratory_protection: 'Respiratory Protection',
      respiratory_protection_desc: 'Masks and respirators for clean and safe breathing.',
      hand_protection: 'Hand Protection',
      hand_protection_desc: 'Gloves designed for durability and dexterity.',
      body_protection: 'Body Protection',
      body_protection_desc: 'Protective clothing for full-body safety.',
      foot_protection: 'Foot Protection',
      foot_protection_desc: 'Safety boots and shoes for secure footing.',
      gas_detector: 'Gas Detector',
      gas_detector_desc: 'Devices to detect hazardous gases in the environment.',
      more_button: 'More',
      // Contact Section
      contact_title: 'Contact Us',
      footer_contact: 'Get in Touch',
      contact_place: 'Riyadh, Saudi Arabia',
      contact_form_title: 'Send Us a Message',
      contact_form_name: 'Your Name',
      contact_form_email: 'Your Email',
      contact_form_subject: 'Subject',
      contact_form_message: 'Your Message',
      contact_form_submit: 'Send Message',
      contact_form_sending: 'Sending...',
      contact_form_success: 'Message sent successfully!',
      contact_form_error: 'Failed to send message. Please try again.',
      // Footer
      copyright: '© 2025 All rights reserved.',
    },
  },
  ar: {
    translation: {
      // Navigation
      nav_about: 'نبذة عنا',
      nav_products: 'منتجاتنا',
      nav_contact: 'تواصل معنا',
      // Hero Section
      hero_title: 'السلامة أولاً مع ميلكو ماستر للمعدات',
      hero_subtext: 'معدات حماية شخصية ممتازة لضمان السلامة القصوى في مكان العمل.',
      hero_button: 'استكشف منتجاتنا',
      // About Section
      about_title: 'عن شركة ميلكو ماستر للمعدات',
      mission_title: 'مهمتنا',
      mission_text: 'نسعى لتلبية احتياجات عملائنا من خلال تقديم منتجات وخدمات عالية الجودة مدفوعة بالابتكار والكفاءة، مع بناء علاقات تجارية طويلة الأمد قائمة على الثقة والالتزام، مما يعزز مكانتنا في السوق ويدعم نمو ونجاح شركائنا.',
      vision_title: 'رؤيتنا',
      vision_text: 'أن نكون الخيار الأول والوجهة الموثوقة في القطاع التجاري من خلال تقديم منتجات وخدمات مبتكرة تعزز كفاءة الأعمال وتساهم في النمو الاقتصادي المستدام في المملكة العربية السعودية.',
      values_title: 'قيمنا',
      values_text: 'النزاهة، الجودة، الابتكار، ورضا العملاء.',
      // Products Section
      products_title: 'معدات الحماية الشخصية (PPE)',
      head_protection: 'حماية الرأس',
      head_protection_desc: 'خوذات وقبعات صلبة لأقصى درجات حماية الرأس.',
      eye_face_protection: 'حماية العين والوجه',
      eye_face_protection_desc: 'نظارات السلامة ودروع الوجه لرؤية واضحة وحماية.',
      hearing_protection: 'حماية السمع',
      hearing_protection_desc: 'واقيات الأذن وسدادات الأذن لحماية ضد الضوضاء.',
      respiratory_protection: 'حماية الجهاز التنفسي',
      respiratory_protection_desc: 'أقنعة وأجهزة تنفس لتنفس نظيف وآمن.',
      hand_protection: 'حماية اليدين',
      hand_protection_desc: 'قفازات مصممة للمتانة والبراعة.',
      body_protection: 'حماية الجسم',
      body_protection_desc: 'ملابس واقية لسلامة الجسم بالكامل.',
      foot_protection: 'حماية القدمين',
      foot_protection_desc: 'أحذية وجزمات السلامة لثبات آمن.',
      gas_detector: 'كاشف الغاز',
      gas_detector_desc: 'أجهزة للكشف عن الغازات الخطرة في البيئة.',
      more_button: 'المزيد',
      // Contact Section
      contact_title: 'تواصل معنا',
      footer_contact: 'تواصلوا معنا',
      contact_place: 'الرياض، المملكة العربية السعودية',
      contact_form_title: 'أرسل لنا رسالة',
      contact_form_name: 'اسمك',
      contact_form_email: 'بريدك الإلكتروني',
      contact_form_subject: 'الموضوع',
      contact_form_message: 'رسالتك',
      contact_form_submit: 'إرسال الرسالة',
      contact_form_sending: 'جارٍ الإرسال...',
      contact_form_success: 'تم إرسال الرسالة بنجاح!',
      contact_form_error: 'فشل إرسال الرسالة. حاول مرة أخرى.',
      // Footer
      copyright: '© 2025 جميع الحقوق محفوظة',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;