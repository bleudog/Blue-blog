import tw from 'tailwind-styled-components';

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.div`
   mx-auto
   md:max-w-[40em]
   sm:max-w-[30em]
   max-w-[25em]
   min-w-[25em]
   mb-8
`;

export const Header = tw.p`
    px-2
    mt-4
    text-4xl
    font-['AmazonEmberDisplayMedium']
    postHeader
    whitespace-nowrap
`;

//////////////////////////////////////////////////////
///  Blog Post Layout
//////////////////////////////////////////////////////
export const Article = tw.article`
    text-primary
    pt-4
    pb-10
    px-4
    border-b-[1px]
`;

//////////////////////////////////////////////////////
///  Post Component
//////////////////////////////////////////////////////
export const PostContainer = tw.section`
    mt-4
    text-primary
    text-sm
    w-full
`;

export const PostTitle = tw.div`
    text-primary
    md:text-3xl
    font-bold
`;

//////////////////////////////////////////////////////
///  PostList Component
//////////////////////////////////////////////////////
export const List = tw.li`
    list-none
    p-2
    flex
    cursor-pointer
`;

export const PostDate = tw.div`
    text-secondary
    cursor-pointer
    flex
    items-center
    font-['AmazonEmberDisplay']
    text-xs
    mr-6
`;

export const Title = tw.div`
    text-primary
    cursor-pointer
    duration-150
    flex-wrap
    font-['AmazonEmberDisplay']
    text-sm
    hover:text-[#465a87]
`;

//////////////////////////////////////////////////////
///  Home Layout
//////////////////////////////////////////////////////

export const Banner = tw.div`
    relative
    text-center
`;

//////////////////////////////////////////////////////
///  PageBanner Layout
//////////////////////////////////////////////////////
export const PageHeader = tw.header`
    pb-[1em]
    flex
    flex-col
    justify-center
`;

export const PageTitle = tw.div`
    uppercase
    font-['AmazonEmberDisplayMedium']
    whitespace-nowrap
    postHeader
`;

export const PageSecondTitle = tw.div`
    font-['AmazonEmberDisplay']
    text-xl
    my-1
    text-gray-800
    w-full
`;

export const PageSubtitle = tw.div`
    mt-3
    text-md
    md:text-lg
    font-light
    whitespace-pre-line
`;

//////////////////////////////////////////////////////
///  Container  Component
//////////////////////////////////////////////////////
export const BaseContainer = tw.section`
    max-w-screen-md
    w-full
    sm:px-[1rem]
    px-[1.2rem]
    mx-auto
    relative
    mt-5
    flex
    flex-col
    items-center
    justify-center
    h-screen
    baseContainer
`;

//////////////////////////////////////////////////////
///  Footer Component
//////////////////////////////////////////////////////
export const FooterContainer = tw.footer`
    flex
    justify-between
    items-center
    my-8
    px-2
    text-sm
    text-primary
`;

//////////////////////////////////////////////////////
///  Header Component
//////////////////////////////////////////////////////
export const HeaderContainer = tw.header`
    mt-4
    text-2xl
    font-['AmazonEmberDisplay']
    postHeader
    whitespace-nowrap
    px-4
`;

export const BackButton = tw.button`
    ml-4
    px-2
    sm:px-4
    rounded-md

    text-primary
    hover:bg-[#51a5ff]
    hover:text-white
    duration-75

    shadow
    active:shadow-none
`;

export const Tag = tw.span`
    min-w-full
    py-[1px]
    px-[3px]
    mr-2
    rounded-md
    text-xs
    bg-[#f0f0f0]
    text-[#999]
`;

//////////////////////////////////////////////////////
///  Explore More Component
//////////////////////////////////////////////////////

export const CategoryList = tw.ul`
    flex
    align-center
    flex-wrap
    justify-between
    mx-auto
`;

export const Category = tw.li`
    font-[AmazonEmberDisplay]
    flex
    items-center
    justify-center
    text-center

    px-2
    mb-4

    text-gray-700
`;
