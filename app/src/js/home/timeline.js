var React = require("react");
var ProductItem = require("./../components/productItem");

var Timeline = React.createClass({
	render: function() {
		return (
			<div className = "timeline-container">
				<div className="page-header"><h1 id="timeline">Timeline</h1></div>
				<ul className="timeline">
					<li>
						<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left"></i></div>
						<div className="timeline-date-right">
							<div className="timeline-date-right-text"><a className="ui teal tag label">May 2015 - December 2015</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">Front End Developer (Co-op)</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">Cumul8 Technologies Inc.</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">Work Experience</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Built complex web components using React and Flux</div>
											<div className="item">Added real time updating features using Websocket</div>
											<div className="item">Built some front-end screens for a mobile app using React Native</div>
										</div>
									</div>
									<div className = "col-sm-5">
										<div className="timeline-body-container-skillHeader">Technical Skills/Language:</div>
										<div className="ui bulleted list">
											<div className="item">Html, Css, Javascript</div>
											<div className="item">ReactJs, Jquery</div>
											<div className="item">React Native</div>
											<div className="item">Git, SourceTree</div>
											<div className="item">OS Environment: Mac</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="timeline-inverted">
						<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right"></i></div>
						<div className="timeline-date-left">
							<div className="timeline-date-left-text"><a className="ui right pointing teal label">August 2014 - May 2015</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">Test Script Developer & Enginnering Testing Assurance (Co-op)</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">Broadcom Corporation</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">Work Experience</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Mainly developed automated test scripts for nightly regression test to have the requirements of our products fully tested</div>
											<div className="item">Run and Reported nightly regression test results in a daily basis to report software bugs in our products</div>
											<div className="item">Developed some scripting tools to automatically parse our test results with no manual efforts</div>
											<div className="item">Reported bugs using the company’s bug report system</div>
											<div className="item">Learned programming language, Tcl, and scripting language, Perl, with minor help to be able to write automated test scripts independently</div>
											<div className="item">Learned how the company’s test infrastructure works</div>
										</div>
									</div>
									<div className = "col-sm-5">
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
					<li>
						<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left"></i></div>
						<div className="timeline-date-right">
							<div className="timeline-date-right-text"><a className="ui teal tag label">May 2014 - August 2014</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">GUI Developer (Co-op)</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">UBC ECE - Cisco LLFI fault injection tool</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">Work Experience</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Expended features on the GUI tool using JavaFX to make it simple and easy to use</div>
											<div className="item">Developed and edited some of the existing scripts of the LLFI tool to support some extension features</div>
											<div className="item">Added informative instructions and notifications in the GUI to make the product user friendly</div>
											<div className="item">Developed some scripts in Python to automate some duplicate work</div>
										</div>
									</div>
									<div className = "col-sm-5">
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
					<li className="timeline-inverted">
						<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right"></i></div>
						<div className="timeline-date-left">
							<div className="timeline-date-left-text"><a className="ui right pointing teal label">July 2013 - September 2013</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">Quality Assurance (Co-op)</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">AutoNavi Software Co., Ltd.</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">Work Experience</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Designed and programmed a server that receives commands from users and sends back results and commands to the client side</div>
											<div className="item">Researched, learned, and applied techniques, such as epoll, select, multiple threads with locks, and the lock free circular queues, to deal with high concurrent cases</div>
											<div className="item">Designed a program that parsed the online log files to extract user information with encrypting and decrypting techniques</div>
											<div className="item">Debugged and tested the programs using gcc, g++, gdb, and valgrind</div>
											<div className="item">Learned some basic and frequently used shell commands/script in Linux Centos system</div>
											<div className="item">Improved coding style to make it more readable and easier to maintain</div>
											<div className="item">Cooperated and communicated effectively with other team members; worked and learned independently under mineral guidance</div>
										</div>
									</div>
									<div className = "col-sm-5">
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
					<li>
						<div className="timeline-badge"><i className="glyphicon glyphicon-arrow-left"></i></div>
						<div className="timeline-date-right">
							<div className="timeline-date-right-text"><a className="ui teal tag label">March 2013 - May 2013</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">Security Camera Android App</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">Android Java Project</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">School Project</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Designed a security camera android app that is able to control a remote RaspberryPi camera through Wi-Fi network as well as streaming the video from the camera</div>
											<div className="item">Designed the UI of the app, analyzed the users habits about how they want to use the app, taking care of the relationship between each activity</div>
											<div className="item">Implemented and designed the XML file of each activity page</div>
											<div className="item">Initiated team activities, helped the team to allocate the workload, and ensured the team to be able to meet the deadline</div>
										</div>
									</div>
									<div className = "col-sm-5">
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
					<li className="timeline-inverted">
						<div className="timeline-badge warning"><i className="glyphicon glyphicon-arrow-right"></i></div>
						<div className="timeline-date-left">
							<div className="timeline-date-left-text"><a className="ui right pointing teal label">January 2013 - April 2013</a></div>
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h2 className="timeline-title">Parking Pal Web Service</h2>
								<div className="text-muted ui red tag labels"><a className="ui label">Java Web Project</a></div>
								<div className="text-muted ui tag labels timeline-title-type"><a className="ui label">School Project</a></div>
							</div>
							<div className="timeline-body">
								<div className="row timeline-body-container">
									<div className = "col-sm-8">
										<div className="ui bulleted list">
											<div className="item">Implemented a web that is able to show the parking meter information in Vancouver using Google Web Toolkit</div>
											<div className="item">Designed the UI of the web based on some analysis of some user stories</div>
											<div className="item">Managed the project and the workload following the agile software development framework with scrum meetings and sprint demos</div>
											<div className="item">Tested the web using unit tests, and regression tests</div>
										</div>
									</div>
									<div className = "col-sm-5">
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
		);
	}
});

module.exports = Timeline;
