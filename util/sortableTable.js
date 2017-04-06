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
					var previousIndex = null;
					for (var i = 1; i < rowLength-d; i++){
						var currentIndex = i;
						
						if (previousIndex != null){
							var shouldSwitch = false;
							
							var previousText = table.rows[previousIndex].cells[col].innerText;
							var currentText = table.rows[currentIndex].cells[col].innerText;
							// Get rid of commas
							var previousTextWithoutComma = previousText.replace(/,/g, "");
							var currentTextWithoutComma = currentText.replace(/,/g, "");
							
							// Special case: texts are convertible to integers
							if (/^\d+$/.test(previousTextWithoutComma) && /^\d+$/.test(currentTextWithoutComma)){
								
								// Convert string into integer
								var previousNum = parseInt(previousTextWithoutComma);
								var currentNum = parseInt(currentTextWithoutComma);
								// compare integers
								if (previousNum > currentNum){
									shouldSwitch = true;
								}
							} else {
								// Normal case: texts are not convertible to integers
								if (previousText.toLowerCase() > currentText.toLowerCase()){
									shouldSwitch = true;
								}
							}
							
							// Switching
							if (shouldSwitch){
								var currentRowItem = table.rows[i];
								var previousRowItem = table.rows[i-1];
								var parentNode = table.rows[i].parentNode;
								parentNode.insertBefore(currentRowItem, previousRowItem);
							}
						}
						previousIndex = currentIndex;
					}
					d++;
				}
				changeArrow(col, upArrowHtml, table, rows);
			} else {
				//descending sort
				var rowLength = table.rows.length;
				var d = 0;
				while (rowLength-d != 1){
					var previousIndex = null;
					for (var i = 1; i < rowLength-d; i++){
						var currentIndex = i;
						
						if (previousIndex != null){
							var shouldSwitch = false;
							
							var previousText = table.rows[previousIndex].cells[col].innerText;
							var currentText = table.rows[currentIndex].cells[col].innerText;
							// Get rid of commas
							var previousTextWithoutComma = previousText.replace(/,/g, "");
							var currentTextWithoutComma = currentText.replace(/,/g, "");
							
							// Special case: texts are convertible to integers
							if (/^\d+$/.test(previousTextWithoutComma) && /^\d+$/.test(currentTextWithoutComma)){
								
								// Convert string into integer
								var previousNum = parseInt(previousTextWithoutComma);
								var currentNum = parseInt(currentTextWithoutComma);
								// compare integers
								if (previousNum < currentNum){
									shouldSwitch = true;
								}
							} else {
								// Normal case: texts are not convertible to integers
								if (previousText.toLowerCase() < currentText.toLowerCase()){
									shouldSwitch = true;
								}
							}
							
							// Switching
							if (shouldSwitch){
								var currentRowItem = table.rows[i];
								var previousRowItem = table.rows[i-1];
								var parentNode = table.rows[i].parentNode;
								parentNode.insertBefore(currentRowItem, previousRowItem);
							}
						}
						previousIndex = currentIndex;
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
