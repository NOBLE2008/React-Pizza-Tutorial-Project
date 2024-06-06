import "../index.css";
const Pizzas = (props) => {
  return (
    <div className="pizza">
      <div>
        <img src= {props.photoName} alt="" />
      </div>
      <div className="text-con">
        <div>
          <p id="name">{props.name}</p>
          <p id="ingredients">{props.ingredients}</p>
          <div id="ps">
          <p id="price">£{props.price}</p>
          <p id="stock">{props.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
