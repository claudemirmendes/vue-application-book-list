
var data = { 
  livros: [{titulo: 'titulo de teste',autor:"autor de teste", checked:true},{titulo:'novo titulo de teste',autor: 'novo autor de teste',checked:false}],
  cabecalho: 'Livos preferidos',
  novoLivro: '',
  novoAutor: '' 
};
var ItemsComp = Vue.extend({
  data: function () {
    return data;
  },
  template: '<ul>' + 
  '            <li v-for="livro in livros" :class="{ \'removido\' : livro.checked }">' +
  '               <div class="checkbox"> ' +
  '                 <label>' +
  '                   <input type="checkbox" v-model="livro.checked">' +
  '                   <big> {{ livro.titulo }} </big> -  <small>{{ livro.autor}}</small>' +
  '                 </label>' +
  '               </div>' +
  '             </li>' +
  '            </ul>'
});

var AlteraTituloComp = Vue.extend({
  data:  function(){
    return data;
  },
  template: '<input v-model="cabecalho"/>'
});

var AddItemComp = Vue.extend({
    data: function() {
      return data;
    },
  methods: {
    addLivro: function(){
      var titulo,autor; 
      titulo = this.novoLivro.trim();
      autor = this.novoAutor.trim();
      if (titulo) {
        this.livros.push({
          titulo: titulo,
          autor: autor,
          checked: false
        });
        this.novoLivro = '';
        this.novoAutor = '';
      }
    }
  },
  template:
    '<div>' +
    '  <input v-model="novoLivro" @keyup.enter="addLivro" ' +
    '     placeholder="Adicionar titulo do livro" type="text" class="form-control" /> ' +
    '   <input v-model="novoAutor" @keyup.enter="addLivro" '  +
    '       placeholder="Adicionar autor do livro" type="text" class="form-control"/> <br/>' +
    '   <span class="input-group-btn">' +
    '     <button @click="addLivro" class="js-add btn btn-primary btn-block" ' +
    '       type="button"> Adicionar </button>' +
    '    </span>' +
    '</div>'
});


Vue.component('items-comp', ItemsComp);
Vue.component('altera-titulo-comp', AlteraTituloComp);
Vue.component('add-item-comp', AddItemComp);

  new Vue({ 
    el: '#app', 
    data: data
  });