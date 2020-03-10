var Orange = (props) => {

  var onItemClick = (event) => {
    console.log('I got clicked from Orange');
  };

  return (
    <li onClick={onItemClick} >{props.data}</li>
  );
}

var Pineapple = (props) => {

  var onItemClick = (event) => {
    console.log('I got clicked from Pineapple');
  };

  return (
    <li onClick={onItemClick} >{props.data}</li>
  );
};

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hovered: false
    }
  }

  onItemClick(grocery) {
    console.log(grocery + ' got clicked from GroceryListItem');
    this.setState({
      done: !this.state.done
    });
  }

  onItemMouseOver() {
    this.setState({hovered: true});
  }

  onItemMouseOut() {
    this.setState({hovered: false});
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal',
      cursor: 'pointer'
    };

    return (
      <li style={style}
        onClick={this.onItemClick.bind(this, this.props.grocery)}
        onMouseOver={this.onItemMouseOver.bind(this)}
        onMouseOut={this.onItemMouseOut.bind(this)} >
        {this.props.grocery}
      </li>
    );
  }
};

var GroceryList = (props) => {
  return (
    <ul>
      {props.groceries.map((elem, ind) =>
        <GroceryListItem key={'grocery-' + ind} grocery={elem} />
      )}
    </ul>
  );
}

var App = () => {
  var groceryItems = ['Orange', 'Pineapple', 'Watermelon', 'Papaya', 'Mango'];
  return (
    <div>
      <h2>Grocery List</h2>
      <GroceryList groceries={groceryItems} />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
