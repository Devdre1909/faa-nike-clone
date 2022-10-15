import LargeActionCard from "../components/Cards/LargeActionCard/LargeActionCard";
import NikeButton from "../components/NikeButton/NikeButton";
import Styles from "../styles/home.module.css";

import Image1 from "../assets/images/0c39bbc1-df34-4f52-b4e2-8aaddd6dc979.webp";
import Image2 from "../assets/images/nike-just-do-it.jpeg";
import SNKRSPricingCard from "../components/Cards/SNKRSPricingCard/SNKRSPricingCard";
import { Link } from "react-router-dom";

const product = {
  id: 0,
  name: "Nike Air Force 1 '07 LV8",
  price: "$130",
  img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/017c363e-8f3f-4f1b-9f8f-65eec011a12d/air-force-1-07-lv8-mens-shoes-NCHHsv.png",
  category: "Men's Shoes",
  tag: "Just In",
};

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
          <NikeButton variant="black">
            <Link to="/shop">Shop Nike Fleece</Link>
          </NikeButton>
          <NikeButton variant="black">Explore Nike Fleece</NikeButton>
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
      <section
        className={Styles.section}
        style={{
          marginLeft: "3rem",
        }}
      >
        <h4 className={Styles["section-title"]}>Latest in SNKRS</h4>
        <div className={Styles["section-wrapper-scrollable"]}>
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
          <SNKRSPricingCard product={product} />
        </div>
      </section>
    </>
  );
}

function sum(a, b) {
  return a + b;
}

export default Home;
