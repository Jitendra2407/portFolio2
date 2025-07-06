import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jitendra Kumar Thakur</h1>
        <div className={styles.subtitle}>
          Full Stack Developer | CSE Undergrad at IIIT Una
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hi! I’m a software engineer from Madhubani, Bihar, currently
              pursuing B.Tech in Computer Science and Engineering at IIIT Una.
            </p>
            <p className={styles.paragraph}>
              I enjoy building full-stack web applications using modern
              technologies like React, Next.js, and Node.js. My interests lie in
              creating scalable, user-friendly products and continually
              improving my skills in both frontend and backend development.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I worked as a{" "}
              <span className={styles.highlight}>
                Full Stack Developer Intern
              </span>{" "}
              at{" "}
              <span className={styles.highlight}>
                Fluencer Digital Ventures Pvt. Ltd.
              </span>
              , where I:
            </p>
            <ul className={styles.paragraph}>
              <li>Built responsive UIs using React and Tailwind CSS</li>
              <li>Developed REST APIs with Node.js and Express.js</li>
              <li>Integrated MongoDB for data management</li>
              <li>Implemented authentication using JWT</li>
              <li>Performed web scraping with Puppeteer and Cheerio</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <p className={styles.paragraph}>
              <strong>Languages:</strong> JavaScript, TypeScript, C/C++, HTML,
              CSS
              <br />
              <strong>Frameworks & Libraries:</strong> React.js, Next.js,
              Express.js, Tailwind CSS, Bootstrap
              <br />
              <strong>Databases:</strong> MongoDB, MySQL
              <br />
              <strong>Tools:</strong> Git, VS Code, Figma
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Achievements</h2>
            <p className={styles.paragraph}>
              • Solved 600+ coding problems on LeetCode and GeeksforGeeks
              <br />
              • LeetCode Rating: 1588
              <br />• CodeChef 2-Star (Highest Rating: 1437)
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of coding, I enjoy playing badminton, listening to music,
              and occasionally competing in coding contests to sharpen my
              problem-solving skills.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
