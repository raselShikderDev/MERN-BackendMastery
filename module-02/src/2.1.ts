{
  // asertion type

  let variables: any;
  variables = 45;
  (variables as number)
  // variables = "Rasel Shikder";
  // variables as string;
  const value = typeof variables;
  // console.log(value);

  const kgToGm = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const convertedValues: number = parseFloat(value);
      return convertedValues * 1000;
    }
    if (typeof value === "number") {
      const stringValue: string = `This is value ${value * 1000}`;
      return stringValue;
    } 
  };
  const res1 = kgToGm(45) as string
  console.log(res1);
  console.log(kgToGm("7.5")); 

}
