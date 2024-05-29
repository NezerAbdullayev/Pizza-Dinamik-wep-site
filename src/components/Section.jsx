function Section({ children, id = " ", bg = true, className,bgImg }) {
  return (
    <div
      id={id}
      className={` scroll-mt-[-42px]
         ${bg ? "bg-stone-100" : " "}
         ${className ? className : " "}
         ${bgImg ? bgImg  : " "}
         `}
    >
      <section className="mx-auto   max-w-screen-xl p-5">
        {children}
      </section>
    </div>
  );
}

export default Section;
