export const BUTTON_CLASS = `h-10 w-10 flex items-center justify-center aspect-square rounded-full 
                    bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                    border border-slate-700 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none`;

const Button = ({ icon, text, onClick, className }) => {
  if (!className) {
    className = `flex items-center justify-center 
                bg-slate-900 hover:bg-slate-800 focus:bg-slate-800
                border border-slate-800 hover:border-slate-700 focus:border-slate-700
                focus:outline-none focus:ring-none
                rounded-xl
                ${icon === true && "h-10 w-10 aspect-square rounded-full"}`;
  }
  return (
    <button className={className} onClick={onClick}>
      {icon && <i className="material-icons">{icon}</i>}
      {text}
    </button>
  );
};

export default Button;
