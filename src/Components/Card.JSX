const Card = (props) => {
      return (
      <div className="card">
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
      </div>
);
}

export default Card;