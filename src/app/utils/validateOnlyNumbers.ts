export const validateOnlyNumbers = (value: string) => {
  const regex = /^[0-9]+$/;
  if (!regex.test(value)) {
    return ;
  }
  return value;
};
