import React from 'react';
import classNames from 'classnames';

export enum AlertType {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning'
}

interface BaseAlertProps {
  className?: string;
  alertType?: AlertType;
  content?: string;
  children: React.ReactNode 
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    alertType,
    className,
    children
  } = props;

  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  });

  return (
    <div className={classes}>{children}</div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default
}

export default Alert;