import "../css/share/Button.css";

const Button = (props) => {
  const ButtonStyle = (color, backgroundColor, height) => ({
    color: color ? color : "#ffffff",
    height: height ? height : 50,
    backgroundColor: backgroundColor ? backgroundColor : "#66CC66",
  });

  return (
    <div>
      <button
        style={ButtonStyle(
          props.color,
          props.backgroundColor,
          parseInt(props.height)
        )}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
