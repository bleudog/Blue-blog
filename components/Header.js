import NavLink from '@components/NavLink';
import styles from '@styles/container.module.scss';
import navlink from '@data/navlink';
import { HeaderContainer } from './custom-tw-components';

const Header = () => {
  const baseNav = navlink.base;

  return (
    <>
      <HeaderContainer className={styles.header}>
        <NavLink link={'/'} value="@rolemadelen" />
        <div className={'flex items-center'}>
          <div className={styles.navLink}>
            {baseNav.map((tab) => (
              <NavLink
                key={tab.link}
                link={tab.link}
                customClass={
                  "font-['AmazonEmberDisplay'] hover:bg-[#1691ff1c] p-2 rounded-lg"
                }
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
