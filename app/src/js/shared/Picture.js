var React = require("react");
var Carousel = require('react-bootstrap').Carousel;
// var NavItem = require('react-bootstrap').NavItem;

var Picture = React.createClass({
	render: function() {
		var height = 500;
		return (
			<div className = "navigator-carousel">
				<Carousel>
					<Carousel.Item>
						<img width={'100%'} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/background.jpg"/>
						<img id="description-icon" src="./../app/src/image/ubc2.gif" height="100px" width="100px"></img>
						<Carousel.Caption>
							<h3 className="text-header font-size-xlarge">Studying at UBC as a software engineering student</h3>
							<p className="font-size-larger">Graduating in May 2017</p>
							<p className="font-size-larger">Had a 20-month Co-op experience</p>
							<p className="font-size-larger">Will be available for a full-time position</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={'100%'} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/background2.jpg"/>
						<Carousel.Caption>
							<h3 className="text-header font-size-xlarge">Work Perference: AI</h3>
							<p className="font-size-larger">I beleive, in the future, tons of smart devices will make our life easier</p>
							<p className="font-size-larger">I beleive AI applications will become more and more common in our life</p>
							<p className="font-size-larger">I wish I can have a chance to work on projects in this field</p>
							<p className="font-size-larger">My past experience can prove that I have the potentials to learn the new skills required here</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={'100%'} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/machineLearning.jpg"/>
						<Carousel.Caption>
							<h3 className="text-header font-size-xlarge">Work Preference: Machine Learning</h3>
							<p className="font-size-larger">I believe, in the future, most of the messages people receive will be personalized</p>
							<p className="font-size-larger">I believe Machine learning will be applied in most applications</p>
							<p className="font-size-larger">Although I do not have much work experience in this field, I hope I can get a chance to learn</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	},

});

module.exports = Picture;