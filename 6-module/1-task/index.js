/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
  
    let head = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    let trr = this.thead.insertRow(-1);
    for (let i = 0; i < head.length; i++) {
      let th = document.createElement('th');             
      th.innerHTML = head[i];
      trr.appendChild(th);
    }

    for (let i = 0; i < rows.length; ++i) {   
      let row = rows[i];
      let tr = document.createElement('tr');

      let properties = ['name', 'age', 'salary', 'city', ''];
      for (let j = 0; j < properties.length; ++j) {   
        let td = document.createElement('td');
        td.innerHTML = row[properties[j]];
        if (j==properties.length-1) {
          td.innerHTML = "";
          const button = document.createElement("button");
          button.innerHTML = "X";
          button.onclick = () => {tr.remove();}
          td.appendChild(button);
        }
        tr.appendChild(td);
      }
      this.tbody.appendChild(tr);
      this.table.appendChild(this.tbody);
    }  
    this.elem = this.table;
  }
}
