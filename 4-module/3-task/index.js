/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  for (var i = 0 ; i < table.rows.length; i++) {
    
    let rows = table.rows[i];

    for (let j = 0; j < rows.cells.length; j++) {

      let status = rows.cells[3].getAttribute('data-available');
      if (status === null) {
        rows.hidden = true;
      }
      else  (status === 'true') ? rows.classList.add('available')  : rows.classList.add('unavailable');   

      if (rows.cells[j].innerText==='m') {rows.classList.add('male');}
      else if (rows.cells[j].innerText==='f') {rows.classList.add('female');}

      if (Number(rows.cells[1].innerText) < '18') rows.style.textDecoration = 'line-through';
    }
  }
}