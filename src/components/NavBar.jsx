import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className='h-[80px] w-full bg-slate-900 text-white flex items-center justify-between px-35 border border-b-3 border-b-[#c84de5]'>
      <div className="font-bold text-2xl">KRYZOX</div>
        <ul className="list-none h-auto w-auto flex gap-15 bg font-semibold">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Games</Link></li>
            <li><Link to="#">Features</Link></li>
            <li><Link to="#">Earnings</Link></li>
            <li><Link to="#">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
