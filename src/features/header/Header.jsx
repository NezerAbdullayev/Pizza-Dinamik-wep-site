function Header({children}) {
  return (
    <header className="fixed top-0 z-20 bg-white shadow w-screen" >
      {children}
    </header>
  );
}

export default Header;
