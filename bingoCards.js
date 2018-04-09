var BingoCard = function(tmpValMin,tmpValMax,tmpNumRows,tmpNumCols) {
	this.valMax = 65;
	this.valMin = 0;
  
  this.isPad0 = true;
	this.isCenterImg = false;
	this.freeStr = 'FREE';
  this.isCenterFree = true;
  
	this.fontW = 100;
	this.fontSize = 250;
 
  /*
  this.cellH = 458.0;
	this.cellW = 336.0;
	this.gridH = 14.0;
	this.gridW = 15.0;
	this.startX = 60.0;
	this.startY = 406.0;
	this.cardH = 2822.0;
	this.cardW = 1181.0;
  */

  this.numCenter = 13;
	this.numCells = 25;
	this.numCols = 5;
	this.numRows = 5;
	this.deckStr = '';
	this.cellDat = [];
	this.numCards = 5;
  this.deck = [];
	this.font = '';
  this.color = 'Black';
  
  !!tmpNumCols ? tmpNumCols : tmpNumCols = this.numCols;
  !!tmpNumRows ? tmpNumRows : tmpNumRows = this.numRows;

  this.numCells = tmpNumCols * tmpNumRows;
  this.numCenter = Math.round(this.numCells / 2);

  if(typeof tmpValMin !== 'undefined') { this.valMin = tmpValMin; }
  if(typeof tmpValMax !== 'undefined') { this.valMan = tmpValMax; }
};

function genCells(xCurCard) {
  //var tmpCurCard = curCard00;
  var tmpCurCard = xCurCard;

  tmpCurCard.deckStr += tmpCurCard.numCards;
  tmpCurCard.deckStr += "~" + tmpCurCard.numCells;
  tmpCurCard.deckStr += "~" + tmpCurCard.valMin;
  tmpCurCard.deckStr += "~" + tmpCurCard.valMax;
  
  var curW = 1;
	var curH = 1;
	var cardMax = 0;
	var _g1 = 0;
  var _g = tmpCurCard.numCells * tmpCurCard.numCards + 1;

	while(_g1 < _g) {
		
		if(cardMax != tmpCurCard.numCenter - 1) {
			if(tmpCurCard.valMin < 1) {
				tmpCurCard.cellStr = Math.round(Math.random() * tmpCurCard.valMax);  
			} else {
				tmpCurCard.cellStr = Math.round(Math.random() * tmpCurCard.valMax);
			}
			if(tmpCurCard.isPad0 && tmpCurCard.cellStr.length < 2 || parseInt(tmpCurCard.cellStr) < 10) {
				tmpCurCard.cellStr = '0' + tmpCurCard.cellStr;
			}
		} else {
			tmpCurCard.cellStr = tmpCurCard.freeStr;
		}
    tmpCurCard.cellDat.push(tmpCurCard.cellStr);
    tmpCurCard.deckStr += '~' + tmpCurCard.cellStr;

		++curW;
		if(curW > tmpCurCard.numCols) {
			curW = 1;
			++curH;
    }
    
    ++cardMax;
		if(cardMax > tmpCurCard.numCells) {
			cardMax = 1;
    }
    _g1++;
  }
  return tmpCurCard;
}

var curCard = new BingoCard();
curCard = genCells(curCard);

console.log(curCard.deckStr);