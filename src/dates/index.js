// import moment here; use this package in each function
const moment = require('moment');

/**
 * 
 * @returns Today formatted as the name of today's day
 */
const today = () => {
  // write code for dates.today
  return moment().format('dddd');
}

/**
 * 
 * @returns Today as a month day and year
 */
const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMM D, YYYY');
}

/**
 * 
 * @returns The current time
 */
const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}