
/**
 * Calculate donate sum 
 * @returns Donate sum
 */
export function getActualDonateSum() {
  let sum = 0;
  document.querySelectorAll('.donate-item').forEach((item) => {
    const separatorIndex = item.textContent.indexOf('-');
    let value = item.textContent.slice(separatorIndex + 1).trim();
    value = value.replace('$', '');
    sum += Number(value);
  })
  return sum;
}


/**
 * Add new donate to donates list 
 * @param {*} donate Donate value
 */
export function addDonateToList(donate) {
  const donatesListHTML = document.querySelector('.donates-container__donates');

  const donateDiv = document.createElement('div');
  donateDiv.className = 'donate-item';
 
  const nowDate = new Date();
  const donateVal = document.createElement('b');
  donateVal.textContent = String(donate) + '$';

  donateDiv.textContent = formatDate(nowDate) + ' - ';
  donateDiv.append(donateVal);

  donatesListHTML?.insertAdjacentElement('afterbegin', donateDiv);
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/**
 * COnvert date and time to format 'July 6th 2021, 10:28:49 am'
 * @param {*} date Datetime object
 * @returns String with formatted date and time
 */
function formatDate(date) {
  let res = '';
  res += MONTHS[date.getMonth()] + ' ';

  let day = date.getDate();
  let dayPostfix = '';
  switch (day) {
    case 1:
        dayPostfix = 'st';
        break;
    case 2:
        dayPostfix = 'nd';
        break;
    case 3:
        dayPostfix = 'rd';
        break;
    default:
        dayPostfix = 'th';
        break;
  }
  res += String(day) + dayPostfix + ' ';
  res += date.getFullYear() + ', ';
  res += getTimeInAmPm(date);

  return res;
}

/**
 * Format time to 11:24:45 am
 * @param {*} date Date to convert
 * @returns String with formatted time
 */
function getTimeInAmPm(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'pm' : 'am';
    let seconds = date.getSeconds(); 
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    const strTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    return strTime;
}