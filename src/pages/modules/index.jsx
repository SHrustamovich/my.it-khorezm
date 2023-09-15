import { Link } from "react-router-dom";

const Modules = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <p>Modules</p>
      <Link to="/test">Test</Link>
    </div>
  );
};

export default Modules;
