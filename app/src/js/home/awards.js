var React = require("react");
var Award = React.createClass({
	render: function() {
		return (
			<div className = "row awards-container" id="awards">
				<div className = "col-sm-12">
					<div className = "row">
						<div className = "col-sm-2"></div>
						<div className = "col-sm-8">
							<div className="awards-title"><h2>Awards & Honors</h2></div>
							<div className="awards-body">
								<h3>Work Learn International Undergraduate Research Award - 2014</h3>
								<p>Awarded to 5 international students at UBC each year for research interests (same as NSERC)</p>
								<div className="ui divider"></div>
								<h3>UBC Golden Key Membership - 2011</h3>
								<p>For students with a top 15% GPA at UBC</p>
								<div className="ui divider"></div>
								<h3>UBC Engineering Dean's Honor List 2011 - 2014</h3>
								<p>For students with a annual GPA of at least A-</p>
							</div>
						</div>
						<div className = "col-sm-2"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Award;
