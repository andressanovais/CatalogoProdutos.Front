new Vue({
  el: "#app",
  data: {
    listaProdutos: [
      {
        id: 1,
        nome: "Notebook",
        marca: "Acer",
        preco: 2500,
        categoria: "Informática",
      },
      {
        id: 2,
        nome: "Geladeira",
        marca: "LG",
        preco: 5000,
        categoria: "Eletrodoméstico",
      },
      {
        id: 3,
        nome: "Toalha de Mesa",
        marca: "A/CASA",
        preco: 60,
        categoria: "Cama, Mesa e Banho",
      },
      {
        id: 4,
        nome: "Blusa Amarela",
        marca: "Adidas",
        preco: 100,
        categoria: "Vestuário",
      },
    ],
    categorias: [
      { id: 1, nome: "Informática" },
      { id: 2, nome: "Eletrodoméstico" },
      { id: 3, nome: "Celular" },
    ],
    novoProduto: {
      id: 5,
      nome: "",
      marca: "",
      preco: "",
      categoria: {}
    },
    novaCategoria: {
      nome: "",
      id: 3
    }
  },
  methods: {
    addProduto: function () {
      this.listaProdutos.push(this.novoProduto);
      this.novoProduto.id += 1;
    },
    addCategoria: function () {
      this.categorias.push(this.novaCategoria);
      this.novoProduto.categoria = this.novaCategoria.id;
    }
  },
  created(){
  }
});
