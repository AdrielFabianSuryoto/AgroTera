import "./Section.css";

function Section({
  children,
  background = "default",
}) {
  return (
    <section className={`section section--${background}`}>
      {children}
    </section>
  );
}

export default Section;