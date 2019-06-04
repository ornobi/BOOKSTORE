var data;
fetch("https://api.myjson.com/bins/1h3vb3", {
  method: "GET",

  headers: {}
})
  .then(function(response) {
    console.log(response);

    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  })

  .then(function(json) {
    data = json;
    book = data.books;
    tapa = document.getElementsByClassName("tapa");
    info = document.getElementsByClassName("info");
    getImages(book);
    finder();
  })

  .catch(function(error) {
    console.log("Request failed: " + error.message);
  });

function getImages(book) {
  bukis = document.getElementById("bookShow");
  var tapas;
  var title;
  var pTitle;
  var description;
  var pDescription;
  var button;
  var divTapa;
  var divInfo;
  var fancy;
  for (var i = 0; i < book.length; i++) {
    fancy = document.createElement("a");
    fancy.setAttribute("href", book[i].detalle);
    fancy.setAttribute("data-fancybox", "");
    divMom = document.createElement("div");
    divMom.setAttribute("class", "mom");
    divTapa = document.createElement("div");
    divInfo = document.createElement("div");
    divTapa.setAttribute("class", book[i].titulo);
    divTapa.setAttribute("class", "tapa");
    divInfo.setAttribute("class", "info");
    tapas = document.createElement("img");
    tapas.setAttribute("src", book[i].portada);
    pDescription = document.createElement("P");
    description = document.createTextNode(book[i].descripcion);
    pDescription.appendChild(description);
    pTitle = document.createElement("h4");
    title = document.createTextNode(book[i].titulo);
    button = document.createElement("button");
    button.innerHTML = "Detalle";
    pTitle.appendChild(title);
    pDescription.appendChild(description);
    divInfo.appendChild(pTitle);
    divInfo.appendChild(pDescription);
    fancy.append(button);
    divInfo.appendChild(fancy);
    divTapa.appendChild(tapas);
    divMom.appendChild(divTapa);
    divMom.appendChild(divInfo);
    bukis.append(divMom);
  }
}
function nonDisplay() {
  var info = document.getElementsByClassName("info");
  for (var i = 0; i < book.length; i++) {
    info[i].style.display = "none";
  }
}

function test() {
  for (var i = 0; i < book.length; i++) {
    tapa[i].display = "none";
    if ((tapa[i].display = "none" == true)) {
      console.log("aaaaa");
    }
  }
}
function hoverDisplay() {
  for (var i = 0; i < book.length; i++) {
    tapa[i].addEventListener("mouseover", function() {
      this.style.display = "none";
      if ((this.style.display = "none")) {
        putisima();
      }
    });
  }
}

function finder() {
  var input, filter, container, mom, info, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  container = document.getElementById("bookShow");
  mom = container.getElementsByClassName("mom");
  for (i = 0; i < mom.length; i++) {
    info = mom[i].getElementsByTagName("h4")[0];
    txtValue = info.textContent || info.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      mom[i].style.display = "";
    } else {
      mom[i].style.display = "none";
    }
  }
}
/*for (var i = 0; i < info.length; i++) {
    info[i].addEventListener("mouseleave", function() {
      for (var i = 0; i < book.length; i++) {
        tapa[i].style.display = "";
        info[i].style.display = "none";
      }
    });
  }
}*/

/*
  function hoverDisplay() {
  for (var i = 0; i < book.length; i++) {
    tapa[i].addEventListener("mouseover", function() {
      this.style.display = "none";

      info[i].style.display = "";
    });
  }
  for (var i = 0; i < info.length; i++) {
    info[i].addEventListener("mouseleave", function() {
      for (var i = 0; i < book.length; i++) {
        tapa[i].style.display = "";
        this.style.display = "none";
      }
    });
  }
}
*/
