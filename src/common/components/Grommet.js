import React from 'react';
import classnames from 'classnames';

const CLASS_ROOT = "grommet";

export default props => {
  const { children, className, ...restProps } = props;
  let classes = classnames(CLASS_ROOT, className);

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  );
};
