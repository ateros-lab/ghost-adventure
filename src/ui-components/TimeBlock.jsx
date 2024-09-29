function TimeBlock() {
  return (
    <div
      id="time-block"
      style={{
        position: "absolute",
        top: "2vh",
        left: "2vw",
        color: "rgb(203, 255, 158)",
        opacity: 1,
      }}
    >
      <p
        id="time-info"
        style={{
          margin: 0,
          fontSize: "5vh",
          fontFamily: '"Itim", cursive',
          fontWeight: 400,
          fontStyle: "normal",
        }} 
      >05:00</p>
    </div>
  );
}

export default TimeBlock;