
var data = { 
  livros: [{titulo: 'titulo de teste',autor:"autor de teste", checked:true},{titulo:'novo titulo de teste',autor: 'novo autor de teste',checked:false}],
  cabecalho: 'Livos preferidos',
  novoLivro: '',
  novoAutor: '' 
};
  new Vue({ 
    el: '#app', 
    data: data,
    methods: {
      addLivro: function() {
        var titulo  = this.novoLivro.trim();
        var autor = this.novoAutor.trim();
        if (titulo && autor) {
          this.livros.push({
            titulo: titulo,
            autor: autor,
            checked: false
          });
          this.novoLivro = '';
          this.novoAutor = '';
        }
      }
    }
  });