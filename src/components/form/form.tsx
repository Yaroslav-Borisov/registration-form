/* eslint-disable @typescript-eslint/no-explicit-any */
import FormConfig from './form-config';
import styles from './form.module.css';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: FieldValues) => {
    alert('Ваши данные вывелись в консоль');
    console.log(data);
    reset();
  };

  return (
    <form id={'registration'} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.form__title}>Регистрация</h1>
      <div className={styles.form__inputs}>
        {FormConfig.map((item, i) => (
          <div className={styles.input__wrapper} key={i}>
            <label className={styles.input__label}>
              <input
                className={styles.input}
                placeholder={item.placeholder}
                type={item.type}
                {...register(item.inputName, item.inputRegisterOptions)}
              />
            </label>
            <span className={styles.input__error}>
              {errors?.[item.inputName] &&
                (`${errors?.[item.inputName]?.message}` || item.errorMessage)}
            </span>
          </div>
        ))}
      </div>
      <button className={styles.form__button} data-error={isValid} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Form;
