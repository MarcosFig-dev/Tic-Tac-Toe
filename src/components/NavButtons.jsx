import { useNavigate } from "react-router-dom";
import "./buttons.css";

const NavButtons = ({ text, name, to }) => {
  const navigate = useNavigate();

  return (
    <button 
    className="navbutton"
    onClick={() => navigate(to)}>
    {text}
    </button>
  );
};

export default NavButtons;