//paint sera el nombre del elemento que pondremos en el html y le bindearemos el props:
// <paint  v-bind:book="books" ></paint>
Vue.component("paint", {
  //en props va el array del json
  props: ["book"],
  //en template el html que queremos poner en cada instancia
  template:
    //lleva estas comillas apuntando a la izquierda
    `
  <div  id="bookShow">
  <div v-for="book in book" class="mom">
  <div class="tapa"> 
    <img v-bind:src=book.portada >
  </div>
  <div class="info"> 
  <h4> {{book.titulo}} </h4>
  <p> {{book.descripcion}}</p>
  <a v-bind:href=book.detalle data-fancybox> <button class="button"> detalle</button>  </a>
</div>
  </div>
  </div>

  `,
  //esto no es necesario por que lo metemos como props
  data: function() {
    return {};
  }
});

var app = new Vue({
  el: "#vue-app",
  data: {
    books: []
  },
  created() {
    fetch("https://api.myjson.com/bins/1h3vb3", {
      method: "GET"
    })
      .then(function(response) {
        console.log(response);

        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      })

      .then(function(json) {
        //se llama el objeto apps y se iguala al json.books y yo lo que hacia era book=data.books
        app.books = json.books;
        console.log(app.books);
      })

      .catch(function(error) {
        console.log("Request failed: " + error.message);
      });
  },
  methods: {
    find: function finder() {
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
  }
});
