const BingoCard = function(tmpValMin,tmpValMax,tmpNumRows,tmpNumCols) {
	this.valMax = 99;
	this.valMin = 0;
	
	this.init = false;
	this.isPad0 = true;
	this.isNum = true;
	this.isCenterImg = false;
	this.freeStr = '( FREE )';
  this.isCenterFree = true;
	
	//this.fontW = 100;
	this.topFontSize = 64;
	this.cellFontSize = 32;
	this.freeFontSize = 22;

	this.topFontColor = '#000000';	// black
	this.cellFontColor = '#000000';	// black
	this.freeFontColor = '#800000'; //dark red
	this.fillColor = '#000000';	// black

	this.charMax = 12;

  /*
  this.cellH = 458.0;
	this.cellW = 336.0;
	this.gridH = 14.0;
	this.gridW = 15.0;
	this.cyclesX = 60.0;
	this.cyclesY = 406.0;
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
	this.cellStr = '';
	
  !!tmpNumCols ? tmpNumCols : tmpNumCols = this.numCols;
  !!tmpNumRows ? tmpNumRows : tmpNumRows = this.numRows;

  this.numCells = tmpNumCols * tmpNumRows;
  this.numCenter = Math.round(this.numCells / 2);

  if(typeof tmpValMin !== 'undefined') { this.valMin = tmpValMin; }
	if(typeof tmpValMax !== 'undefined') { this.valMan = tmpValMax; }
	
};

	function initVals() {
	}

function genCells(tmpCurCard) {
	if(!this.init) {
		this.init = true;
	}
 // tmpCurCard.deckStr += tmpCurCard.numCards;
 // tmpCurCard.deckStr += "~" + tmpCurCard.numCells;
 // tmpCurCard.deckStr += "~" + tmpCurCard.valMin;
 // tmpCurCard.deckStr += "~" + tmpCurCard.valMax;
 
	tmpCurCard.deckStr = '';
  let curW = 1;
	let curH = 1;
	let cardMax = 0;
	let cycles = 0;
  let finish = tmpCurCard.numCells * tmpCurCard.numCards;
		
	for(; cycles < finish ;) {		
		if(cardMax != tmpCurCard.numCenter - 1) {
			if(tmpCurCard.isNum) {
				tmpCurCard.cellStr = Math.round(Math.random() * tmpCurCard.valMax);  		
			if(tmpCurCard.isPad0) {
					tmpCurCard.cellStr = pad(tmpCurCard.cellStr, cardMax.len);
				}
				tmpCurCard.deckStr += tmpCurCard.cellStr;
			} else {
				tmpCurCard.cellStr = arrDat[Math.floor(Math.random() * tmpCurCard.valMax)];
				tmpCurCard.deckStr += tmpCurCard.cellStr;
				if(cycles !== cardMax - 1) {
					tmpCurCard.deckStr += '\n';
				}
			}
		} else {
			tmpCurCard.cellStr = tmpCurCard.freeStr;
		}
		if(!this.init)  {
    tmpCurCard.cellDat.push(tmpCurCard.cellStr);
		} else {
			tmpCurCard.cellDat[cycles] = tmpCurCard.cellStr;
		}
		++curW;
		if(curW > tmpCurCard.numCols) {
			curW = 1;
			++curH;
    }
    
    ++cardMax;
		if(cardMax > tmpCurCard.numCells) {
			cardMax = 1;
		}
    cycles++;
  }
  return tmpCurCard;
}

//curCard = genCells(curCard);
//console.log(curCard.deckStr);