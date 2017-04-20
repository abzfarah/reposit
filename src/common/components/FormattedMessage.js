import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

const GrommetFormattedMessage = (props, context) => (
  context.intl ? <FormattedMessage {...props} />
    : <span>
        {props.defaultMessage || props.id}
      </span>
);

GrommetFormattedMessage.contextTypes = {
  intl: PropTypes.object
};

GrommetFormattedMessage.propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string
};

GrommetFormattedMessage.displayName = 'GrommetFormattedMessage';

export default GrommetFormattedMessage;
