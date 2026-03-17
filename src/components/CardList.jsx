import './CardList.css';
import Card from './Card';

function CardList(props){
    return (
        <ul className="card-list">
            {props.profile.posts.map((post) => (
                <Card key={post.title} post={post} />
        ))}
        </ul>
    );
}

export default CardList;