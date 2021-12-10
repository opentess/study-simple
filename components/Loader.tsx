interface Show {
  show: boolean;
}

export const Loader: React.FC<Show> = ({ show }) => {
  return show ? <div className="loader"></div> : null;
};

export default Loader;
