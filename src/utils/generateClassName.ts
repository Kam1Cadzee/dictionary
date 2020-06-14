export const generateClassName = (name: string, options: {
  [name: string]: boolean;
}) => {
  let str = name;
  Object.keys(options).forEach(key => {
    if(options[key]) {
      str = str + ' ' + key;
    }
  });
  return str;
};
