import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //// Creating data for a user
  //   const result = await prisma.user.create({
  //     data: {
  //       name: "Rasel Shikder 02",
  //       email: "rasel02@gmail.com",
  //       profilePhoto:"https://profilephoto.com"
  //     },
  //   });
  //   console.log(result);

  // Geting user all data
  //  const res = await prisma.user.findMany()
  // console.log(res);

  // // getting singel data by condition
  // const res = await prisma.user.findMany({
  //     where:{
  //         id:3
  //     }
  // })

  // Get singel data
  // const res = await prisma.user.findUnique({
  //     where:{
  //         id:2
  //     }
  // })

  // // Get singel data and throwing error directly
  // const res = await prisma.user.findUniqueOrThrow({
  //     where:{
  //         id:8
  //     }
  // })

  // // Update a singel user
  // const updatedUser = await prisma.user.update({
  //     where:{
  //         id:1
  //     },
  //     data:{
  //         name:"Updated name"
  //     }
  // })
  // console.log(updatedUser);


// // it will just retrun the count of number it affect
//   const updateProfilePhoto = await prisma.user.updateMany({
//     where: {
//       profilePhoto: null,
//     },
//     data: {
//       profilePhoto: "https:profilephoto.com/default.png",
//     },
//   });
//   console.log(updateProfilePhoto);


// // IT retruns updated data 
//   const updateProfilePhoto = await prisma.user.updateManyAndReturn({
//     where: {
//       profilePhoto: "https:profilephoto.com/photo.png",
//     },
//     data: {
//       profilePhoto: "https:profilephoto.com/default.png",
//     },
//   });
//   console.log(updateProfilePhoto);


// // Deleteing singel user user 
// const deleteUser = await prisma.user.delete({
//     where:{
//         id:1
//     }
// })
// console.log(deleteUser);

// // Deleteing multiple user
// const deleteUser = await prisma.user.deleteMany({
//     where:{
//         id:{
//             gt:0
//         }
//     }
// })
// console.log(deleteUser);




}

main();

