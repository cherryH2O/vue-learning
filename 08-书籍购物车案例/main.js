const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name:'《算法导论》',
        date:'2006-09',
        price:85.00,
        count:'1',
      },
      {
        id: 2,
        name:'《Unix编程艺术》',
        date:'2006-02',
        price:59.00,
        count:'1',
      },
      {
        id: 3,
        name:'《编程珠玑》',
        date:'2008-109',
        price:39.00,
        count:'1',
      },
      {
        id: 4,
        name:'《代码大全》',
        date:'2006-03',
        price:128.00,
        count:'1',
      }
    ]
  },
  methods: {
    getFinalPrice(price){
      return '¥'+price.toFixed(2)
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // 1. for(let i=0;i<this.books.length;i++)
      // let totalPrice = 0;
      // for(let i=0;i<this.books.length;i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice


      // 2. for(let i in this.books)
      // let totalPrice = 0;
      // for(let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice

      // 3. for(let item of this.books)
      // let totalPrice = 0;
      // for(let item of this.books) {
      //   totalPrice += item.price*item.count
      // }
      // return totalPrice


      // 4.reduce 作用——对数组中所有的内容进行汇总（相加或相乘）
      // filter 中的回调函数有一个要求：必须返回一个boolean
      // true：函数内部会自动将这次回调的n加入这个新的数组中
      // false：函数内部会自动过滤n
      // map 函数的使用 返回的值作为新值加入数组中
      return this.books.map(n=> n.price * n.count).reduce((pre,n)=>pre+n);
    }

  },
  filters: {
    showPrice(price) {
      return '¥'+price.toFixed(2)
    }
  }

})