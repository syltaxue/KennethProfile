var React = require("react");
var Award = React.createClass({
	render: function() {
		return (
			<div className = "row aboutme" id="aboutMe">
				<div className = "col-sm-12">
					<div className="aboutMe-bg"></div>
					<div className="aboutMe-container">
						<div className = "row">
							<div className = "col-sm-2"></div>
							<div className = "col-sm-8">
								<div className="aboutMe-title"><h2>About Me</h2></div>
								<div className="aboutMe-body">
									<p>I am really interested in working at fast growing companies where I may get chances to try multiple tasks/roles and take responsibilities. </p>
									<p>I believe, in the future, most of the things that people use in every-day life will be auto-suggested, and there will be tons of smart devices that make life easier ( so <strong>machine learning</strong>, <strong>data mining</strong>, and <strong>AI</strong> are the fields that I would like to dig into if I get a chance).</p>
									<p>I am the type of person that do not like "peace" life. I would like to work somewhere full of challenges (That's why I love to work at fast growing companies).</p>
									<p>I will be graduating in May 2017, and I am looking for jobs starting in <strong>May 2017</strong>.</p>
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

module.exports = Award;
