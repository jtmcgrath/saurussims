import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfDate = renderBlock('Date')
export const IfNewDayDate = renderBlock('NewDayDate')
export const IfSameDayDate = renderBlock('SameDayDate')

export const Beats = renderString('Beats')
export const DayOfYear = renderString('DayOfYear')
export const Minutes = renderString('Minutes')
export const Seconds = renderString('Seconds')
export const TimeAgo = renderString('TimeAgo')
export const Timestamp = renderString('Timestamp')
export const WeekOfYear = renderString('WeekOfYear')

export { default as AmPm } from './AmPm'
export { default as DayOfMonth } from './DayOfMonth'
export { default as DayOfWeek } from './DayOfWeek'
export { default as Hour } from './Hour'
export { default as Month } from './Month'
export { default as Year } from './Month'
