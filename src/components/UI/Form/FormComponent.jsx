import React from 'react';
import style from './FormComponent.module.css';

export const FormComponent = ({ children, ...props }) => {
  return (
    <form className={style.form} noValidate {...props}>
      {children}
    </form>
  );
};
