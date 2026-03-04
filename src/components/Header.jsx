import './Header.css';

function Header() {

  return (
      <head>
        <title>Profile</title>
        <link href="profil.css" rel="stylesheet"/>
        <header className="header">
            <div className="header-logo">
                <img src="https://i.pinimg.com/736x/e8/88/cd/e888cd8d2708d8f0388198fd551a1a00.jpg" alt="site logo"/>
            </div>
            <h1>MySocial</h1>
        </header>
    </head>
);
}

export default Header;