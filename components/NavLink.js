import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link href={props.link}>
      <a
        className={`${props.customClass} text-gray-700 hover:no-underline hover:text-[#289aff] duration-300`}
      >
        {props.value}
      </a>
    </Link>
  );
};
export default NavLink;
