import classNames from "classnames";

function Nav({ name }) {
  const navClassName = classNames(
    "text-[22px] text-stone-700 font-light hover:underline hover:text-red-400 transition-all  md:m-0 m-4",
  );

  return (
    <li className={navClassName}>
      <a href={`#${name}`}>{name}</a>
    </li>
  );
}

export default Nav;
