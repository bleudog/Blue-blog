import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

Date.propTypes = {
    dateString: PropTypes.string.isRequired,
    updated: PropTypes.bool,
    customClass: PropTypes.string,
};

export default function Date({ updated, dateString, customClass }) {
    const date = parseISO(dateString);
    return (
        <time
            dateTime={dateString}
            className={`w-full text-secondary tracking-wide ${customClass}`}>
            {updated ? 'last updated: ' : ''}
            {format(date, 'LLL dd, yyyy')}{' '}
        </time>
    );
}
