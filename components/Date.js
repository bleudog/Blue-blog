import { parseISO, format } from 'date-fns'

export default function Date({ dateString, customClass }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString} className={`text-secondary dark:text-dsecondary tracking-wide font-light ${customClass}`}> {format(date, 'LLL dd, yyyy')} </time>
}