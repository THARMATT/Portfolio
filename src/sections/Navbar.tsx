import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/GI";
function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveVisible, setResponsiveVisible] = useState(false);

  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand">
          <Link href="">
            <Logo />
          </Link>
        </div>
        <div className="nav-responsive-toggle">
          {responsiveVisible ? (
            <CgClose
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setResponsiveVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setResponsiveVisible(true);
              }}
            />
          )}
        </div>
        <div className={`${responsiveVisible && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-items-button">
            <Button
              text="Resume"
              link="https://www.canva.com/design/DAFqYShe06I/QPRNgxnA-wBBlGFDkiEheg/view?utm_content=DAFqYShe06I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
