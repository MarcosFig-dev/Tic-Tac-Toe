import { useNavigate } from "react-router-dom";

const NavButtons = ({ text, name, to }) => {
  const navigate = useNavigate();

  return (
    <button className={name} onClick={() => navigate(to)}>
      {text}
    </button>
  );
};

export default NavButtons;