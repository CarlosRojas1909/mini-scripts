// from one file to another so props will be present
// file#1
state = {
  ingredients: {
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  }
}
// file#2
//I am passing an objects as props , transforming object to array
const Burger = (props) => {

  let arrIngredients = Object.keys(props.ingredients); // ["salad", "bacon", "cheese", "meat"]
  arrIngredients = arrIngredients.map(ing => {
    return [...Array(props.ingredients[ing])].map((dc, index) => { // [ [undefined], [undefined], [undefined, undefined], [undefined, undefined] ]
      return <BurgerIngredient key={ing + index} type={ing} />
    })
  });
  // console.log(arrIngredients) [ [{}], [{}], [{},{}], [{},{}] ]
  arrIngredients = arrIngredients.reduce((acc, curr) => { //here, getting VALUES of each arrays(objects) and putting them in a big one
    return acc.concat(curr)
  }, [])
  // console.log(arrIngredients) [{…}, {…}, {…}, {…}, {…}, {…}]


}



adrian is mean