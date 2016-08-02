var React = require("react");
var Aboutme = React.createClass({
	render: function() {
		return (
			<div className = "row aboutme" id="aboutMe">
				<div className="container aboutMe-topHalf">
					<div className="row">
						<div className="section-title item_bottom text-center col-xs-12">
							<div>
								<span className="fa fa-user fa-2x"></span>
							</div>
							<h1><span className="aboutMe-titile-about">About</span><span>Me</span></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 text-center item_bottom font-medium xs-padding">
							<div>
								<p className="quoteline">
									EDUCATION
								</p>
								<h4>Bechelor Degree of Computer Engineering Software Option</h4>
								<h5>The University of British Columbia</h5>
								<p>With 20 months of Co-op Experience</p>
								<p>2011 -  Present</p>
								<p>Graduating in May, 2017</p>
							</div>
						</div>
						<div className="col-md-4 text-center item_top font-medium xs-padding">
							<div >
								<p>I am really interested in working at fast growing companies where I may get chances to try multiple tasks/roles and take responsibilities. </p>
								<p>I believe, in the future, most of the things that people use in every-day life will be auto-suggested, and there will be tons of smart devices that make life easier ( so <strong>machine learning</strong>, <strong>data mining</strong>, and <strong>AI</strong> are the fields that I would like to dig into if I get a chance).</p>
								<p>I am the type of person that do not like "peace" life. I would like to work somewhere full of challenges (That's why I love to work at fast growing companies).</p>
							</div>
						</div>
						<div className="col-md-4 item_bottom font-medium xs-padding">
							<p><span className="glyphicon glyphicon-envelope"></span> Email: syltaxue@hotmail.com</p>
							<p><span className="glyphicon glyphicon-phone"></span> Phone: (778) 926-4913</p>
							<p><i className="fa fa-globe"></i> Linkedin: https://www.linkedin.com/in/kennethsong</p>
							<p><i className="fa fa-globe"></i> Github: https://github.com/syltaxue</p>
						</div>
					</div>                   
				</div>
				<div className="fullwidth-section bg-callout">
					<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1 className="white padBottom killMargin xs-font-large">I am available for a start in <strong>May , 2017</strong></h1>
						</div>
					</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Aboutme;
