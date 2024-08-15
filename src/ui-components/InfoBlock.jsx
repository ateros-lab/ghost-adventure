function InfoBlock() {
  return (
    <div
      id="info-block"
      style={{
        position: "absolute",
        bottom: "10vh",
        left: "25vw",
        width: "50vw",
        height: "10vh",
        padding: "2vh",
        backgroundColor: "rgba(203, 255, 158, 0.2)",
        color: "rgb(203, 255, 158)",
        borderRadius: "10px",
        border: "2px solid rgb(203, 255, 158)",
        opacity: 0,
      }}
    >
      <p
        id="info-message"
        style={{
          margin: 0,
          fontSize: "3.5vh",
          fontFamily: '"Itim", cursive',
          fontWeight: 400,
          fontStyle: "normal",
        }} 
      ></p>
    </div>
  );
}

export default InfoBlock;