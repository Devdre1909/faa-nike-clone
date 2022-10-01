function Home() {
  return (
    <div>
      <h1 style={style.title}>
        Introducing <br />
        Nike Forward
      </h1>
    </div>
  );
}

const style = {
  title: {
    fontFamily: "Nike Futura",
    textTransform: "uppercase",
    fontSize: "72px",
    lineHeight: "60px",
    textAlign: "center",
    margin: "0 auto",
  },
};

export default Home;
