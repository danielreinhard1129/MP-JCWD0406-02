import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

export const NavbarComp = () => {
  return (
    <div className="container w-full fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50">
      <Navbar className="bg-transparent font-semibold flex justify-between ">
        <NavbarBrand href="/">
          <div className="self-center text-[50px] font-bold ">LOGO</div>
        </NavbarBrand>
        <div className="flex py-2 px-10 gap-10 items-center rounded-full lg:shadow-2xl sm:bg-transparent md:bg-white lg:bg-white h-14 lg:h-16">
          <div className="flex md:order-2">
            <Button className="w-auto h-8">Login</Button>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Discover
            </NavbarLink>
            <NavbarLink href="#">Create Event</NavbarLink>
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
};
