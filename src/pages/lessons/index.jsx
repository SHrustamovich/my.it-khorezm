import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <p>Lessons</p>
      <Link to="/modules">Tests</Link>
    </div>
  );
};

export default Lessons;
