import Image from 'next/image'

import styles from './page.module.scss'

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.home_page}>
        <nav id="site-nav" className={styles.nav_bar}>
          <ul className={styles.menu_primary}>
            <li className={styles.logo} id="menu-item-logo">
              <a title="home" href="">DubrAn</a>
            </li>
            <li id="menu-item-home">
              <a title="home" href="#site-nav">Home</a>
            </li>
            <li id="menu-item-about">
              <a title="about" href="#about">About</a>
            </li>
            <li id="menu-item-projects">
              <a title="projects" href="#projects">Projects</a>
            </li>
            <li id="menu-item-contact">
              <a title="contact" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.name_avatar}>

        <h1>Nazar Diachuk</h1>
        <h2>UI/UX designer</h2>
        <p>Keep learning</p>
      </div>
      <div className={styles.avatar}>
       <Image width="250" height="250" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="Avatar image" />
      </div>
      <section className={styles.main}>
        <div className={styles.about_me}>
          <h2 id="about">ABOUT</h2>
          <div className={styles.text_about_me}>
            <p>I am a skilled UX/UI designer with a strong background in creating user-centric interfaces. With expertise in user research, wireframing, prototyping, and visual design, I excel at transforming complex concepts into intuitive and visually appealing designs. My ability to empathize with users enables me to deliver seamless user experiences that drive engagement and satisfaction. Proficient in industry-standard design tools such as Sketch, Adobe XD, and Figma, I am dedicated to delivering high-quality designs that meet business objectives. With a keen eye for detail and a passion for creating meaningful interactions, I strive to enhance user interactions and elevate digital experiences.</p>
          </div>
        </div>
        <div className={styles.projects}>
          <h2 id="projects">PROJECTS</h2>
        </div>
        <div className={styles.done_projects}>
          <p className={styles.done_projects1}><a href="https://www.figma.com/file/abmm0OhbNMTLtUE9kqppkf/resume?type=design&node-id=1%3A2&t=Z77jAdsHuxsbLIZ5-1">Resume</a></p>

          <p className={styles.done_projects2}><a href="https://www.figma.com/file/44AwoDHvmQJ8CW4vvTyHC1/Untitled?type=design&node-id=0%3A1&t=LdjY0AllaHJPqqVw-1">DubrAn</a></p>
        </div>
        <div className={styles.contacts}>
          <h2 id="contact">Contact</h2>
        </div>
        <div className={styles.network}>
          <p>
            My number: +2351939511523
          </p>
          <p>
            My telegram: @dkn3r
          </p><p>
            My instagram: dkn3r
          </p>
        </div>
      </section>


    </header>







  )
}
