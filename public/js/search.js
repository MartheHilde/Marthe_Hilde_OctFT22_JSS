function searchForMemes() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('memeInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("memes-table");
    tr = table.getElementsByTagName('tr');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }