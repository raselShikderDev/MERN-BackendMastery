{
  //
  // asyncronus Typescript
  const myData = ():Promise<string> => {
    const data:string = "We,ve got data";
    return new Promise<string>((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject("Getting Data is faild due to unkknown reason");
      }
    });
  };

  const fetchData = async():Promise<string>=>{
    const res:string = await myData()
    return res
  }



  type Name ={
    name:string
  }
  interface Age {
    age:number
  }

  type UserInfo = Name & Age & {devType:string;}

  const ourdata = ():Promise<UserInfo>=>{
    const data:UserInfo = {
        name:"Rasel",
        age:23,
        devType:"Mern",
    }
    return new Promise<UserInfo>((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject("Getting our Data is faild");
      }
  })
}


const getOurData = async():Promise<UserInfo>=>{
    const res:UserInfo = await ourdata()
    console.log(res);
    return res
}



}
