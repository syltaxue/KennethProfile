var React = require("react");
var Carousel = require('react-bootstrap').Carousel;
// var NavItem = require('react-bootstrap').NavItem;

var Picture = React.createClass({
	render: function() {
		var width = window.innerWidth;
		var height = 500;
		return (
			<div className = "navigator-carousel">
				<Carousel>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/background.jpg"/>
						<img id="description-icon" src="./../app/src/image/ubc2.gif" height="100px" width="100px"></img>
						<Carousel.Caption>
							<h3>Studying at UBC as a software enginnering student</h3>
							<p>Graduating in May 2017</p>
							<p>Will be available for a full-time position</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/ai.jpg"/>
						<Carousel.Caption>
							<h3>Work Perference: AI</h3>
							<p>图片文字简介2，文字介绍2</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/machineLearning3.jpg"/>
						<Carousel.Caption>
							<h3>Work Preference: Machine Learning</h3>
							<p>I would like to get involved in</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	},

});

module.exports = Picture;