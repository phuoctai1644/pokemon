function stringify(object: any) {
  if (!object) {
    return;
  }

  const params = new URLSearchParams();
  Object.keys(object).forEach(key => {
    const attr = object[key];
    switch(attr) {
      case Array.isArray(attr):
        attr.forEach((el: any) => params.append(key, el));
        break;
      default:
        params.append(key, attr);
    }
  });

  return params.toString();
}

export default {
  stringify
}
