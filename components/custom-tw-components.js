import tw from 'tailwind-styled-components';

//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.div`
    mx-auto
    min-w-96
    max-w-[45em]
    px-8
    mb-8
`;


//////////////////////////////////////////////////////
///  Blog Post Layout
//////////////////////////////////////////////////////
export const Article = tw.article`
    pt-4
    pb-10
    border-b-[1px]
    text-primary
`;

//////////////////////////////////////////////////////
///  Post Component
//////////////////////////////////////////////////////
export const PostContainer = tw.section`
    mt-4
    mb-4
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
    text-primary
`;

export const PostDate = tw.div`
    cursor-pointer
    flex
    items-center
    font-['AmazonEmberDisplay']
    text-xs
    md:mr-6
    text-secondary
    font-bold
`;

export const Title = tw.div`
    cursor-pointer
    duration-150
    flex-wrap
    font-['AmazonEmberDisplay']
    text-md
    md:text-sm
    hover:text-[#465a87]
`;

export const RefUID = tw.div`
    text-xs
    md:mr-3
    min-w-[1.5em]
    text-accent
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
    pt-16
    px-4
    text-sm
`;

//////////////////////////////////////////////////////
///  Header Component
//////////////////////////////////////////////////////
export const HeaderContainer = tw.header`
    mt-4 
    mb-2
    flex
    text-3xl 
    font-['AmazonEmberDisplay'] 
    whitespace-pre-wrap 
    text-primary
`;

export const BackButton = tw.button`
    btn
    btn-xs
    btn-outline

    mt-2
    sm:px-4
    rounded-md

    shadow
    active:shadow-none
`;

//////////////////////////////////////////////////////
/// About Page
//////////////////////////////////////////////////////
export const AboutWrapper = tw.section`
    min-w-96
    max-w-[750px]
    container
    mx-auto
    flex-col
    flex
    px-8
    about-wrapper
`;

export const ContactLinks = tw.div`
    flex
    justify-center
    items-center
    my-16
    mx-auto
`;

export const ContactIcon = tw.a`
    flex
    w-11
    h-11
    text-[10px]
    sm:mx-4
    mx-1
    btn 
    btn-link 
    btn-sm 
    hover:btn-ghost
    no-underline
    hover:no-underline
`;