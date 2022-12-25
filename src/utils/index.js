const mutipleMysqlToObject = (mysqlAray) => {
  return mysqlAray.map((data) => data.toObject());
};

export { mutipleMysqlToObject };
