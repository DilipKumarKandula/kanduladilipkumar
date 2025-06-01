export default function ProjectCard({ title, description, url }) {
    return (
      <div style={{
        border: '1px solid #eee',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
      }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    );
  }
  