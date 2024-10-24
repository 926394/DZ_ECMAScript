// async function getUsers(names) {
//   let jobs = [];

//   for(let name of names) {
//     let job = fetch(`https://api.github.com/users/${name}`).then(
//       successResponse => {
//         if (successResponse.status != 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       failResponse => {
//         return null;
//       }
//     );
//     jobs.push(job);
//   }

//   let results = await Promise.all(jobs);

//   return results;
// }

async function getUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return Promise.reject(error.message);
  }
}
