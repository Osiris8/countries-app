import Dark from "./Dark";
function Navigation() {
  return (
    <nav className="flex sm:justify-between">
      <a
        href="#"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Where in the World
      </a>
      <Dark />
    </nav>
  );
}
export default Navigation;
