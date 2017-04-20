import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Head.styl';
import getRibbonVariant from '../modules/ribbon';

const cx = styles::classNames;

const Head = ({
  toggleDropdownHandler,
  featured,
  featuredLink,
  featuredText,
  dropdownOpen,
  theme,
  closeHeaderDropdown
}) => {
  const ribbonVariant = getRibbonVariant();
  return (
    <div
      className={cx('head', [`theme-${theme}`], {
        dropdownOpen
      })}
    >
      <button
        type="button"
        className={cx('toggleButton', 'collapsed', { closeButton: dropdownOpen })}
        onClick={toggleDropdownHandler}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className={cx('iconBar')} />
        <span className={cx('iconBar')} />
        <span className={cx('iconBar')} />
        <span className={cx('iconBar')} />
      </button>
      <h1 className={cx('brand')}>
        <a href="/" rel="home" className={cx('logo')} onClick={closeHeaderDropdown}>
          <span>Authtgyht0</span>
        </a>

      </h1>
    </div>
  );
};

Head.propTypes = {
  toggleDropdownHandler: PropTypes.func,
  featured: PropTypes.bool,
  featuredLink: PropTypes.string,
  featuredText: PropTypes.string,
  dropdownOpen: PropTypes.bool,
  theme: PropTypes.string,
  closeHeaderDropdown: PropTypes.func
};

export default Head;
