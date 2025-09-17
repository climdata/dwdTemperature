
var vuePRESENTATION = new Vue({
  el: '#presentation', 
  data: {
        uid: '0',
  },
  methods: {
     setPage: function(page) {
        this.currentPage = page;
        return false; 
     },

  },
  computed: {


  },
  filters: {
    lowercase: function (str) {
      return isoStr(str);
    },
  },
  mounted () { 
     this.inqFolders();

  },
  created () {
     this.inqTopics();
  }
}) 
