import {
  LanguageList,
  LanguageListWrapper,
} from './custom-tw-components';
import navlink from '@data/navlink';
import Link from 'next/link';

const LanguageSelector = (props) => {
  const blogNav = navlink.blog;
  return (
    <LanguageListWrapper>
      {blogNav.map((tab) => (
        <Link href={tab.link} key={tab.link} id={tab.name} passHref>
          <LanguageList className="languageSelector">
            <a>{tab.name}</a>
          </LanguageList>
        </Link>
      ))}
    </LanguageListWrapper>
  );
};
export default LanguageSelector;
