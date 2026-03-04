import './App.css'

function App() {

  return (
  <>
<html>
    <head>
        <title>Profile</title>
        <link href="profil.css" rel="stylesheet"/>
    </head>
    <body>
        <header className="header">
            <div className="header-logo">
                <img src="https://i.pinimg.com/736x/e8/88/cd/e888cd8d2708d8f0388198fd551a1a00.jpg" alt="site logo"/>
            </div>
            <h1>MySocial</h1>
        </header>
        <main>
            <div className="profile">
                <div className="profile-name-image">
                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                    <h1 className="profile-user-name">Jane Doe</h1>
                </div>
                <div className="profile-bio">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li>4 posts</li>
                        <li>188 followers</li>
                        <li>206 following</li>
                    </ul>
                </div>
            </div>
            <ul className="card-list">
                <li className="card">
                    <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg" alt="Psychopomp" />
                    <div className="card-description">
                        <h2>Psychopomp</h2>
                        <p>Japanese Breakfast</p>
                    </div>
                </li>
                
                <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg" alt="let's go" />
                        <div className="card-description">
                            <h2>let's go</h2>
                            <p>In Love With A Ghost</p>
                        </div>
                    </li>
                    
                    <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg" alt="The Beautiful Game" />
                        <div className="card-description">
                            <h2>The Beautiful Game</h2>
                            <p>Vulfpeck</p>
                        </div>
                    </li>
                    
                    <li className="card">
                        <img className="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg" alt="Jane Doe" />
                        <div className="card-description">
                            <h2>Jane Doe</h2>
                            <p>Converge</p>
                        </div>
                    </li>
                    
            </ul> 
        </main>

        <footer>
            <span>© 2026 Cégep Marie-Victorin</span>
        </footer>
    </body>
</html>

  </>
  )
}

export default App
