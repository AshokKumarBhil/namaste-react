const RestaurantCard = ({restaurant}) => {
  return (
    <div className="card">
      <img className="card-img" src={restaurant.image} alt={restaurant.name} />
      <div className="card-body">
        <h3>{restaurant.name}</h3>
        <p className="cuisines">{restaurant.cuisines.join(",")}</p>
        <div className="card-footer">
          <span className="rating">⭐{restaurant.rating}</span>
          <span className="price">{restaurant.price}</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
