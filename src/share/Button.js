import "../css/share/Button.css";

const Button = (props) => {
  const ButtonStyle = (color, backgroundColor, height, width) => ({
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 700,
    textAline: "center",
    borderRadius: "0.5rem",
    border: "none",
    marginTop: 20,
    marginLeft: 20,
    color: color ? color : "#ffffff",
    height: height ? height : 50,
    width: width ? width : 100,
    backgroundColor: backgroundColor ? backgroundColor : "#eb6100",
  });

  return (
    <>
      <button
        style={ButtonStyle(
          props.color,
          props.backgroundColor,
          parseInt(props.height),
          parseInt(props.width)
        )}
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
