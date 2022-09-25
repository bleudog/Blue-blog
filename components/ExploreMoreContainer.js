import Link from 'next/link';
import {
  CategoryList,
  Category,
  CategoryHeader,
} from './custom-tw-components';
const ExploreMoreContainer = ({ title }) => {
  return (
    <>
      <CategoryHeader>{/* <span>{title}</span> */}</CategoryHeader>
      <div className={'category'}>
        <CategoryList>
          <Link key={'data structure'} href={'/blog/ds'}>
            <Category>Data Structures</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/algo'}>
            <Category>Algorithms</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/programming'}>
            <Category>Programming</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/cp'}>
            <Category>Competetive Programming</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/log'}>
            <Category>Log</Category>
          </Link>
        </CategoryList>
      </div>
    </>
  );
};

export default ExploreMoreContainer;
