import React, { Component } from 'react'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Items from "./components/items/Items"
import Categories from './components/categories/Categories';
import ShowFullItem from './components/showFullItem/ShowFullItem';

export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          title: 'product-Name 2',
          image: 'https://picsum.photos/id/737/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 2.',
          price: '242',
          author: 'Emily Williams',
          id:1
        },
        {
          title: 'product-Name 24',
          image: 'https://picsum.photos/id/238/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 24.',
          price: '935',
          author: 'Robert Brown',
          id:2
        },
        {
          title: 'product-Name 82',
          image: 'https://picsum.photos/id/270/500/300',
          category: 'Sports',
          description: 'This is the description for product-Name 82.',
          price: '935',
          author: 'Emily Williams',
          id:3
        },
        {
          title: 'product-Name 42',
          image: 'https://picsum.photos/id/1072/500/300',
          category: 'Health',
          description: 'This is the description for product-Name 42.',
          price: '935',
          author: 'Emily Williams',
          id:4
        },
        {
          title: 'product-Name 69',
          image: 'https://picsum.photos/id/563/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 69.',
          price: '935',
          author: 'Michael Johnson',
          id:5
        },
        {
          title: 'product-Name 97',
          image: 'https://picsum.photos/id/189/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 97.',
          price: '935',
          author: 'John Doe',
          id:6
        },
        {
          title: 'product-Name 80',
          image: 'https://picsum.photos/id/157/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 80.',
          price: '935',
          author: 'Jane Smith',
          id:7
        },
        {
          title: 'product-Name 11',
          image: 'https://picsum.photos/id/132/500/300',
          category: 'Health',
          description: 'This is the description for product-Name 11.',
          price: '935',
          author: 'Robert Brown',
          id:8
        },
        {
          title: 'product-Name 71',
          image: 'https://picsum.photos/id/367/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 71.',
          price: '935',
          author: 'John Doe',
          id:9
        },
        {
          title: 'product-Name 55',
          image: 'https://picsum.photos/id/1026/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 55.',
          price: '935',
          author: 'Robert Brown',
          id:10
        },
        {
          title: 'product-Name 93',
          image: 'https://picsum.photos/id/104/500/300',
          category: 'Health',
          description: 'This is the description for product-Name 93.',
          price: '935',
          author: 'Robert Brown',
          id:11
        },
        {
          title: 'product-Name 42',
          image: 'https://picsum.photos/id/962/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 42.',
          price: '935',
          author: 'Jane Smith',
          id:12
        },
        {
          title: 'product-Name 44',
          image: 'https://picsum.photos/id/100/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 44.',
          price: '935',
          author: 'Jane Smith',
          id:13
        },
        {
          title: 'product-Name 54',
          image: 'https://picsum.photos/id/263/500/300',
          category: 'Sports',
          description: 'This is the description for product-Name 54.',
          price: '935',
          author: 'Robert Brown',
          id:14
        },
        {
          title: 'product-Name 46',
          image: 'https://picsum.photos/id/931/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 46.',
          price: '935',
          author: 'John Doe',
          id:15
        },
        {
          title: 'product-Name 47',
          image: 'https://picsum.photos/id/1/500/300',
          category: 'Sports',
          description: 'This is the description for product-Name 47.',
          price: '935',
          author: 'John Doe',
          id:16
        },
        {
          title: 'product-Name 66',
          image: 'https://picsum.photos/id/264/500/300',
          category: 'Entertainment',
          description: 'This is the description for product-Name 66.',
          price: '935',
          author: 'Michael Johnson',
          id:17
        },
        {
          title: 'product-Name 100',
          image: 'https://picsum.photos/id/73/500/300',
          category: 'Technology',
          description: 'This is the description for product-Name 100.',
          price: '935',
          author: 'Michael Johnson',
          id:18
        },
        {
          title: 'product-Name 30',
          image: 'https://picsum.photos/id/724/500/300',
          category: 'Sports',
          description: 'This is the description for product-Name 30.',
          price: '935',
          author: 'Robert Brown',
          id:19
        },
        {
          title: 'product-Name 39',
          image: 'https://picsum.photos/id/630/500/300',
          category: 'Sports',
          description: 'This is the description for product-Name 39.',
          price: '935',
          author: 'Jane Smith',
          id:20
        },
        {
          title: 'Shtores',
          image: 'https://picsum.photos/id/620/500/300',
          category: 'Sports',
          description: 'This is the description for enmvoneo.',
          price: '274',
          author: 'Jine Anna',
          id:21
        }
      ],
      showFullItem : false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)


  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item = {this.state.fullItem}/>}
        <Footer />
      </div>
    )
  }

onShowItem(item){
  this.setState({ fullItem : item })
  this.setState({showFullItem : !this.state.showFullItem})
}  

chooseCategory(category){
  if (category === "All"){
    this.setState({currentItems:this.state.items})

  }
  this.setState({
    currentItems:this.state.items.filter(el => el.id !== category)
  })
  }

deleteOrder(id){
  this.setState({orders:this.state.orders.filter(el=> el.id !== id)})
 
}

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id == item.id){
        isInArray = true
      }
    })
    if (!isInArray){
      this.setState({orders:[...this.state.orders, item]})
    }
  }
}

export default App
