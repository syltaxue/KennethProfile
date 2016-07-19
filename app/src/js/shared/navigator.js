var React = require("react");
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var NavItem = require('react-bootstrap').NavItem;

var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator navbar navbar-default">
				<div className = "navigator-container">
					<div className= "col-sm-1"></div>
					<div className= "col-sm-10 navigator-container-content">
						<div className= "col-sm-10">
							<div className = "navigator-buttons">
								<div className="ui large secondary inverted pointing menu">
									<a className="item active">Home</a>
									<a className="item" onClick={this._scrollToAboutMe}>About Me</a>
									<a className="item" onClick={this._scrollToTimeLine}>Time Line</a>
									<a className="item">Awards & Honors</a>
									<div className="right menu">
										<a className="ui item">Contact Information</a>
									</div>
								</div>
							</div>
						</div>
						<div className= "col-sm-2">
						</div>
					</div>
					<div className= "col-sm-1"></div>
				</div>
			</div>
		);
	},
	_scrollToAboutMe: function() {
		window.scrollTo(0, $("#aboutMe").offset().top);
	},
	_scrollToTimeLine: function() {
		window.scrollTo(0, $("#timeline").offset().top -50);
	}
});

module.exports = Navigator;