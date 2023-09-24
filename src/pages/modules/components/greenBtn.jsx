import { Link } from "react-router-dom";

function GreenBtn({text, link}) {
  return (
    <Link to={link}>
      <button className="green-btn">{text}</button>
    </Link>
  );
}

export default GreenBtn;
