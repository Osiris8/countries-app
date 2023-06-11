import { useState } from "react";

function Dark() {
  const [nodarkmode, setDarkmode] = useState(false);

  return (
    <a
      href="#"
      className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
    >
      <i className="fa fa-moon-o" aria-hidden="true"></i>
      <span className="ml-3">Dark mode</span>
    </a>
  );
}
export default Dark;
