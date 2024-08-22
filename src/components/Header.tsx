import FilterBar from "./FilterBar";

function Header() {
  return (
    <>
      <div className="w-full h-40 bg-center bg-cover bg-userHeaderBgMobile md:bg-userHeaderBgDesktop bg-userDesaturatedDarkCyan" />
      <FilterBar />
    </>
  );
}

export default Header;
