var React = require("react");
var Award = React.createClass({
	render: function() {
		return (
			<div className = "row" id="awards">
				<div className="bg-callout">
					<div className="awards-container">
						<div className="row">
							<div className="section-title item_bottom text-center col-xs-12">
								<div>
									<span className="fa fa-globe fa-2x"></span>
								</div>
								<h1 className="white"><span className="awards-titile">Awards</span><span>Honors</span></h1>
							</div>
						</div>
						<div className="row item_bottom">
							<div className="col-xs-12">
								<div className="text-center xs-padding"> 
									<h3 className="white xs-font-medium">Work Learn International Undergraduate Research Award - 2014</h3>
									<p className="white xs-font-small">Awarded to 5 international students at UBC each year for research interests (same as NSERC)</p>
									<div className="ui divider white"></div>
									<h3 className="white xs-font-medium">UBC Golden Key Membership - 2011</h3>
									<p className="white xs-font-small">For students with a top 15% GPA at UBC</p>
									<div className="ui divider white"></div>
									<h3 className="white xs-font-medium">UBC Engineering Dean's Honor List 2011 - 2016</h3>
									<p className="white xs-font-small">For students with an annual GPA of at least A-</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Award;
