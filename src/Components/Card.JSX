const Card = ({ name, image, description, id }) => {
      return (
      <div className="card">
            <img src={image} alt={name} />
            <div className="card__info">
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
      </div>
      );
      }

export default Card;