
import './ProfileSection.css';

function ProfileSection(props) {

  return (
            <div className="profile">
                <div className="profile-name-image">
                    <img src={props.profile.profileImgSrc} alt=""/>
                    <h1 className="profile-user-name">{props.profile.userName}</h1>
                </div>
                <div className="profile-bio">
                    <p>{props.profile.des}</p>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li>{props.profile.nbPost} posts</li>
                        <li>{props.profile.followers} followers</li>
                        <li>{props.profile.following} following</li>
                    </ul>
                </div>
            </div>
);
}

export default ProfileSection;