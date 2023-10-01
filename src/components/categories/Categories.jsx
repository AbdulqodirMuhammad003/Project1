import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
            id: 1,
            name: "All",
          },
        {
          id: 2,
          name: "Politics",
        },
        {
          id: 3,
          name: "Technology",
        },
        {
          id: 4,
          name: "Sports",
        },
        {
          id: 5,
          name: "Entertainment",
        },
        {
          id: 6,
          name: "Health",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category) => (
          <div onClick={() => this.props.chooseCategory(category.id)} key={category.id} >{category.name}</div>
        ))}
      </div>
    );
  }
}
// onClick={()=>this.props.chooseCategory(el.id)}

export default Categories;
