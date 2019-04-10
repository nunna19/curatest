import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


let cardComponents = [{
  
  card: 'Diabetes'
},{

  card: 'Cholesterol'
},{
 
  card: 'Hypertension'
},{
  
  card: 'Weight-Loss'
},
]


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardComponents:cardComponents,
      filterCardComponent:[]
    }
  }


  updateSearch = (e) =>{
  
    let cardComponents =[...this.state.cardComponents]
    let text = e.target.value
    let filterCard= cardComponents.filter((tag) =>{
     
    return tag.card.toLocaleLowerCase().includes(text)
  
    })
    if (text == ''){
      filterCard = []
    }
    this.setState({
      filterCardComponent:filterCard,
      search:text
    })
  }



showComponent = () => {

  const listComponents = this.state.filterCardComponent.map((card,i) => {
       
    return (
    <div key ={i}>
        <p><Link to={`./${card.card}`}>{card.card}</Link></p>
    </div>
    )  
 })
 return listComponents
}




  render() {
    return (
      <div className="NavBar">
     
     <img width="20px" src="./search.png" alt=""/><input type="text" value = {this.state.search} placeholder="Search..." 
          onChange={this.updateSearch}
          />
 
     {this.showComponent()}
    
   
      </div>
    );
  }
}

export default NavBar;