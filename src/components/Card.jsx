function Card(props) {
    return (
        <li className="card">
            <img className="card-image" src={props.post.imgSrc} alt={props.post.imgAlt} />
            <div className="card-description">
                <h2>{props.post.title}</h2>
                <p>{props.post.desc}</p>
            </div>
        </li>
    );
}

export default Card;