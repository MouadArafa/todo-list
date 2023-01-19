

var textadd = document.getElementById("addtext");
var textfind = document.getElementById("findtext");
var list = document.getElementById("list");
var add = document.getElementById('addElem');

add.addEventListener('click', function() { 
var itemsByTagName = document.getElementsByTagName("li");
list.innerHTML += '<li><a href="#">'+textadd.value+'</a></li>';
textadd.value = "";
});

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('findtext');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
