var React = require("react");
var ProductItem = require("./../components/productItem");
var Aboutme = React.createClass({
	render: function() {
		return (
			<div className = "row aboutme">
				<div className = "col-sm-12">
					<div className="aboutMe-bg"></div>
					<div className="aboutMe-container">
						<div className = "row">
							<div className = "col-sm-2"></div>
							<div className = "col-sm-8">
								<div className="aboutMe-title"><h2>About Me</h2></div>
								<div className="aboutMe-body">
									<p>I am a 4th year student in Software Engineering at the University of British Columbia in Canada Vancouver.</p>
									<p>I am interested in working at start-ups with interesting ideas. Especially the ones relate to data and machine learning. I believe, in the future, most of the things people use will be auto-suggested, and there will be tons of smart devices that make life easier ( so machine learning, data mining, AI, smart devices are the fields that I will dig into).</p>
									<p>I am the type of person that do not like "peace" life. I would like to work somewhere full of challenges (That's why I love to work at startups). </p>
									<p>I will be really interested in jobs in the related fields as mentioned above after graduation starting from May 2017.</p>
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
