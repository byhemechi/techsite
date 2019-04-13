import Head from 'next/head';
import {Row, Column, Button, Link as ButtonLink, Container} from '../components/skeleton'
import Link from 'next/link'
import ProgramWindow from '../components/program'

export default function () {return <article>
<Head>
	<title>Design</title>
</Head>

<Container>
<h1>Design</h1>

<p>The process of design was completed mostly in <Link href='https://figma.com'><a>Figma</a></Link>, which was a huge help. </p>
</Container>
<div style={{
	background: "#33aac4",

}}><Container style={{
	padding: "48px 12px"
}}>
<Row>
	<Column size='7'>
		<ProgramWindow src='/static/images/payment.svg' className='u-full-width window'/>
	</Column>
	<Column size='5' style={{
		padding: "30px 25px",
		paddingBottom: 0
	}}>
		<h1>Payment</h1>
		<h4>Handled through Stripe, with support for Google Pay, Apple Pay and plain old credit card.</h4>
		<ButtonLink href='/payment' primary>Find out more</ButtonLink>
	</Column>
</Row>
</Container></div>
</article>}