import tw from "tailwind-styled-components";

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.ul` 
    list-none
    p-0
    m-0
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
    mt-6
    mb-4
    overflow-x-auto
`;
    
export const LanguageList = tw.li` 
    list-none
    px-2
    sm:px-4
    mr-2
    border
    rounded-md
    font-medium
    cursor-pointer
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
    pt-2
    pb-2
    flex
    flex-col
    hover:bg-[#236af229]
    cursor-pointer
`;

export const Title = tw.div` 
    text-primary 
    font-normal
    cursor-pointer
    duration-150
    flex
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
    pb-[2em]
    flex
    flex-col
    justify-center
`;

export const PageTitle = tw.div` 
    font-bold
    text-2xl
    sm:text-3xl 
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
    mt-1
    mb-1
    rounded w-full 
    list-none 
    duration-300
    cursor-pointer
    hover:bg-[#236af229]
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
    
    hover:text-[#289aff]
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

export const BackButton = tw.button`
    px-2
    sm:px-4
    mb-2
    border
    rounded-md

    text-primary
    hover:bg-[#f06969]
    hover:text-[#fff]
    duration-75
`

export const Tag = tw.span`
    py-[1px]
    px-[3px]
    mr-2
    rounded-md
    text-xs
    bg-[#f0f0f0]
    text-[#999]
`