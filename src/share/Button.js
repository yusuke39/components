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
    height: 50,
    width: 100,
  },
};

export default Button;
