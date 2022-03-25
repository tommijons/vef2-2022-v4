import classNames from 'classnames';
import propTypes from 'prop-types';
import { useState } from 'react';
import s from './Button.module.scss';

export function Button({ children, onClick, size }) {
  const [toggled, setToggled] = useState(false);

  const localOnClick = (e) => {
    setToggled(!toggled);
    onClick(e);
  }

  return (
    <button
      onClick={localOnClick}
      className={classNames(s.button, toggled && s.toggled, size === 'large' && s.large, size === 'small' && s.small)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
  onClick: propTypes.func.isRequired,
  size: propTypes.oneOf(['small', 'large']),
}