/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
 
  friends.map ( name => { 
    let li = document.createElement('li');
    li.innerHTML = name.firstName + ' ' + name.lastName;
    ul.appendChild(li);
  } )
  return document.body.insertBefore(ul, document.body.firstChild);
}