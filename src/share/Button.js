import "../css/share/Button.css";

const Button = (props) => {
  return (
    <div>
      <button style={buttonStyle.button1}>{props.buttonName}</button>
    </div>
  );
};

var buttonStyle = {
  button1: {
    color: "#ffffff",
    backgroundColor: "blue",
  },
};

export default Button;
