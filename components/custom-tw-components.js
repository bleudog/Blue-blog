import tw from 'tailwind-styled-components';

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.ul`
    list-none
    p-0
    my-0
    mx-[3em]
    pt-[1em]
    border-t-[1px]
    border-b-[1px]
`;

//////////////////////////////////////////////////////
///  Blog Post Layout
//////////////////////////////////////////////////////
export const Article = tw.article`
    text-primary
    pb-5
    border-b-[1px]
`;

//////////////////////////////////////////////////////
///  LanguageSelector Layout
//////////////////////////////////////////////////////
export const LanguageListWrapper = tw.ul`
    flex
    mt-3
    mb-4
    p-1
    overflow-x-auto
    duration-75
    sm:justify-center
`;

export const LanguageList = tw.li`
    min-w-max
    min-w-fit
    list-none
    px-2
    mr-2
    shadow
    shadow-blue-400/40
    rounded-md
    font-medium
    cursor-pointer
    hover:bg-[#1691ff1c]
    duration-75
    active:shadow-none
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

export const LanguageButtons = tw.div`
    flex
    absolute
    right-0
`;

//////////////////////////////////////////////////////
///  PostList Component
//////////////////////////////////////////////////////
export const List = tw.li`
    list-none
    p-2
    flex
    flex-col
    hover:bg-[#1691ff1c]
    hover:rounded-lg
    cursor-pointer
`;

export const Title = tw.div`
    text-primary
    font-normal
    cursor-pointer
    duration-150
    flex-wrap
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
    font-bold
    uppercase
    font-['AmazonEmberDisplayMedium']
    text-4xl
    sm:text-5xl
    md:leading-tight
    text-gray-800
    text-center
    text-[#4e72b0]
`;

export const PageSecondTitle = tw.div`
    font-['AmazonEmberDisplay']
    text-2xl
    mt-3
    mb-1
    md:leading-tight
    text-gray-800
    text-center
`;

export const PageSubtitle = tw.div`
    mt-3
    text-md
    md:text-lg
    font-light
    whitespace-pre-line
    text-center
`;

//////////////////////////////////////////////////////
/// RecentPostContainer Component
//////////////////////////////////////////////////////
export const RPContainer = tw.div`
    mb-8
`;

export const RPHeader = tw.div`
    flex
    justify-between
    items-center
    mt-4
`;

export const RPTitle = tw.div`
    py-2
    text-xl
    md:text-2xl
    font-semibold
    text-primary
`;

export const RPPosts = tw.ul`
    list-none
    flex
    flex-wrap
    justify-evenly
`;

export const RPPost = tw.li`
    flex
    flex-col
    sm:flex-row
    sm:items-center
    pl-2
    pr-2
    mt-1
    mb-1
    rounded w-full
    list-none
    duration-300
    cursor-pointer
    hover:bg-[#1691ff1c]
`;

//////////////////////////////////////////////////////
///  DocAside  Component
//////////////////////////////////////////////////////
export const DocAsideContainer = tw.section`
    w-48
    h-full
    pr-4
    pt-5

    relative
    flex
    flex-col
    overflow-y-scroll

    duration-300
`;
export const DocAsideHeader = tw.span`
    mt-2

    text-1
    text-primary
`;
export const DocAsideLink = tw.a`
    px-2

    text-[0.8em]
    text-[#2a75e9]
    leading-5
    my-[0.4em]

    hover:text-[#1691ff1c]
    hover:no-underline

    duration-300
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
    flex
    relative
    items-center
    justify-between
    flex-wrap
    pb-20
`;

export const BackButton = tw.button`
    px-2
    sm:px-4
    mb-6
    rounded-md

    text-primary
    hover:bg-[#f0696945]
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

export const CategoryHeader = tw.header`
    font-[AmazonEmberDisplayMedium]
    border-t-2
    text-2xl
    mt-4
    mb-8
`;

export const CategoryList = tw.ul`
    flex
    sm:flex-row
    flex-col
    align-center
    flex-wrap
    justify-between
    mx-8
`;

export const Category = tw.li`
    font-[AmazonEmberDisplay]
    flex
    items-center
    justify-center
    text-center

    hover: cursor-pointer
    list-none

    rounded-md
    shadow-[0_1px_3px_-1px_#4e71b0]
    w-full
    sm:w-5/12

    py-6
    px-2
    mb-4

    text-gray-700
    text-xl
    hover:bg-[#1691ff1c]

    ease-in-out
    duration-200
`;
