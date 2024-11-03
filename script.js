const elem = document.getElementById('input-field')
// const btn= document.getElementById('input-btn')

function Search(event) {
   
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = `https://www.google.com/search?q=${elem.value}` ;
    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = `https://www.google.com/search?q=${elem.value}` ;

}
elem.addEventListener("keyup", Search);
const elem2 = document.getElementById('input-field2')
// const btn= document.getElementById('input-btn')

function Search(event) {
   
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'https://www.google.com/search?q=' + elem2.value;
    }
  }
function SearchBtn(){
    if(!elem2.value) return;
    window.location = 'https://www.google.com/search?q=' + elem2.value;

}
elem2.addEventListener("keyup", Search);