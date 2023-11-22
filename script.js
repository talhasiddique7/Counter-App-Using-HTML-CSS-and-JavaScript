let count = 0;
let highestCount = 0;
let savedData = [];

function updateCount() {
  const countDisplay = document.getElementById('count');
  countDisplay.textContent = count;
}

function increase() {
  count++;
  if (count > highestCount) {
    highestCount = count;
  }
  updateCount();
}
function reset(){
    count=0;
    updateCount();
}
function decrease() {
    if(count==0){
        count=0;
    }else{
    count--;

    }
  updateCount();
}

function saveData() {
  const userName = prompt('Enter your name:');
  const description = prompt('Enter a description (optional):');
  const date = new Date().toLocaleString();

  savedData.push({ userName, description, date, count });

  alert('Data saved successfully!');
}

function showSavedData() {
  let dataToShow = '';
  savedData.forEach((data, index) => {
    dataToShow += `Entry ${index + 1}: \n`;
    dataToShow += `Name: ${data.userName}\n`;
    dataToShow += `Description: ${data.description || 'No description provided'}\n`;
    dataToShow += `Date: ${data.date}\n`;
    dataToShow += `Count: ${data.count}\n\n`;
  });

  alert(dataToShow || 'No saved data found.');
}
