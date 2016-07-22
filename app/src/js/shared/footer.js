var React = require("react");


var Footer = React.createClass({
	render: function() {
		return (
			<div className = "footer">
				<div className = "footer-container">
					<div>©Designed and Built by Kenneth Song</div>
					<div>Last Updated: 2016, July 22nd</div>	
				</div>
			</div>
		);
	}
});

module.exports = Footer;