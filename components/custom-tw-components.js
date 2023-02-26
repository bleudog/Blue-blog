import tw from 'tailwind-styled-components';

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.div`
   mx-auto
   md:max-w-[45em]
   sm:max-w-[35em]
   max-w-[25em]
   min-w-[25em]
   mb-8
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
    mb-4
    text-primary
    text-sm
    w-full
`;

//////////////////////////////////////////////////////
///  PostList Component
//////////////////////////////////////////////////////
export const List = tw.li`
    list-none
    p-2
    flex
    flex-col
    md:items-center
    md:flex-row
    cursor-pointer
`;

export const PostDate = tw.div`
    text-secondary
    cursor-pointer
    flex
    items-center
    font-['AmazonEmberDisplay']
    text-xs
    md:mr-6
`;

export const Title = tw.div`
    text-primary
    cursor-pointer
    duration-150
    flex-wrap
    font-['AmazonEmberDisplay']
    text-md
    md:text-sm
    hover:text-[#465a87]
`;

export const RefUID = tw.div`
    text-gray-500
    text-xs
    md:mr-3
    min-w-[1.5em]
`

//////////////////////////////////////////////////////
///  PageBanner Layout
//////////////////////////////////////////////////////
export const PageSecondTitle = tw.div`
    font-['AmazonEmberDisplay']
    text-lg
    my-1
    text-gray-500
    w-full
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
    text-3xl
    font-['AmazonEmberDisplay']
    postHeader
    whitespace-pre-wrap
    px-4
`;

export const BackButton = tw.button`
    mt-2
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

//////////////////////////////////////////////////////
/// About Page
//////////////////////////////////////////////////////
export const AboutWrapper = tw.section`
    flex
    flex-col
    sm:flex-row
    items-center
`