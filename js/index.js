$(document).ready(function() {
    function onAdd() {
        var $ul, li, $li, $label, $div, $livro, $autor;
        livro = $('.js-novo-livro').val();
        autor = $('.js-novo-autor').val();
        if (livro === '') {
            return;
        }
        $ul = $('ul');
        $li = $('<li>').appendTo($ul);
        $div = $('<div>')
               .addClass('checkbox')
               .appendTo($li);

        $label = $('<label>').appendTo($div);
        $('<input>')
           .attr('type', 'checkbox')
           .addClass('js-livro')
           .attr('name','list')
           .click(toggleRemovido)
           .appendTo($label);

        $('<big>')
          .appendTo($label)
          .append(livro);

        $label.append(" - ");
        $('<small>')
          .appendTo($label)
          .append(autor);
        $('.js-novo-livro, .js-novo-autor').val('');
    }

    function toggleRemovido(ev) {
        var $el;
        $el = $(ev.currentTarget);
        $el.closest('li').toggleClass('removido');
    };
    $('.js-add').click(onAdd);
    $('.js-livro').click(toggleRemovido);
});
// Comando 1
var data = { 
  livros: [{titulo: 'titulo de teste',autor:"autor de teste", checked:true},{titulo:'novo titulo de teste',autor: 'novo autor de teste',checked:false}],
  cabecalho: 'Livos preferidos',
  novoLivro: '',
  novoAutor: '' 
};
  // Comando 2
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