/* eslint-disable react/prop-types */
import './inputContainer.css';
import { v4 } from 'uuid';

export default function InputContainer(props, { id = v4() }) {
	return (
		<div className="input-container">
			<label htmlFor={id} className="input-container__label">
				{props.labelText}
			</label>
			<div className="input-box">
				<input
					type={props.type}
					placeholder={props.placeholder}
					id={id}
					name={props.name}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
		</div>
	);
}
