import NavLink from '@components/NavLink';
import Date from '@components/Date';
import Link from 'next/link';
import { Title } from './custom-tw-components';
import {
  RPContainer,
  RPHeader,
  RPPost,
  RPPosts,
  RPTitle,
} from './custom-tw-components';
import utilStyles from '@styles/utils.module.scss';

const RecentPostsContainer = ({ posts, title, link }) => {
  return (
    <RPContainer className={utilStyles.loadUp}>
      <RPHeader>
        <RPTitle> {title} </RPTitle>
        <NavLink
          link={link}
          customClass={`flex justify-end text-primary hover:!underline`}
          value={'View more...'}
        />
      </RPHeader>

      <RPPosts>
        {posts.map(({ url_path, title, date }) => (
          <Link
            key={title}
            href={url_path.replace('-', '/')}
            passHref
          >
            <RPPost>
              {/* <Date
                dateString={date}
                customClass={
                  'text-sm w-auto break-normal inline-block mr-2'
                }
              /> */}
              <Title> {title} </Title>
            </RPPost>
          </Link>
        ))}
      </RPPosts>
    </RPContainer>
  );
};

export default RecentPostsContainer;
