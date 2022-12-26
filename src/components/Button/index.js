/* eslint-disable react/prop-types */
import './button.css';
export default function Button(props) {
	return (
		<button className="button" type={props.type}>
			{props.children}
		</button>
	);
}
