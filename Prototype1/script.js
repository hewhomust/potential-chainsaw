var rows = [];
var columns = [];

function choose(cell, row, column){
	cell.classList.add('chosen');
	rows.push(row);
	columns.push(column);
	console.log('!!!Recieved a click!!!')
	console.log('Rows: ' + rows + '    Columns: ' + columns);
	var averageRow = calculateAverageRow();
	var averageCol = calculateAverageCol();
	highlightAverageCell(averageRow, averageCol);
}

function calculateAverageRow(){
	var rowSum = 0;
	for(i=0;i<rows.length;i++){
		rowSum += rows[i];
	}
	var rowsAve = Math.round(rowSum/rows.length);
	console.log('rowsAve: ' + rowsAve);
	return rowsAve;
}

function calculateAverageCol(){
	var colSum = 0;
	for(i=0;i<columns.length;i++){
		colSum += columns[i];
	}
	var colAve = Math.round(colSum/columns.length);
	console.log('colAve: ' + colAve);
	return colAve;
}

function highlightAverageCell(averageRow, averageCol){
	removeAverage();
	var tr = document.getElementsByTagName('tr')[averageRow];
	var td = tr.getElementsByTagName('td')[averageCol];
	td.classList.add('average');
}

function removeAverage(){
	var tds = document.getElementsByTagName('td');
	for(i=0; i<tds.length; i++){
		tds[i].classList.remove('average');
	}
}
