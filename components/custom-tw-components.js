import tw from "tailwind-styled-components";

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.ul` 
    list-none
    p-0
    m-0
    pt-[3em]
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
`;

export const LanguageList = tw.li` 
    list-none
    px-2
    sm:px-4
    mr-2
    border
    rounded-md
    font-medium

    hover:bg-[#289aff]
`;

//////////////////////////////////////////////////////
///  Post Component
//////////////////////////////////////////////////////
export const PostContainer = tw.section`
    mt-8
    text-primary
    text-sm
    w-full
`;

export const PostTitle = tw.div`
    text-primary
    text-2xl
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
    pb-8
`;

export const Title = tw.div` 
    text-primary 
    overflow-hidden
    text-ellipsis
    whitespace-pre

    tracking-wider
    font-light
    cursor-pointer
    md:text-xl 
    text-md
    uppercase
    hover:text-[#289aff]
    duration-150
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
    pb-[2em]
    flex
    flex-col
    justify-center
`;

export const PageTitle = tw.div` 
    font-bold
    text-3xl
    sm:text-4xl 
    md:leading-tight 
    text-gray-800 
`;

export const PageSubtitle = tw.div` 
    mt-3 
    text-md
    md:text-lg
    font-light
    whitespace-pre-line
`;

//////////////////////////////////////////////////////
/// RecentPostContainer Component
//////////////////////////////////////////////////////
export const SubContainer = tw.div`
    mb-8
`;

//////////////////////////////////////////////////////
///  DocAside  Component
//////////////////////////////////////////////////////
export const DocAsideContainer = tw.section`
    w-[35%]
    h-full
    pr-8
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
    
    text-[0.9em]
    text-[#2a75e9]
    
    hover:text-[#289aff]
    hover:no-underline
    
    duration-300
`;

//////////////////////////////////////////////////////
///  DocContainer  Component
//////////////////////////////////////////////////////
export const DocContent = tw.main`
    flex
    w-full
    mx-auto
`;

//////////////////////////////////////////////////////
///  DocPost  Component
//////////////////////////////////////////////////////
export const DocPostContainer = tw.section`
    w-full
    text-sm
    text-primary
`;

export const DocPostTitle = tw.h1`
    text-primary 
    overflow-hidden
    text-ellipsis
    whitespace-pre

    text-2xl 
    md:text-3xl 
`;

//////////////////////////////////////////////////////
///  Container  Component
//////////////////////////////////////////////////////
export const BaseContainer = tw.section`
    max-w-screen-md
    w-full
    px-[1rem]
    mx-auto
    relative
    mt-5
`;

//////////////////////////////////////////////////////
///  CPSection Component
//////////////////////////////////////////////////////
export const CPHeader = tw.h1`
    text-xl
    md:text-2xl
    font-semibold 
    text-primary 
    mt-8 
    pb-2
`;

//////////////////////////////////////////////////////
///  Footer Component
//////////////////////////////////////////////////////
export const FooterContainer = tw.footer` 
    flex 
    flex-col 
    justify-center 
    items-center 
    my-8
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

export const MobileNav = tw.div`
    flex
`;

//////////////////////////////////////////////////////
///  Header Component
//////////////////////////////////////////////////////
export const ProjectContainer = tw.div` 
    flex
    flex-wrap
    relative
    justify-center
`;

export const ProjectCard = tw.div` 
    m-4
    flex
    flex-col
    text-center
    rounded-md
`;
