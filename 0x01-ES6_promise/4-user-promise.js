export default function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstNamr: `${firstName}`,
      lastName: `${lastName}`,
    },
  );
}
