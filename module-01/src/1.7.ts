{
  // spread oparator
  const soilder1: string[] = ["Rasel", "Hridoy", "Raiyan"];
  const soilder2: string[] = ["Rifat", "Rana", "Unknown"];
  // soilder1.push(soilder2)
  // soilder1.push(...soilder2)           // Spearding

  const platoon1: {
    tiger: string;
    lion: string;
  } = {
    tiger: "Rasel",
    lion: "Raiyan",
  };

  const platoon2: {
    bravo: string;
    charlie: string;
    delta: string;
  } = {
    bravo: "Rifat",
    charlie: "Rana",
    delta: "Hridoy",
  };

  const platoonList = {
    ...platoon1, // Spearding platoon1
    ...platoon2, // Spearding platoon2
  };

  // Rest Opareator
  const greetFreinds = (...fr: string[]) => {
    fr.forEach((frnd: string) => console.log(`Helllo! ${frnd}`));
  };
  greetFreinds("Freind1", "Freind2", "Freind3", "Freind4");
}
