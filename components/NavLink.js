import Link from 'next/link';

const NavLink = (props) => {
  return (
    <Link href={props.link}>
      <a
        className={`${props.customClass} font-['AmazonEmberDisplay'] text-gray-700 hover:no-underline duration-300`}
      >
        {props.value}
      </a>
    </Link>
  );
};
export default NavLink;
