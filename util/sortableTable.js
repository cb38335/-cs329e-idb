// parameters: tableId, tableHeads(this is multiple arguments)
function sortableTable(){
	var rows = arguments;
	var tableId = arguments[0];
	var table = document.getElementById(tableId);
	
	for (var x = 1; x < arguments.length; x++){
		// shows upDownArrow on table heads
		colIndex = arguments[x];
		tableHead = table.rows[0].cells[colIndex];
		var headText = tableHead.innerHTML;
		tableHead.innerHTML = headText + upDownArrowHtml;
		
		// click event
		tableHead.onclick = function(){
			var col = this.cellIndex;
			var currentTableHead = table.rows[0].cells[col].innerHTML;
			
			// ascending sort
			if (currentTableHead.search(String.fromCharCode(upArrowHtml.substring(2))) == -1){
				var rowLength = table.rows.length;
				var d = 0;
				while (rowLength-d != 1){
					var previousText = "";
					for (var i = 1; i < rowLength-d; i++){
						var currentText = table.rows[i].cells[col].innerHTML;
						if (previousText != ""){
							if (currentText.toLowerCase() < previousText.toLowerCase()){
								var currentRowItem = table.rows[i];
								var previousRowItem = table.rows[i-1];
								var parentNode = table.rows[i].parentNode;
								parentNode.insertBefore(currentRowItem, previousRowItem);
							}
						}
						previousText = currentText;
					}
					d++;
				}
				changeArrow(col, upArrowHtml, table, rows);
			} else {
				//descending sort
				var rowLength = table.rows.length;
				var d = 0;
				while (rowLength-d != 1){
					var previousText = "";
					for (var i = 1; i < rowLength-d; i++){
						var currentText = table.rows[i].cells[col].innerHTML;
						if (previousText != ""){
							if (currentText.toLowerCase() > previousText.toLowerCase()){
								var currentRowItem = table.rows[i];
								var previousRowItem = table.rows[i-1];
								var parentNode = table.rows[i].parentNode;
								parentNode.insertBefore(currentRowItem, previousRowItem);
							}
						}
						previousText = currentText;
					}
					d++;
				}
				changeArrow(col, downArrowHtml, table, rows);
			}
		}
	}
	
}

function changeArrow(keyCol, arrowHtml, table){
	for (var x = 1; x < arguments[3].length; x++){
		colIndex = arguments[3][x];
		tableHead = table.rows[0].cells[colIndex];
		var headTextRaw = tableHead.innerHTML;
		var headText = headTextRaw.substring(0, headTextRaw.length-1);
		if (keyCol == colIndex){
			tableHead.innerHTML = headText + arrowHtml;
		} else {
			tableHead.innerHTML = headText + upDownArrowHtml;
		}
	}
}

var upDownArrowHtml = "&#8597";
var upArrowHtml = "&#8679";
var downArrowHtml = "&#8681;";