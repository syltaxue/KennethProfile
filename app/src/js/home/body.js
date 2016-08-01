var React = require("react");
var Awards = require("./awards");
var Timeline = require("./timeline");
var AboutMe = require("./AboutMe");

var Body = React.createClass({
	componentDidMount: function() {
		// Have the navigator stick to the page while scrolling
		$('.ui.sticky')
			.sticky({
				bottomOffset: 50,
				context: '#bodyContext'
		});
	},

	render: function() {
		return (
			<div id ="bodyContext">
				<AboutMe/>
				<div className = "row">
					<div className = "col-sm-1">
					</div>
					<div className = "col-xs-12 col-sm-10">
						<div className="ui right rail">
							<div className = "ui bound bottom sticky">
								<button className="ui icon button" onClick={this.scrollToTop}>
									<i className="arrow up icon"></i>
								</button>
							</div>
						</div>
						<div className = "body">
							<div className = "body-container">
								<Timeline/>
								<div className="ui divider"></div>
							</div>
						</div>
					</div>
					<div className = "col-sm-1">
					</div>
				</div>
				<Awards/>
			</div>
		);
	},

	scrollToTop: function() {
		window.scrollTo(0, 0);
	}
});

module.exports = Body;
