import NavLink from "@components/NavLink";
import styles from "@styles/container.module.scss";
import navlink from "@data/navlink";
import { HeaderContainer, MobileNav } from "./custom-tw-components";

const Header = (props) => {
  const baseNav = navlink.base;

  return (
    <>
      <HeaderContainer className={styles.header}>
        <NavLink
          link={"/"}
          customClass={`${styles.navLogo}`}
          value="Blue Eu"
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
    </>
  );
};

export default Header;
