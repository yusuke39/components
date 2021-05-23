import "../css/share/Button.css";

const Button = (props) => {
  const ButtonStyle = (backgroundColor) => ({
    color: "#ffffff",
    backgroundColor: backgroundColor ? backgroundColor : "#800000",
  });

  return (
    <div>
      <button style={ButtonStyle(props.backgroundColor)}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
