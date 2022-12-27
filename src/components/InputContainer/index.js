/* eslint-disable react/prop-types */
import './inputContainer.css';
import { v4 } from 'uuid';

export default function InputContainer(
	props,
	{ id = v4(), labeltext = props.labeltext }
) {
	return (
		<div className="input-container">
			<label htmlFor={id} className="input-container__label">
				{labeltext}
			</label>
			<div className="input-box">
				<input {...props} />
			</div>
		</div>
	);
}
