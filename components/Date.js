import { parseISO, format } from 'date-fns';

export default function Date({ updated, dateString, customClass }) {
	const date = parseISO(dateString);
	return (
		<time
			dateTime={dateString}
			className={`w-full text-secondary tracking-wide font-light ${customClass}`}>
			{updated ? 'last updated: ' : ''}
			{format(date, 'LLL dd, yyyy')}{' '}
		</time>
	);
}
