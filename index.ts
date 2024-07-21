interface User {
  birthYear: number;
}



function calculateAgeOfUser(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

console.log(calculateAgeOfUser({ birthYear: 1990 }))
