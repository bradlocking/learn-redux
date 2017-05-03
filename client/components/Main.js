import React from 'React';
import { Link } from 'react-router';


const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		)
	}
});

export default Main;