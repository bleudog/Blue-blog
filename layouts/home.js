import Image from 'next/image';
import Footer from '@components/Footer';
import Container from '@components/Container';
import ExploreMoreContainer from '@components/ExploreMoreContainer';
import PageBanner from '@components/PageBanner';
import utilStyles from '@styles/utils.module.scss';
import { Banner } from '@components/custom-tw-components';
import profileImg from '../public/images/profile.png';

const HomeLayout = ({ blog }) => {
  return (
    <Container>
      <Banner className={utilStyles.loadDown}>
        <Image
          priority
          className={utilStyles.circleImage}
          width={214}
          height={190}
          src={profileImg}
          alt='Rolemadelen'
        />
        <PageBanner
          title={'Failure leads to understanding'}
          subtitle={
            "If you're a human, failure in life is inevitable. \nWe fail by default. So try again and fail better."
          }
        />
      </Banner>
      <ExploreMoreContainer title={'Explore'} />
      <Footer />
    </Container>
  );
};

export default HomeLayout;
