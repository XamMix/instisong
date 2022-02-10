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
  
  //console.log(dataInstituciones);

  return dataInstituciones;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
