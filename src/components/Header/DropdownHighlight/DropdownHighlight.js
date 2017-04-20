import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './DropdownHighlight.styl';

const cx = styles::classNames;

const DropdownHighlight = ({ data, parentClass, closeDropdowns }) =>
  <div
    className={cx({
      highlight: parentClass !== 'moreDropdown',
      moreHighlight: parentClass === 'moreDropdown'
    })}
  >
    {data.componentTitle ?
      <h4
        className={cx('section-title')}
        dangerouslySetInnerHTML={{ __html: data.componentTitle }}
      />
      : null
    }
    <a
      href={data.link}
      onClick={closeDropdowns}
      className={cx('content')}
      rel={data.external ? 'external' : null}
    >
      <img src="http://www.repositpower.com/wp-content/themes/web-reposit-public/assets/img/logo-icon-blue.svg" alt={data.title} />
      <h5 className={cx('title')}>Solve the energy crisis with homeowners</h5>
      {data.excerpt
        ? <p className={cx('text')}>Reposit Power will today tell parliamentarians that homes and businesses with smart energy systems will solve the energy crisis, not battery farms.</p>
        : null
      }
      {data.date
        ? <span className={cx('time')}>{data.date}</span>
        : null
      }
    </a>
    <div className={cx('content')}>
      {(data.morelinks || []).map(({ href, text, external }, index) =>
        <a
          href={href}
          className={cx('link')}
          onClick={closeDropdowns}
          key={index}
          rel={external ? 'external' : null}
        >Reposit Power will today tell parliamentarians that homes and businesses with smart energy systems will solve the energy crisis, not battery farms.</a>
      )}
    </div>
  </div>
;

DropdownHighlight.propTypes = {
  data: PropTypes.object,
  parentClass: PropTypes.string,
  closeDropdowns: PropTypes.func
};

export default DropdownHighlight;
