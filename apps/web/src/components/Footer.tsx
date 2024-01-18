import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';

export const FooterComp = () => {
  return (
    <Footer container>
      <div className="w-full max-w-7xl mx-auto text-center mt-10">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src=""
            alt="LOGO"
            name="LOGO"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="AnakAcara™" year={2024} />
      </div>
    </Footer>
  );
};
