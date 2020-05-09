import React, { useState } from 'react';
import Head from 'next/head';

import { Input, InputNumber, Button } from 'antd';
import axios from 'axios';
import { toaster, Spinner } from 'evergreen-ui';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/contact.module.scss';

export default function contact() {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		company: '',
		number: '',
		about_us: '',
		budget: '',
		project: '',
	});

	const handleChange = (input, value) => {
		setForm({
			...form,
			[input]: value,
		});
	};

	const handleSubmit = () => {
		if (!form.company) return setForm({ ...form, company: 'N/A' });
		if (!form.number) return setForm({ ...form, number: 'N/A' });

		sendFeedback();
	};

	const sendFeedback = () => {
		const data = {
			service_id: 'gmail',
			template_id: 'template_kyYPGRF8',
			user_id: 'user_OQyWiC5XbcdNYgj5nqbJU',
			template_params: {
				name: form.name,
				email: form.email,
				company: form.company,
				number: form.number,
				about_us: form.about_us,
				budget: form.budget,
				project: form.project,
			},
		};

		axios
			.post('https://api.emailjs.com/api/v1.0/email/send', data)
			.then((res) => {
				setLoading(false);
				setForm({
					name: '',
					email: '',
					company: '',
					number: '',
					about_us: '',
					budget: '',
					project: '',
				});
				toaster.success('Mail sent!', {
					description: `Thank you for reaching out!!!`,
				});
			})
			.catch((err) => {
				setLoading(false);
				if (!err.response) {
					return toaster.danger('Unable to send email', {
						description: 'May be a network error',
					});
				}
				if (err.response.status === 400) {
					return toaster.danger('Unable to send email', {
						description: 'Must be a problem on our side',
					});
				}
			});
	};

	return (
		<MainLayout>
			<Head>
				<title>Talk To Us | StriTech</title>
			</Head>
			<div className={styles.contactMain}>
				<div className={styles.container}>
					<section className={styles.section}>
						<div className={styles.block}>
							<div>
								<p>Tell us about your project...</p>
								<h1>We're All Ears</h1>
							</div>
						</div>
						<div className={styles.block}>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setLoading(true);
									handleSubmit();
								}}
							>
								<div>
									<section>
										<span>
											<Input
												id='name'
												name='name'
												className={styles.input}
												value={form.name}
												required={true}
												onChange={(e) => {
													handleChange('name', e.target.value);
												}}
												placeholder='Name...'
											/>
										</span>
										<span>
											<Input
												id='email'
												name='email'
												className={styles.input}
												value={form.email}
												required={true}
												type='email'
												onChange={(e) => {
													handleChange('email', e.target.value);
												}}
												placeholder='Email...'
											/>
										</span>
									</section>
									<section>
										<span>
											<Input
												id='company'
												name='company'
												className={styles.input}
												value={form.company}
												onChange={(e) => {
													handleChange('company', e.target.value);
												}}
												placeholder='Company (optional)'
											/>
										</span>
										<span>
											<Input
												id='number'
												name='number'
												className={styles.input}
												value={form.number}
												onChange={(e) => {
													handleChange('number', e.target.value);
												}}
												placeholder='Phone number (optional)'
											/>
										</span>
									</section>
									<section>
										<span>
											<Input
												id='about_us'
												name='about_us'
												className={styles.input}
												value={form.about_us}
												required={true}
												onChange={(e) => {
													handleChange('about_us', e.target.value);
												}}
												placeholder='How did you hear about us?'
											/>
										</span>
										<span>
											<InputNumber
												id='budget'
												name='budget'
												className={styles.input}
												min={1}
												value={form.budget}
												required={true}
												type='number'
												onChange={(value) => {
													handleChange('budget', value);
												}}
												placeholder="What's your estimated budget?"
											/>
										</span>
									</section>
									<section>
										<span>
											<Input.TextArea
												id='project'
												name='project'
												className={[styles.textarea, styles.input].join(' ')}
												value={form.project}
												required={true}
												onChange={(e) => {
													handleChange('project', e.target.value);
												}}
												placeholder='Tell us about your project...'
											/>
										</span>
									</section>
								</div>
								<section>
									<Button htmlType='submit' size='large'>
										{loading ? <Spinner size={24} /> : 'Mail It!!!'}
									</Button>
								</section>
							</form>
						</div>
					</section>
					<section className={styles.section}></section>
				</div>
			</div>
		</MainLayout>
	);
}
