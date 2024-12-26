
import logo from "../assets/logo.svg";

export const CodeAntLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logo}
        alt="Code Ant AI"
        className="w-10 h-10"
      />
      <span className="font-bold text-2xl">CodeAnt AI</span>
    </div>
  );
}

