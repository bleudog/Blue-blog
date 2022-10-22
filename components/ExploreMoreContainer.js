import Link from 'next/link';
import { CategoryList, Category, CategoryHeader } from './custom-tw-components';
const ExploreMoreContainer = ({ title }) => {
  return (
    <>
      <CategoryHeader>{/* <span>{title}</span> */}</CategoryHeader>
      <div className={'category'}>
        <CategoryList>
          <Link key={'data structure'} href={'/blog/ds'} passHref>
            <Category>
              Data Structures
              <span className='newPost'>NEW</span>
            </Category>
          </Link>
          <Link key={'data structure'} href={'/blog/algo'} passHref>
            <Category>Algorithms</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/programming'} passHref>
            <Category>Programming</Category>
          </Link>
          <Link key={'data structure'} href={'/blog/cp'} passHref>
            <Category>
              Competetive Programming
              <span className='newPost'>NEW</span>
            </Category>
          </Link>
          <Link key={'data structure'} href={'/blog/log'} passHref>
            <Category>Log</Category>
          </Link>
          <Link key={'data structure'} href={'/blog'} passHref>
            <Category>View All</Category>
          </Link>
        </CategoryList>
      </div>
    </>
  );
};

export default ExploreMoreContainer;
