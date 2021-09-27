import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let resNames = [];
    let secretName = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') resNames.push(members[i])
    }
   outer: for (let i = 0; i < resNames.length; i++) {
       console.log(resNames[i])
      for (let j = 0; j < resNames[i].length; j++) {
        console.log(j)
        if (resNames[i][j] !== ' ')  {
         console.log('her')
          secretName.push(resNames[i][j]);
          continue outer;
        }
      } 
    }
      for (let i = 0; i < secretName.length; i++) {
        secretName[i].toUpperCase()
      }
      secretName = secretName.map ((w) => w.toUpperCase())
    return secretName.sort().join('')
  }
    return false
}
