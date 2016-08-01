var React = require("react");
var Award = React.createClass({
	render: function() {
		return (
			<div className = "row" id="awards">
				<div>
					<div className="bg-callout">
						<div className="container awards-container">
							<div className="row">
								<div className="section-title item_bottom text-center">
									<div>
										<span className="fa fa-globe fa-2x"></span>
									</div>
									<h1 className="white"><span className="awards-titile">Awards</span><span>Honors</span></h1>
								</div>
							</div>
							<div className="row item_bottom">
								<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
									<div className="text-center"> 
										<h3 className="white">Work Learn International Undergraduate Research Award - 2014</h3>
										<p className="white">Awarded to 5 international students at UBC each year for research interests (same as NSERC)</p>
										<div className="ui divider white"></div>
										<h3 className="white">UBC Golden Key Membership - 2011</h3>
										<p className="white">For students with a top 15% GPA at UBC</p>
										<div className="ui divider white"></div>
										<h3 className="white">UBC Engineering Dean's Honor List 2011 - 2014</h3>
										<p className="white">For students with a annual GPA of at least A-</p>
									</div>
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
