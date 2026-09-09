import './style.css';

const Backdrop = ({ onClick, show }) => {
  return show && <div className="Backdrop" onClick={onClick}></div>;
};

export default Backdrop;
