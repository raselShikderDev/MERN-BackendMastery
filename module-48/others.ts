import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
//   // Create or insert some user data
//   const manyData = await prisma.user.createMany({
//     data: [
//       {
//         name: "Rasel",
//         email: "rasel@gmail.com",
//         profilePhoto: "https://profilepic.com",
//       },
//       {
//         name: "Shikder",
//         email: "shikder@gmail.com",
//       },
//       {
//         name: "Alice",
//         email: "alice@example.com",
//         profilePhoto: "https://example.com/alice.jpg",
//       },
//       {
//         name: "Bob",
//         email: "bob@example.com",
//       },
//     ],
//   });
//   console.log(manyData);


// // Sorting 
// const res = await prisma.user.findMany({
//     orderBy:{
//         id:"desc"
//     }
// })
// console.log(res);


// Sorting with conditon or searcing
const res = await prisma.user.findMany({
    where:{
        name:{
            contains:"ra", // Case sensetive
            mode:"insensitive"  // enables case insensetive
        }
    },
    orderBy:{
        id:"desc"
    }
})
console.log(res);

}

others();
