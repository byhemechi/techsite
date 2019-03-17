import '../css/navbar.css';
import Link from 'next/link';
import {Container} from './skeleton';

function NavLink(props) {
	var link;
	if(props.page == props.href) link = <a className='active'>{props.children}</a>;
	else link = <a>{props.children}</a>;

	return <Link href={props.href}>
		{link}
	</Link>
}

export default function navbar (props) {
	return <nav>
		<Container>
			<NavLink href='/' page={props.self}>Intro</NavLink>
			<NavLink href='/about' page={props.self}>Technical info</NavLink>
		</Container>
	</nav>
}