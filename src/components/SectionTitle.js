export default function SectionTitle({ title }) {
    return (
      <h2 style={{
        fontSize: '1.8rem',
        borderBottom: '2px solid #ccc',
        paddingBottom: '0.5rem',
        margin: '2rem 0 1rem',
      }}>
        {title}
      </h2>
    );
  }
  