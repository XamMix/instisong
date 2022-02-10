function doGet() {
  const html = HtmlService.createTemplateFromFile('indexInstituciones');
  const output = html.evaluate();
  return output;
} 

function getDataInstituciones() {
  const SS = SpreadsheetApp.getActiveSpreadsheet();
  const sheetLISTADO_DE_INSTI = SS.getSheetByName('LISTADO DE INSTI');
  const dataInstituciones = sheetLISTADO_DE_INSTI.getDataRange().getDisplayValues();
  dataInstituciones.shift();
  const formInstituciones = document.getElementById('formInstituciones');
  fetch('https://sheet.best/api/sheets/f169a08e-cd34-4ea2-bc0d-21ad75736277');
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
  
  //console.log(dataInstituciones);

  return dataInstituciones;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
