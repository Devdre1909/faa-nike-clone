import LargeActionCard from "../components/Cards/LargeActionCard/LargeActionCard";
import NikeButton from "../components/NikeButton/NikeButton";
import Styles from "../styles/home.module.css";

import Image1 from "../assets/images/0c39bbc1-df34-4f52-b4e2-8aaddd6dc979.webp";
import Image2 from "../assets/images/nike-just-do-it.jpeg";
import SNKRSPricingCard from "../components/Cards/SNKRSPricingCard/SNKRSPricingCard";

function Home() {
  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Nike Fleece</h1>
        <p className={Styles.subtitle}>
          Hoodies, crews, and sets designed for your comfort and
          self-expression.
        </p>
        <p className={Styles.subtitle}>
          Feel your most authentic self in the lates Nike Fleece styles.
        </p>
        <div className={Styles.action}>
          <NikeButton variant="black" text="Shop All Fleece" />
          <NikeButton variant="black" text="Explore Nike Fleece" />
        </div>

        <section className={Styles.section}>
          <h4 className={Styles["section-title"]}>For your workout</h4>
          <div className={Styles["section-grid"]}>
            <LargeActionCard
              image={Image1}
              alt="the right gear to start running"
              title="the right gear to start running"
            />
            <LargeActionCard
              image={Image2}
              alt="the right gear to start running"
              title="Setup your workout"
            />
          </div>
        </section>
      </div>
      <section className={Styles.section} style={{
        marginLeft: "3rem"
      }}>
        <h4 className={Styles["section-title"]}>Latest in SNKRS</h4>
        <div className={Styles["section-wrapper-scrollable"]}>
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
          <SNKRSPricingCard />
        </div>
      </section>
    </>
  );
}

function sum(a, b) {
  return a + b;
}

export default Home;
