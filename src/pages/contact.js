import Head from 'next/head';
import Header from '@/components/Header';

export default function Contact() {
  const styles = {
    main: {
      maxWidth: '1024px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#000000',
    },
    intro: {
      fontSize: '1rem',
      color: '#000000',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    form: {
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      backgroundColor: '#ffffff',
    },
    label: {
      color: '#000000',
      fontWeight: '500',
    },
    input: {
      padding: '0.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      backgroundColor: '#ffffff',
    },
    textarea: {
      padding: '0.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      resize: 'vertical',
      backgroundColor: '#ffffff',
    },
    button: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    info: {
      flex: '1 1 250px',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      backgroundColor: '#ffffff',
    },
    infoHeading: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#000000',
    },
    infoText: {
      fontSize: '1rem',
      color: '#000000',
      marginBottom: '1rem',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '0.5rem',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
    },
  };

  return (
    <>
      <Header />
      <Head>
        <title>Contact - Dilip Kumar</title>
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>Get in Touch</h1>
        <p style={styles.intro}>
          I’d love to hear from you! Whether you have a question, want to collaborate,
          or just want to say hello, feel free to reach out.
        </p>

        <div style={styles.container}>
          <form style={styles.form}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required style={styles.input} />

            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required style={styles.input} />

            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="message" placeholder="Write your message..." rows="6" required style={styles.textarea} />

            <button type="submit" style={styles.button}>Send Message</button>
          </form>

          <div style={styles.info}>
            <h2 style={styles.infoHeading}>Contact Information</h2>
            <p style={styles.infoText}><strong>Email:</strong> kanduladilipkumar@example.com</p>
            <p style={styles.infoText}><strong>Location:</strong> Hyderabad, India</p>

            <h3 style={styles.infoHeading}>Connect With Me</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a href="https://github.com/DilipKumarKandula" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
              </li>
              <li style={styles.linkItem}>
                <a href="https://www.linkedin.com/in/dilipkumarkandula" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
              </li>
              <li style={styles.linkItem}>
                <a href="mailto:kanduladilipkumar@example.com" style={styles.link}>Email Me</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
