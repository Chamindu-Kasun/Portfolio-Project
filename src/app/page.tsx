import Image from "next/image";
import styles from "./page.module.css";
import { NavBar, Header, Education,Experience, Achievements, Research, Projects, Contact, Footer, About } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <Header/>
      <About/>
      <Education/>
      <Experience/>
      <Research/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}
