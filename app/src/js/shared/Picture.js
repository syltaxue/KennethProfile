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
						<Carousel.Caption>
							<div className="pic-text-padding text-header font-size-xlarge xs-font-medium animated bounceInLeft">Studying at UBC as a software engineering student</div>
							<div className="pic-text-padding margin-divier font-size-larger xs-font-small animated bounceInLeft Delay1s">Graduating in May 2017</div>
							<div className="pic-text-padding font-size-larger xs-font-small animated bounceInLeft Delay2s">Had a 20-month Co-op experience</div>
							<div className="pic-text-padding font-size-larger xs-font-small animated bounceInLeft Delay3s">Will be available for a full-time position</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={'100%'} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/background2.jpg"/>
						<Carousel.Caption>
							<div className="pic-text-padding text-header font-size-xlarge xs-font-medium animated bounceInDown">Work Perference: AI</div>
							<div className="pic-text-padding margin-divier font-size-larger xs-font-small animated bounceInDown Delay1s">I beleive, in the future, tons of smart devices will make our life easier</div>
							<div className="pic-text-padding font-size-larger xs-font-small animated bounceInDown Delay1s">I beleive AI applications will become more and more common in our life</div>
							<div className="pic-text-padding font-size-larger xs-font-small animated bounceInUp Delay2s">I wish I can have a chance to work on projects in this field</div>
							<div className="pic-text-padding font-size-larger xs-font-small animated bounceInUp Delay2s">My past experience can prove that I have the potentials to learn the new skills required here</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={'100%'} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/machineLearning.jpg"/>
						<Carousel.Caption>
							<div className="pic-text-margin text-header font-size-xlarge xs-font-medium animated zoomIn">Work Preference: Machine Learning</div>
							<div className="pic-text-margin margin-divier font-size-larger xs-font-small animated zoomInDown Delay1s">I believe, in the future, most of the messages people receive will be personalized</div>
							<div className="pic-text-margin font-size-larger xs-font-small animated zoomInRight Delay2s">I believe Machine learning will be applied in most applications</div>
							<div className="pic-text-margin font-size-larger xs-font-small animated zoomInUp Delay3s">Although I do not have much work experience in this field, I hope I can get a chance to learn</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	},

});

module.exports = Picture;