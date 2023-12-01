export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          {' '}
          <a>Posts</a>
        </li>
        <li className="navbar-item">
          <a>Artists</a>
        </li>
        <li className="navbar-item">
          <a>Donations</a>
        </li>
        <li className="navbar-item">
          <a>Contact</a>
        </li>
        <li className="navbar-item">
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}