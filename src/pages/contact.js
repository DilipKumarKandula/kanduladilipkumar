import Head from 'next/head';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Kandula Dilip Kumar</title>
      </Head>

      <main style={{ padding: '2rem' }}>
        <SectionTitle title="Contact Me" />

        <p style={{ lineHeight: '1.6' }}>
          I'm always open to new opportunities, collaborations, or just a friendly hello. 
          Feel free to reach out to me through any of the platforms below.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <p><strong>Email:</strong> <a href="mailto:kanduladilip.dev@gmail.com">kanduladilip.dev@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kanduladilipkumar" target="_blank">linkedin.com/in/kanduladilipkumar</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/kanduladilip" target="_blank">github.com/kanduladilip</a></p>
        </div>

        <SectionTitle title="Message Form (Optional)" />
        <p>(This is a static form; no backend email handler is connected yet.)</p>

        <form style={{ marginTop: '1rem', maxWidth: '500px' }}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea placeholder="Your Message" required rows="5" style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </main>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  margin: '0.5rem 0',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#0070f3',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
};
