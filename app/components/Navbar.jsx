const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
        <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <img
              src="/assets/svg/menu.svg"
              className="lg:hidden w-5 h-5"
              alt=""
            />
            <a href="./index.html">
              <img src="/assets/lws-logo-black.svg" className="h-10" alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
          <img
            src="/assets/svg/avatar.svg"
            className="hidden lg:block w-[18px] h-[18px]"
            alt="login acount avatar"
          />
          <img
            src="/assets/svg/shopping-Cart.svg"
            className="block w-5 h-5"
            alt="shopping cart icon"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
