import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="py-2 border-b">
      <div className="container flex justify-between items-center">
        <div className="font-bold text-xl">Brand</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
