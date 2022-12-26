import ReactLoading from 'react-loading';
// import { useState } from 'react';
export default function LoadingBubbles() {
	return (
		<div className="absolute-background">
			<ReactLoading type={'bubbles'} color={'#fff'} height={64} width={64} />
		</div>
	);
}
