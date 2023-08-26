//components module
import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Definition from "../module/Definition";
import Instruction from "../module/Instruction";
import Guide from "../module/Guide";
import Restrictions from "../module/Restrictions";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;