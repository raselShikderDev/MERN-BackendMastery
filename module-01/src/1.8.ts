{
  // Object Destracturing
  const userInfo: {
    id: number;
    name: {
      firstName: string;
      lastName: string;
    };
    contact: number;
    addres: string;
  } = {
    id: 34,
    name: {
      firstName: "Rasel",
      lastName: "Shikder",
    },
    contact: 19007363,
    addres: "Dhaka",
  };
  const {
    id,
    name: { firstName:fstname },
  } = userInfo;

  console.log( userInfo)
  // Array Destracturing
  const fruit = ["apple", "mango", "jackfurit", "pineapple", "orange", "malta"];
  const [a, b, c, d] = fruit; // Destracturing all
  const [, , third] = fruit; // Destracturing 3rd only
  const [, , , fourth, ...rest] = fruit; // Destracturing 4th and rest
  console.log(fourth);
  
}



