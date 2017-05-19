// jquery for side nav---------------------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("big").style.marginLeft = "15%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("big").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

//begin vue below---------------------------------------------------

Vue.component('row-article', {
  template: '#article-template',
  props: ['item', 'index'],
  data: function() {
    return {
      articleShow: 0,
      linked: [],
      small: false,
      big: false
    }
  },
  methods: { //ADD FUNCTION HERE TO REPLACE XML
    showHide: function(){
      this.articleShow = 0
      this.big=false;
      this.small=false;
      },
      showLinked: function(evt){
        console.log(evt.target.id)
        this.$http.post('http://localhost:8080/linked', {id: evt.target.id}).then(function(data, status){
          this.linked = this.fixArticle(data.body)
          this.big = true
          this.small = true
          this.articleShow = evt.target.id
        })
      },
      fixArticle: function(item){

          item.snippet = item.snippet.replace(/(&quot;)/g, '"')
          item.snippet = item.snippet.replace(/(&#032;)/g, '<br>')

        return item;
      }
  }
})


var fillPage = new Vue({
  el: '#big', //figure out name, reorganize front end
  data: {
    content: [] //should this be array?
  },
  created: function(){
    this.getData()
  },
  methods: {
    getData: function(){
      this.$http.get('http://localhost:8080/articles').then(function(data, status) {
        // console.log(data.body)
        var correct = this.fixArticle(data.body)
        fillPage.$set(fillPage, 'content', correct);
      })
    },
      fixArticle: function(array){
        // console.log(array,"this is fixed")
        for(item of array){
          item.snippet = item.snippet.replace(/(&quot;)/g, '"')
          item.snippet = item.snippet.replace(/(&#032;)/g, '<br>')
        }
        return array;
      }
  }
});

