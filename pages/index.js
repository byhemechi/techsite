import Head from 'next/head';
import {Row, Column, Button, Container} from '../components/skeleton'
export default function () {return <Container>
<Head>
	<title>A POS system that isn't one</title>
	<style>{`
		.product-img {
			width: 100%;
			max-width: 150px;
		}
	`}</style>
</Head>

<h1>What am I making?</h1>
<p>I'm making a simple POS (point-of-sale) system, that allows people to order their food/drinks from their phones, so they can arrive and immediately have their stuff ready. This will benefit the retailer in that they have more time to produce the product, and the consumer as the extra time the retailer gets means that they can enjoy a better product, as it has been rushed less.</p>

<h1>Technologies</h1>

<Row>
	<Column size={2}>
		<img src='/static/images/nodejs.svg' className='product-img'/>
	</Column>
	<Column size={10}>
		<h3>Node.js</h3>
		<p>
			Node.js is the server system that I am most familiar with, so I'll be using it. It has the advantages of being really fast, sharing a programming language with the browser and being able to render React on the server-side; making load times really quick.
		</p>
	</Column>
</Row>
<hr/>
<Row>
	<Column size={2}>
		<img src='/static/images/react.svg' className='product-img'/>
	</Column>
	<Column size={10}>
		<h3>React</h3>
		<p>
			React is a (very) popular UI library – it renders javascript or jsx into HTML, which is what the browser renders. It's good for this project because I can make *components* and reuse them as many times as I like, for example a button could be reused so I can write <code>&lt;Button></code> instead of <code>&lt;a class='button button-border'></code> to get something simple like <Button>This Button</Button>
		</p>
	</Column>
</Row>
<hr/>
<Row>
	<Column size={2}>
		<img src='/static/images/stripe.svg' className='product-img'/>
	</Column>
	<Column size={10}>
		<h3>Stripe</h3>
		<p>
			Stripe (alongside PayPal) is the de facto standart of handling payments on websites and apps. It's transactino fees are handled as a percentage of the transfer amount, has very good documentation and works vary quickly. I'm mainly using Stripe instead of PayPal because I've got prior experience with it
		</p>
	</Column>
</Row>

</Container>}