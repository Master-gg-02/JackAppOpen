#!/usr/bin/env node

const type = o => {
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
[
  'Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp',
].forEach(t => {
  type['is' + t] = o => {
    return type(o) === t.toLowerCase();
  };
});

const objectBooleanToString = o => {
  Object.keys(o).forEach(n => {
    if (type.isBoolean(o[n])) {
      o[n] = o[n].toString();
    } else if (type.isObject(o[n])) {
      objectBooleanToString(o[n]);
    }
  });
  return o;
};
export {type, objectBooleanToString};
