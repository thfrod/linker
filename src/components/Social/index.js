/* eslint-disable react/prop-types */
import './social.css';

export function Social({ url, children }) {
	return (
		<div>
			<a href={url} target="_blank" rel="noreferrer noopener">
				{children}
			</a>
		</div>
	);
}
