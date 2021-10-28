import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	// const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: "white" }}>Get in Touch</h1>
				<p
					style={{ color: "white" }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<div
					style={{ color: "white" }}
					className={styles.contactOptions}
				>
					<a
						href='tel:826900546'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fas fa-phone-alt' />
					</a>
					<a
						href='mailto: Jai6013@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<i className='far fa-envelope'></i>
					</a>
					<a
						href='https://twitter.com'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://github.com/jai6013'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
					</a>

					<a
						href='https://www.linkedin.com/in/jai-yadav-4b2635140/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</div>
			<div
				style={{ background: "white" }}
				className={styles.line}
			/>
			<div
				style={{ color: "white" }}
				className={styles.copyright}
			>
				Designed and build by Jai Yadav, 2021 All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
