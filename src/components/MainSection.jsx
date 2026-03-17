import './MainSection.css';
import ProfileSection from './ProfileSection';
import CardList from './CardList';

const posts = 
   [
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg",
            imgAlt: "Psychopomp",
            title: "Psychopomp",
            desc: "Japanese Breakfast"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg",
            imgAlt: "let's go",
            title: "let's go",
            desc: "In Love With A Ghost"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg",
            imgAlt: "The Beautiful Game",
            title: "The Beautiful Game",
            desc: "Vulfpeck"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg",
            imgAlt: "Jane Doe",
            title: "Jane Doe",
            desc: "Converge"
        },
    ]
const profile = {
    profileImgSrc: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
    userName: "Jane Doe",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️",
    nbPost: posts.length,
    followers: 188,
    following: 206,
    posts,
}

function MainSection() {

  return (
        <main>
        <ProfileSection profile={profile}/>
        <CardList profile={profile}/>
        </main>

);
}

export default MainSection;