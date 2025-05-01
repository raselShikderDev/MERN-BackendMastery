"use strict";
{
    // spread oparator
    const soilder1 = ["Rasel", "Hridoy", "Raiyan"];
    const soilder2 = ["Rifat", "Rana", "Unknown"];
    // soilder1.push(soilder2)
    // soilder1.push(...soilder2)           // Spearding
    const platoon1 = {
        tiger: "Rasel",
        lion: "Raiyan",
    };
    const platoon2 = {
        bravo: "Rifat",
        charlie: "Rana",
        delta: "Hridoy",
    };
    const platoonList = {
        ...platoon1, // Spearding platoon1
        ...platoon2, // Spearding platoon2
    };
    // Rest Opareator
    const greetFreinds = (...fr) => {
        fr.forEach((frnd) => console.log(`Helllo! ${frnd}`));
    };
    greetFreinds("Freind1", "Freind2", "Freind3", "Freind4");
}
