export const getInfo = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  return [data];
};
