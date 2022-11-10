function myFunction() {
    var input, filter, section, div, td, td1,td2, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    section = document.getElementById("tbody");
    div = section.getElementsByTagName("tr");
  
  
  
    for (i = 0; i < div.length; i++) {
      td = div[i].getElementsByTagName("td")[0];
      td1 = div[i].getElementsByTagName("td")[1];
      td2 = div[i].getElementsByTagName("td")[2];

      if (td || td1 || td2) {
        var palabrasEnFiltro = filter.split(' ');
        var hallado = 0;
        for (var filtro of palabrasEnFiltro) {
          if (td.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            hallado++;
          }
          else if (td1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            hallado++;
          }
          else if (td2.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            hallado++;
          }
        }
  
        if (hallado === palabrasEnFiltro.length) {
          div[i].style.display = "";
        } else {
          div[i].style.display = "none";
        }
  
      }
      
    }


   
  
  
  
  }