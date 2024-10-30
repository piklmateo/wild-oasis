import Logo from "../components/Logo";
import Nav from "../components/Nav";

const SideNavigation = () => {
  return (
    <div className="flex flex-col gap-10 p-7">
      <Logo />
      <Nav />
    </div>
  );
};

export default SideNavigation;
