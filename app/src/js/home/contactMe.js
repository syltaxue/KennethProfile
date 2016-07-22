var React = require("react");
var Aboutme = React.createClass({
	render: function() {
		return (
			<div className = "row" id="contactMe">
				<div className = "col-sm-12">
					<div className="contactMe-container">
						<div className = "row">
							<div className = "col-sm-2"></div>
							<div className = "col-sm-8">
								<div className="aboutMe-title"><h2>Contact Information</h2></div>
								<div className="aboutMe-body">
									<p><span className="glyphicon glyphicon-envelope"></span> Email: syltaxue@hotmail.com</p>
									<p><span className="glyphicon glyphicon-phone"></span> Phone: (778) 926-4913</p>
									<p>Linkedin: https://www.linkedin.com/in/kennethsong</p>
									<p>Github: https://github.com/syltaxue</p>
								</div>
							</div>
							<div className = "col-sm-2"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Aboutme;
