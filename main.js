new Vue({
  el: "#app",
  data: {
    listaProdutos: [],
    categorias: [],
    novoProduto: {
      id: 0,
      nome: '',
      marca: '',
      preco: 0,
      categoriaId: 0
    },
    novaCategoria: ''
  },
  methods: {
    addProduto: function () {
      var self = this;

      axios
        .post('http://localhost:62468/produtos', 
          this.novoProduto)
        .then(function (response) {
          console.log(response);
          self.obterProdutos();
        })
        .catch(function (error) {
          console.log(error)
        })

        this.novoProduto.id = 0;
        this.novoProduto.nome = '';
        this.novoProduto.marca = '';
        this.novoProduto.preco = 0;
        this.categoriaId = 0;
    },
    addCategoria: function () {
      axios
        .post('http://localhost:62468/categorias', {
          nome: this.novaCategoria
        })
        .then(response => {
          console.log(response);
          this.categorias.push(response.data.categoria);
          this.novoProduto.categoriaId = response.data.categoria.id;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    obterProdutos: function () {
      axios
        .get('http://localhost:62468/produtos')
        .then(response => {
          this.listaProdutos = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    obterCategorias: function() {
      axios
        .get('http://localhost:62468/categorias')
        .then(response => {
          this.categorias = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    carregarDados: function()
    {
      this.obterProdutos();
      this.obterCategorias();
    }
  },
  created(){
    this.carregarDados();
  }
});