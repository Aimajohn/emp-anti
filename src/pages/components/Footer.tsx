import logo from "/icon-just-books.png";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="justify-between py-2 px-10 flex items-center absolute bottom-0 w-full h-20 bg-purple-900">
      <div className="flex justify-center flex-col">
        <img className="object-contain h-10" src={logo} alt="Aimajoke logo" />
        <span className="text-xs bold text-zinc-300  block">Hecho por John</span>
      </div>

      {/* <img className="h-full object-contain py-3" src={logoAyoon} alt="" /> */}
      <h1 className="text-zinc-300 text-xs text-right">Grupo Emprendimiento #2<br/>Plan Anti-Procrastinación</h1>
    </div>
  );
}

export default Footer;
