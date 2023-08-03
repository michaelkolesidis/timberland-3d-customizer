import useStore from "../../stores/store";

function Home() {
  const setScreen = useStore((state) => state.setScreen);

  return (
    <>
      <div onClick={() => setScreen("body")}>CUSTOMIZE</div>
    </>
  );
}

export default Home;
