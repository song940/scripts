
import { leftpad } from './string.js';

export const MINUTE = 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const MONTH = DAY * 30;
export const YEAR = MONTH * 12;

export const parse = str => new Date(str);

export const timeago = t => {
  const diff = (new Date() - new Date(t)) / 1000;
  if (diff < MINUTE) {
    return `${Math.round(diff)} seconds ago`;
  } else if (diff < HOUR) {
    return `${Math.round(diff / MINUTE)} minutes ago`;
  } else if (diff < DAY) {
    return `${Math.round(diff / HOUR)} hours ago`;
  } else if (diff < MONTH) {
    return `${Math.round(diff / DAY)} days ago`;
  } else if (diff < YEAR) {
    return `${Math.round(diff / MONTH)} months ago`;
  }
  return `${Math.round(diff / YEAR)} years ago`;
};

export const format = (pattern, date = new Date()) => {
  const _year = date.getYear();
  const _fullYear = date.getFullYear();
  const _month = date.getMonth() + 1;
  const _date = date.getDate();
  const _hours = date.getHours();
  const _minutes = date.getMinutes();
  const _seconds = date.getSeconds();
  return pattern.replace(/{(\w+)}/g, (_, name) => ({
    // year
    yy: _year,
    yyyy: _fullYear,
    // month
    M: _month,
    MM: leftpad(_month, 2),
    // date
    d: _date,
    dd: leftpad(_date, 2),
    // hours
    h: _hours % 12,
    hh: leftpad(_hours, 2),
    // minutes
    m: _minutes,
    mm: leftpad(_minutes, 2),
    // seconds
    s: _seconds,
    ss: leftpad(_seconds, 2),
  })[name] || `{${name}}`);
};

export function timeDiff(date1, date2) {
  // 将日期转换为时间戳（以毫秒为单位）
  const timestamp1 = Date.parse(date1);
  const timestamp2 = Date.parse(date2);

  // 计算时间差值（以毫秒为单位）
  const diff = Math.abs(timestamp1 - timestamp2);

  // 将时间差值转换为需要的格式
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(diff / (1000 * 60) % 60);
  const seconds = Math.floor(diff / 1000 % 60);

  // 返回格式化后的时间差值
  return `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
}

export function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
