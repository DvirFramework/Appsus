
export function About() {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            borderBottom: '2px solid #333',
            paddingBottom: '10px',
            marginBottom: '20px',
        },
        section: {
            marginBottom: '20px',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
        },
        listItem: {
            marginBottom: '10px',
        },
    }



    return (
        <section style={styles.container}>
            <h1 style={styles.heading}>Welcome to APPSUS</h1>
            <p>
                APPSUS is a collaborative venture brought to life by the talented developers Dvir and Amir. With a shared passion for innovation and an unwavering commitment to excellence, we've created a distinctive and user-friendly application experience.
            </p>

            <div style={styles.section}>
                <h2>Project Details</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Project Name: APPSUS</li>
                    <li style={styles.listItem}>Developers: Dvir, Amir</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2>About the Project</h2>
                <p>
                    APPSUS goes beyond being just an application; it's a testament to creativity, teamwork, and a shared vision. With a focus on delivering cutting-edge features and a seamless user interface, our goal is to enhance the way users engage with technology.
                </p>
            </div>

            <div style={styles.section}>
                <h2>Meet the Developers</h2>
                <p>
                    <strong>Dvir:</strong> The visionary mind behind the project, Dvir's dedication and expertise have shaped the project's direction, ensuring it meets the highest standards.
                </p>
                <p>
                    <strong>Amir:</strong> A skilled developer with a knack for problem-solving, Amir's technical prowess and attention to detail played a crucial role in bringing the project to fruition.
                </p>
            </div>

            <div style={styles.section}>
                <h2>Our Mission</h2>
                <p>
                    At APPSUS, we believe in pushing the boundaries of what's possible. Our mission is to provide users with a dynamic and enjoyable experience, setting new standards for innovation and functionality.
                </p>
            </div>

            <div style={styles.section}>
                <h2>Connect With Us</h2>
                <p>
                    Follow us on social media for the latest updates and insights:
                </p>
                <ul>
                    <li>Twitter: @appus_devs</li>
                    <li>Instagram: @appus_official</li>
                    <li>Facebook: /appusdevelopers</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2>Project Highlights</h2>
                <ul>
                    <li>Explore the endless possibilities with APPSUS.</li>
                    <li>Stay connected and be part of our growing community.</li>
                    <li>Enjoy a seamless and intuitive user experience.</li>
                    <li>Your feedback shapes the future of APPSUS.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2>Get Involved</h2>
                <p>
                    Join the APPSUS community today!
                </p>
                <ul>
                    <li>Download the app: [App Store] [Google Play]</li>
                    <li>Share your experience: #APPSUSJourney</li>
                </ul>
            </div>

            <p>
                Thank you for choosing APPSUS. We're excited to have you on board!
            </p>

            <p>Best Regards, The APPSUS Team</p>
        </section>
    )
}
