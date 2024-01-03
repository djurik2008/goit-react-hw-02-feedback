import css from '../Section/section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>{children}</ul>
    </section>
  );
};

export default Section;
