function Button({ label, onClick }) {
  return (
    <button style={{ marginLeft: "20px" }} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
