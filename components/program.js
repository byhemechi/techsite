import React from 'react'

function wrap(props) {
	return props.children
}

export default function(props) {
	return <div className='programwindow'>
		<style jsx>{`
			img {
				margin-bottom: -0.5em
			}
			.windowbar {
				position: relative;
				background #333;
			}
			.programwindow {
				box-shadow: 0 2px 5px #0005;
				overflow: hidden;
				background: #333;
				border-radius: 5px;
			}
		`}</style>
		<img src='/static/images/window.svg' width='100%' className="windowbar"/><img width='100%' {...props} />
		</div>
}