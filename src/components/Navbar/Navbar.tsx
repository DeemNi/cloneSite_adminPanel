import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src='logo.svg' alt='logo' />
        <span>Hourly Admin Panel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" />
        <img src="/app.svg" alt="app" />
        <img src="/expand.svg" alt="expand" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" alt="user" />
          <span>Kate</span>
        </div>
        <img src="/settings.svg" alt="settings" />
      </div>
    </div>
  )
}

export default Navbar