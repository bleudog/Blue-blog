import NavLink from "@components/NavLink";
import Date from "@components/Date";
import { SubContainer } from "./custom-tw-components";

const RecentPostsContainer = ({ posts, title, link }) => {
  return (
    <SubContainer>
      <div className={"flex justify-between items-center mt-4"}>
        <div className={"py-2 text-xl md:text-2xl font-semibold text-primary"}>
          {" "}
          {title}{" "}
        </div>
        <NavLink
          link={link}
          customClass={`flex justify-end text-sm text-primary`}
          value={"View more..."}
        />
      </div>

      <ul className={`list-none flex flex-wrap justify-evenly`}>
        {posts.map(({ url_path, title, date }) => (
          <li
            className={
              "flex flex-col sm:flex-row sm:items-center rounded-md hover:shadow-[0px_0px_6px_rgba(0,0,0,0.6)] pt-3 pb-3 pl-2 mb-1 rounded w-full list-none duration-300"
            }
            key={title}
          >
            <Date
              dateString={date}
              customClass={"text-xs break-normal inline-block"}
            />
            <NavLink
              link={url_path.replace("-", "/")}
              customClass={
                "uppercase text-md tracking-wider font-light md:text-lg text-primary ml-3 sm:ml-5"
              }
              value={title}
            />
          </li>
        ))}
      </ul>
    </SubContainer>
  );
};

export default RecentPostsContainer;
