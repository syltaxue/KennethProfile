var React = require("react");
var Timeline = React.createClass({
	render: function() {
		return (
			<div className = "timeline-container" id="timeline">
				<div className="page-header row">
					<div className="section-title item_bottom text-center col-xs-12">
						<div>
							<span className="fa fa-calendar fa-2x"></span>
						</div>
						<h1><span className="aboutMe-titile-about">Timeline</span></h1>
					</div>
				</div>
				<div>
					<ul className="timeline">
						<li>
							<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left xs-hide"></i></div>
							<div className="timeline-date-right">
								<div className="timeline-date-right-text xs-hide"><div className="ui teal tag label font-size-inherit">September 2016 - Present</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Reach Social Mobile App</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Cross-Platform App Developer</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">School Project</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">September 2016 - Present</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Building a cross-platform app from scratch for a start-up company using React Native that provides the ability to do different class activities for students</div>
												<div className="item">Designing the UI/UX for the app</div>
												<div className="item">Developing key features for the app, e.g. file upload/sharing, group conversation thread</div>
												<div className="item">Initialize team work with other team members and make sure the product can be delivered on time</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Cross-Platform mobile app development</div>
												<div className="item">React Native</div>
												<div className="item">UX/UI</div>
												<div className="item">OS Environment: Mac</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right xs-hide"></i></div>
							<div className="timeline-date-left">
								<div className="timeline-date-left-text xs-hide"><div className="ui right pointing teal label xs-hide font-size-inherit">September 2016 - Present</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">UBC LLFI Web Service</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Full Stack Developer</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Personal Project</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">September 2016 - Present</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Building a web application using React from scratch for a UBC research project LLFI</div>
												<div className="item">Designed the architecture of the application in a modular way and following RESTful API standards</div>
												<div className="item">Implementing the back-end server that executes scripts for front-end requests using NodeJS</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">ReactJS</div>
												<div className="item">NodeJS</div>
												<div className="item">Html, Css, Javascript</div>
												<div className="item">OS Environment: Windows</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left xs-hide"></i></div>
							<div className="timeline-date-right">
								<div className="timeline-date-right-text xs-hide"><div className="ui teal tag label font-size-inherit">July 2016 - August 2016</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Website Development</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Front End Developer</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Personal Projects</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">July 2016 - August 2016</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Built and designed my portfolio website</div>
												<div className="item">http://syltaxue.com/</div>
												<div className="item">Built a website for a BC registered non-profit organization</div>
												<div className="item">http://lovecaravan.ca/</div>
												<div className="item">Gained experience on the full life cycle of website development and hosting</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">ReactJS, Bootstrap, Jquery</div>
												<div className="item">Html, CSS, JS</div>
												<div className="item">Semantic UI, Animate</div>
												<div className="item">OS Environment: Windows</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right xs-hide"></i></div>
							<div className="timeline-date-left">
								<div className="timeline-date-left-text xs-hide"><div className="ui right pointing teal label xs-hide font-size-inherit">May 2015 - December 2015</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Front End Developer (Co-op)</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Cumul8 Technologies Inc.</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Work Experience</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">May 2015 - December 2015</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Built complex data visualization related web components using React and Flux</div>
												<div className="item">Added real time updating features using Websocket</div>
												<div className="item">Fixed bugs on the back end side written in Go language</div>
												<div className="item">Built front-end screens for a mobile app using React Native</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Data Visualization</div>
												<div className="item">ReactJs, JQuery</div>
												<div className="item">React Native</div>
												<div className="item">Html, Css, Javascript</div>
												<div className="item">Git, SourceTree</div>
												<div className="item">OS Environment: Mac</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left xs-hide"></i></div>
							<div className="timeline-date-right">
								<div className="timeline-date-right-text xs-hide"><div className="ui teal tag label font-size-inherit">August 2014 - May 2015</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Test Script Developer & Enginnering Testing Assurance (Co-op)</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Broadcom Corporation</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Work Experience</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">August 2014 - May 2015</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Developed automated test scripts for nightly regression tests to have the requirements of our products automatically tested</div>
												<div className="item">Run and Reported nightly regression test results in a daily basis to report software bugs to the development team</div>
												<div className="item">Developed scripting tools to automatically parse our test results with no manual efforts</div>
												<div className="item">Learned programming language, Tcl, and scripting language, Perl, with minor help to be able to write automated test scripts independently</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Tcl</div>
												<div className="item">Perl</div>
												<div className="item">Git</div>
												<div className="item">OS Environment: Windows</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right xs-hide"></i></div>
							<div className="timeline-date-left">
								<div className="timeline-date-left-text xs-hide"><div className="ui right pointing teal label xs-hide font-size-inherit">May 2014 - August 2014</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">GUI Developer (Co-op)</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">UBC ECE - Cisco fault injection tool</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Work Experience</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">May 2014 - August 2014</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Expended features on the GUI tool using JavaFX to make it simple and easy to use (<a target="_blank" href="https://github.com/DependableSystemsLab/LLFI/wiki/Get-Started-with-using-LLFI-with-GUI">Demo Link</a>)</div>
												<div className="item">Developed and edited some of the existing scripts of the LLFI tool to support some extension features</div>
												<div className="item">Added informative instructions and notifications in the GUI to make the product user-friendly</div>
												<div className="item">Developed scripts in Python to automate some duplicated work</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Java, JavaFX</div>
												<div className="item">Python</div>
												<div className="item">C++</div>
												<div className="item">Git</div>
												<div className="item">OS Environment: Linux</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left xs-hide"></i></div>
							<div className="timeline-date-right">
								<div className="timeline-date-right-text xs-hide"><div className="ui teal tag label font-size-inherit">July 2013 - September 2013</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Quality Assurance (Co-op)</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">AutoNavi Software Co., Ltd.</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">Work Experience</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">July 2013 - September 2013</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Designed and programmed a simple server that receives commands from users and sends back results to the client side</div>
												<div className="item">Designed a program that parsed the online log files to extract user information with encrypting and decrypting techniques</div>
												<div className="item">Debugged and tested the programs using gcc, g++, gdb, and valgrind</div>
												<div className="item">Learned basic and frequently used shell commands/script in Linux Centos system</div>
												<div className="item">Cooperated and communicated effectively with other team members; worked and learned independently under mineral guidance</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">C, C++</div>
												<div className="item">Bash scripts</div>
												<div className="item">OS Environment: Linux</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right xs-hide"></i></div>
							<div className="timeline-date-left">
								<div className="timeline-date-left-text xs-hide"><div className="ui right pointing teal label xs-hide font-size-inherit">March 2013 - May 2013</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Security Camera Android App</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Android Java Project</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">School Project</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">March 2013 - May 2013</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Designed a security camera android app that is able to control a remote RaspberryPi camera through Wi-Fi network as well as streaming the video from the camera</div>
												<div className="item">Designed the UI of the app, analyzed the users habits about how they want to use the app, taking care of the relationship between each activity</div>
												<div className="item">Implemented and designed the XML file of each activity page</div>
												<div className="item">Initiated team activities, helped the team to allocate the workload, and ensured the delivery of the project</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Java, Android</div>
												<div className="item">RaspberryPi</div>
												<div className="item">OS Environment: Windows</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left xs-hide"></i></div>
							<div className="timeline-date-right">
								<div className="timeline-date-right-text xs-hide"><div className="ui teal tag label font-size-inherit">January 2013 - April 2013</div></div>
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h2 className="timeline-title xs-font-larger">Parking Pal Web Service</h2>
									<div className="text-muted ui red tag labels xs-font-xsmall"><div className="ui label font-size-inherit">Java Web Project</div></div>
									<div className="text-muted ui tag labels timeline-title-type xs-font-xsmall"><div className="ui label font-size-inherit">School Project</div></div>
									<div className="text-muted ui teal tag labels xs-display xs-font-xsmall"><div className="ui label">January 2013 - April 2013</div></div>
								</div>
								<div className="timeline-body">
									<div className="row timeline-body-container">
										<div className = "col-sm-8">
											<div className="ui bulleted list xs-font-xsmall">
												<div className="item">Implemented a web that is able to show the parking meter information in Vancouver using Google Web Toolkit</div>
												<div className="item">Designed the UI of the web based on some analysis of some user stories</div>
												<div className="item">Managed the project and the workload following the agile software development framework with scrum meetings and sprint demos</div>
												<div className="item">Tested the web using unit tests, and regression tests</div>
											</div>
										</div>
										<div className = "col-sm-5 xs-font-xsmall timeline-xs-padding">
											<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
											<div className="ui bulleted list">
												<div className="item">Java, Google Web Toolkit</div>
												<div className="item">Html, Css, Javascript</div>
												<div className="item">OS Environment: Windows</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Timeline;
