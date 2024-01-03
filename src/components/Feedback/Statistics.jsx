import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
    </>
  );
};
export default Statistics;
