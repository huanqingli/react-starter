/**
 * Created by Muc on 17/6/15.
 */

export const ON_FIRST_NAME_CHANGE = 'ON_FIRST_NAME_CHANGE'
export const ON_LAST_NAME_CHANGE = 'ON_LAST_NAME_CHANGE'
export const ON_EMAIL_CHANGE = 'ON_EMAIL_CHANGE'

export const changeFirstName = payload => ({ type: ON_FIRST_NAME_CHANGE, payload })
export const changeLastName = payload => ({ type: ON_LAST_NAME_CHANGE, payload })
export const changeEmail = payload => ({ type: ON_EMAIL_CHANGE, payload })

export const submit = user => dispatch =>
  fetch(`${SERVER}login/${user.get('firstName') || 'null'}/${user.get('lastName') || 'null'}/${user.get('email') || 'null'}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    mode: 'cors',
    // body: JSON.stringify({
    //   name: 'Hubot',
    //   login: 'hubot',
    // }),
    // body: `username=${user.get('firstName')}&password=${user.get('email')}`,
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      console.info(data)
      dispatch(changeFirstName(''))
      dispatch(changeLastName(''))
      dispatch(changeEmail(''))
    })
    .catch(() => {
      console.log('error')
    })

