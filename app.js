'use strict';

var hours = ['6am', '7am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale) {
  this.name = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCustomerCookieSale = avgCustomerCookieSale;
  this.cookiesPerHour = [];
  this.totalsArray = [];
  this.total = 0;
  this.grandTotal = 0;
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

CookieStore.prototype.sumHourlyTotals = function () {
  var totalsArray = [];
  var hourTotal;
  var cookiesPerHour = this.cookiesPerHour;

  for (var i = 0; i < hours.length; i++) {
    storeList[0].cookiesPerHour.length[0];
    for (var j = 0; j < cookiesPerHour.length; j++) {
      hourTotal += storeList[j].cookiesPerHour[i];
      totalsArray.push(hourTotal);
      this.grandTotal += hourTotal;
    }
  }
  totalsArray.push(grandTotal);
  return totalsArray;
};

sumHourlyTotals();
/*function renderFooterRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var totalTableFooter = document.createElement('th');
  var hourlyTableFooter;

  for (var i = 0; i < hours.length; i++){
    hourlyTableFooter = document.createElement('th');
    hourlyTableFooter.textContent = this.totalsArray[i];
    tableRow.appendChild(hourlyTableFooter);
  }
  totalTableFooter.textContent = 'Hourly Totals';
  tableRow.appendChild(totalTableFooter);

  storeTable.appendChild(tableRow);
}

renderFooterRow();*/



var pike = new CookieStore('1st & Pike', 23, 65, 6.3);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 23, 1.2);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);

var alki = new CookieStore('Alki', 2, 16, 4.6);

var storeList = [pike, seaTacAirport, seattleCenter, capitolHill, alki];

for (var i = 0; i < storeList.length; i++) {
  storeList[i].toHTML();
};

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

  if (isNaN(avgCustomerCookieSale)) {
    alert('Avg. Customer Cookies must be entered as number');
  } else {var newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale);
    messages.push(newStore);
    console.log(newStore);
    newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCustomerCookieSale);
    newStore.toHTML();
    storeList.push(newStore);
    console.log(storeList);
    event.target.store_name.value = '';
    event.target.min_cust.value = '';
    event.target.max_cust.value = '';
    event.target.avg_cookies.value = '';}
}

console.log(storeList);
