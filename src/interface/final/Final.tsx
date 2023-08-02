import useStore from "../../stores/store";

function Final() {
  const color = useStore((state) => state.color);
  const laces = useStore((state) => state.laces);

  return (
    <>
      <div>BODY COLOR: {color.toUpperCase()}</div>
      <div>LACE COLOR: {laces.toUpperCase()}</div>
      <div>DOWNLOAD</div>
      <div>SEE IN AR</div>
    </>
  );
}

export default Final;
