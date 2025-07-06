import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: "website",
    link: "jitendrathakur.com",
    href: "https://jitendrathakur.com",
  },
  {
    social: "email",
    link: "jitendrathakur2478@gmail.com",
    href: "mailto:jitendrathakur2478@gmail.com",
  },
  {
    social: "github",
    link: "Jitendra2407",
    href: "https://github.com/Jitendra2407",
  },
  {
    social: "linkedin",
    link: "jitendrakt",
    href: "https://www.linkedin.com/in/jitendrakt/",
  },
  {
    social: "twitter",
    link: "Jitendra1965958",
    href: "https://x.com/Jitendra1965958",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
