import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NLink from 'next/link';

class Link extends Component {
	render() {
		const { primary, href, className, pull, ...props } = this.props
		let _className = primary ? 'button button-primary' : className
		_className += pull ? ` u-pull-${pull}` : ''

		return (
			<NLink href={href}>
				<a
					className={_className}
					{...props}
					>
					{this.props.children}
				</a>
			</NLink>
		);
	}
}

Link.defaultProps = {
	pull: '',
	style: {},
	className: 'button',
	primary: false,
	href: '#'
}

Link.propTypes = {
	pull: PropTypes.oneOf(['left', 'right', '']),
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired,
	primary: PropTypes.bool.isRequired,
	href: PropTypes.string.isRequired,
}

export default Link;
