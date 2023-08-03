import useStore from "../../stores/store";

function Final() {
  const color = useStore((state) => state.color);
  const laces = useStore((state) => state.laces);

  return (
    <>
      <div>BODY COLOR: {color.toUpperCase()}</div>
      <div>LACE COLOR: {laces.toUpperCase()}</div>
      <div onClick={() => console.log("Download")}>DOWNLOAD</div>
      <div onClick={() => console.log("See in AR")}>SEE IN AR</div>
    </>
  );
}

export default Final;
