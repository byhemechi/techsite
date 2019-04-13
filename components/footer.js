import "../css/footer.css";
import Centre from './skeleton/Container';
export default function footer() {
	return <footer><Centre><div>&copy; George Fischer {(new Date()).getFullYear()}</div></Centre></footer>
}