import NavLink from "@components/NavLink";
import styles from "@styles/container.module.scss";
import navlink from "@data/navlink";
import { HeaderContainer, MobileNav } from "./custom-tw-components";

const Header = (props) => {
  const baseNav = navlink.base;

  function toggleMobileMenu(e) {
    document.querySelector("#mobileMenu").classList.toggle("hide");
    document.querySelector("#hamburger").classList.toggle(`${styles.active}`);
  }

  return (
    <>
      <HeaderContainer className={styles.header}>
        <NavLink
          link={"/"}
          customClass={`${styles.navLogo}`}
          value="@bleudog"
        />
        <div className={"flex items-center"}>
          <div className={styles.navLink}>
            {baseNav.map((tab) => (
              <NavLink
                key={tab.link}
                link={tab.link}
                customClass={"hover:text-[#289aff]"}
                value={tab.name}
              />
            ))}
          </div>
        </div>
      </HeaderContainer>

      <MobileNav className={styles.mobileNavLink}>
        <div
          id="hamburger"
          className={`${styles.mobileHamburger} duration-200`}
          onClick={toggleMobileMenu}
        >
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
        </div>
        <div id="mobileMenu" className={`hide ${styles.mobileMenu}`}>
          {baseNav.map((tab) => (
            <NavLink
              key={tab.link}
              link={tab.link}
              customClass={"hover:text-[#289aff]"}
              value={tab.name}
            />
          ))}
        </div>
      </MobileNav>
    </>
  );
};

export default Header;
