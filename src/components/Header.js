export default function Header() {
    return (
      <header style={{ textAlign: 'center', padding: '2rem 1rem', background: '#fff' }}>
        <h1>Kandula Dilip Kumar</h1>
        <p>Full Stack Developer | Node.js | React | Express | MongoDB</p>
        <nav style={{ marginTop: '1rem' }}>
          <a href="#projects" style={{ margin: '0 1rem' }}>Projects</a>
          <a href="/about" style={{ margin: '0 1rem' }}>About</a>
          <a href="/contact" style={{ margin: '0 1rem' }}>Contact</a>
        </nav>
      </header>
    );
  }
  