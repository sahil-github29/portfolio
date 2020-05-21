import React from 'react';
import {
	PageHeadingWithLines,
	InputField,
	TextArea,
	Button,
} from '../styled-components';
import './index.scss';

export default () => (
	<section className='contact'>
		<PageHeadingWithLines className='heading' color='white'>
			Contact Us
		</PageHeadingWithLines>
		<div className='form-container' id='contact'>
			<div className='left' />
			<div className='right'>
				<InputField placeholder='Name' />
				<InputField placeholder='Email' />
				<InputField placeholder='Phone' />
				<TextArea placeholder='Message' />
				<Button>Submit</Button>
			</div>
		</div>
	</section>
);
