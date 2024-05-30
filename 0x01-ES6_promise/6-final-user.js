import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allsettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const itm of values) {
      arr.push({ status: itm.status, value: itm.value});
    }
    return arr;
  });
}
