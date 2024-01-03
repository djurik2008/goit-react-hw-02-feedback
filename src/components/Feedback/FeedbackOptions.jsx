import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ buttons, handleFn }) => {
  return buttons.map(button => (
    <li key={button} className={css.item}>
      <button onClick={handleFn} name={button} className={css.btn}>
        {button}
      </button>
    </li>
  ));
};

export default FeedbackOptions;
