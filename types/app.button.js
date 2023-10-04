export const AppButton = Object.freeze({
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  dot: '.',

  ac: 'ac',
  equal: '=',
  plusMinus: '+/-',
  percent: '%',

  division: '/',
  multi: 'x',
  minus: '-',
  plus: '+',
})
export const AppButtonName = Object.keys(AppButton).reduce((res, key) => {
  res[AppButton[key]] = key;
  return res;
}, {})