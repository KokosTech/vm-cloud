import { Link } from "react-router-dom";

const ErrorContainer = ({ big, small }) => (
  <Link className="flex items-center justify-center" to="/">
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center space-x-2">
      {big && <h1 className="font-black text-8xl">{big}</h1>}
      {small && <p className="font-bold text-2xl">{small}</p>}
    </div>
  </Link>
);

export default ErrorContainer;
