{
  // Ternary Oparetor
  const age: number = 18;
  const isAdult = age >= 18 ? "ADULT" : "NOT ADULT";
  // console.log(isAdult);

  // Nullish coalescing oparator
  // Making decision based on nulll and undefined data type
  const isAuthenticate: null = null;
  const isAuth: undefined = undefined;
  const user = isAuthenticate ?? "Guest";
  // console.log(user);
  // console.log(isAuth);

  const userInfo: {
    name: string;
    phone: number;
    addess: {
      present: undefined;
      permanent: "Dhaka";
    };
    isVerified: boolean;
  } = {
    name: "Rasel",
    phone: 9820283,
    addess: {
      present: undefined,
      permanent: "Dhaka",
    },
    isVerified: true,
  };

  const userPresentAddress = userInfo?.addess?.present ?? "No Present Address"
  console.log(userPresentAddress);
  
}
