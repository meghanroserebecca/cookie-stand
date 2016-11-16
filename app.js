'use strict';

var hours = ['6am', '7am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale) {
  this.name = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCustomerCookieSale = avgCustomerCookieSale;
  this.cookiesPerHour = [];
  this.total = 0;
  this.openHours = 15;
}

CookieStore.prototype.logStoreName = function () {
  console.log(this.name);
};

CookieStore.prototype.customersPerHour = function getRandomIntInclusive() {
  var min = Math.ceil(this.minHourlyCustomers);
  var max = Math.floor(this.maxHourlyCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

CookieStore.prototype.cookiesByTheHour = function () {
  //var total = 0;
  for (var i = 0; i < this.openHours; i++) {
    //console.log(this.customersPerHour()); <--how to check stuff
    var numCookies = Math.round(this.customersPerHour() * this.avgCustomerCookieSale);
    this.cookiesPerHour.push(numCookies);
    this.total += numCookies;
  };
};

CookieStore.prototype.toHTML = function () {
  this.cookiesByTheHour();
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  //var blankTableHeader = document
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.openHours; i++){
    //var hourlyTableData1 = document.createElement('td');
    var hourlyTableData2 = document.createElement('td');
    //hourlyTableData1.textContent = this.hours[i];
    hourlyTableData2.textContent = this.cookiesPerHour[i];
    //tableRow.appendChild(hourlyTableData1);
    tableRow.appendChild(hourlyTableData2);
  }
  totalTableData.textContent = this.total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};

function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++){
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }
  totalTableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
}

renderHeaderRow();

var pike = new CookieStore('1st & Pike', 23, 65, 6.3);
console.log(pike);
pike.toHTML();
console.log(pike.cookiesPerHour);
console.log(pike.total);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 23, 1.2);
console.log(seaTacAirport);
seaTacAirport.toHTML();
console.log(seaTacAirport.cookiesPerHour);
console.log(seaTacAirport.total);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
seattleCenter.toHTML();
console.log(seattleCenter.cookiesPerHour);
console.log(seattleCenter.total);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);
capitolHill.toHTML();
console.log(capitolHill.cookiesPerHour);
console.log(capitolHill.total);

var alki = new CookieStore('Alki', 2, 16, 4.6);
console.log(alki);
alki.toHTML();
console.log(alki.cookiesPerHour);
console.log(alki.total);

var storeForm = document.getElementById('chat_form');
var messages = [];

storeForm.addEventListener('submit', handleStoreSubmit);

function handleStoreSubmit(event) {
  event.preventDefault();
  console.log(event);

  var storeName = event.target.store_name.value;
  var minHourlyCustomers = parseInt(event.target.min_cust.value);
  var maxHourlyCustomers = parseInt(event.target.max_cust.value);
  var avgCustomerCookieSale = parseInt(event.target.avg_cookies.value);

  var newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale);
  messages.push(newStore);
  console.log(newStore);
  newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale);
  newStore.toHTML();

  event.target.store_name.value = '';
  event.target.min_cust.value = '';
  event.target.max_cust.value = '';
  event.target.avg_cookies.value = '';
}

/*var cookieStoreHourlySales = [pike, seaTacAirport, seattleCenter, capitolHill, alki];

function sumHourlyTotals(){
  result = [];
  for (var i = 0; i < cookieStoreHourlySales.length; i++) {
    return cookieStoreHourlySales[i].cookiesPerHour;
    for (var k = 0; k < cookiesPerHour.length; k++)

  };
}

sumHourlyTotals();
/*function renderFooterRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var totalTableFooter = document.createElement('th');
  var hourTotalsTableFooter;

  tableRow.appendChild(totalTableFooter);

  for (var i = 0; i < hours.length; i++) {
    hourTotalsTableFooter = document.createElement('td');
    hourTotalsTableFooter.textContent =
  }
}*/
