import '../css/style.css';
import '../css/bootstrap.css';
function Home() {
    return (
<html>
<head>
	<title>Kashyap Ashara</title>
	{/* fonts */}
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'/>
		<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'/>
	{/* <!--//fonts--> */}
		{/* <link href="../css/bootstrap.css" rel="stylesheet" type="text/css" media="all" /> */}
		{/* <link href="../css/style.css" rel="stylesheet" type="text/css" media="all" /> */}
	{/* <!-- for-mobile-apps --> */}
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="Kong Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
		Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
		{/* <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script> */}
	{/* <!-- //for-mobile-apps -->
	<!-- js --> */}
		<script type="text/javascript" src="js/jquery.min.js"></script>
	{/* <!-- js -->
	<!-- start-smooth-scrolling --> */}
		<script type="text/javascript" src="js/move-top.js"></script>
		<script type="text/javascript" src="js/easing.js"></script>
		{/* <script type="text/javascript">
			jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				})
			});
		</script> */}
	{/* <!-- start-smooth-scrolling --> */}

</head>
<body>
{/* <!-- banner --> */}
<div class="banner" id="home">
	<div class="container"> 
		<div class="top-header row">
			<script src="js/classie.js"></script>
			{/* <!--top-nav----> */}
			{/* <!-- <div class="logo">
				<a href="index.html"><img src="images/logo.png" alt=""/></a>
			</div> --> */}
			<div class="top-nav">
				<div class="nav-icon">
					    <a href="#" class="right_bt" id="activator"><span> </span> </a>
				</div>
				<div class="box" id="box">
					<div class="box_content">        					                         
						<div class="box_content_center">
							<div class="form_content">
								<div class="menu_box_list">
									<ul>
										<li><a class="scroll" href="#home"><span>home</span></a></li>
										{/* <!-- <li><a class="scroll" href="#about"><span>about</span></a></li> --> */}
										<li><a class="scroll" href="#education"><span>education</span></a></li>
										<li><a class="scroll" href="#services"><span>services</span></a></li>
										{/* <!-- <li><a class="scroll" href="#portfolio"><span>portfolio</span></a></li> 
										<li><a class="scroll" href="#testimonial"><span>Testimonial</span></a></li>
										<li><a class="scroll" href="#blog"><span>blog</span></a></li> -->*/}
										<li><a class="scroll" href="#contact"><span>Contact</span></a></li>
										<div class="clearfix"> </div>
									</ul>
								</div>
								<a class="boxclose" id="boxclose"> <span> </span></a>
							</div>                                  
						</div> 	
					</div> 
				</div>       	  
			</div>
			{/* <!--start-click-drop-down-menu-->
			        <!--start-dropdown--> */}
			         {/* <script type="text/javascript">
						var $ = jQuery.noConflict();
							$(function() {
								$('#activator').click(function(){
									$('#box').animate({'top':'0px'},900);
								});
								$('#boxclose').click(function(){
								$('#box').animate({'top':'-1000px'},900);
								});
							});
							$(document).ready(function(){
							//Hide (Collapse) the toggle containers on load
							$(".toggle_container").hide(); 
							//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
							$(".trigger").click(function(){
								$(this).toggleClass("active").next().slideToggle("slow");
									return false; //Prevent the browser jump to the link anchor
							});
												
						});
					</script> */}
			{/* <!--//End-click-drop-down-menu--> */}
			<div class="clearfix"> </div>
		</div>
		<div class="banner-info">
			<div class="banner-left" style={{width: "100%"}}>
				<img src="./images/bg-photo.jpg" alt="" style={{borderRadius: "350px", height: "30%"}}/>
			</div>
			<div class="banner-right" style={{width: "100%"}}>
				<h1>I’M KASHYAP ASHARA</h1>
				<div class="border"></div>
				<h2>WEB DEVELOPER</h2>
				{/* <!-- <a href="#">DOWNLOAD MY RESUME</a> --> */}
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--/header-banner-->
<!--about--> */}
{/* <!-- <div class="about text-center" id="about">
	<div class="container">
		<h3>ABOUT ME</h3>
		<div class="strip text-center"><img src="images/about.png" alt=" "/></div>
		<p>Dyin' ain't much of a livin', boy. here. put that in your report!" and "i may have found 
		a way out of here. you want a guarantee, buy a toaster. here. put that in your report!" and 
		"i may have found a way out of here. this is the ak-47 assault rifle, the preferred weapon of 
		your enemy; and it makes a distinctive sound when fired at you, so remember it. this is the ak-47 
		assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at 
		you, so remember it. don't p!ss down my back and tell me it's raining. this is the ak-47 assault 
		rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, 
		so remember it. don't p!ss down my back and tell me it's raining. this is my gun, clyde! man's 
		gotta know his limitations. ever notice how sometimes you come across somebody you shouldn't have 
		f**ked with? well, i'm that guy.</p>
	</div>
</div> --> */}
{/* <!--//about--> */}
{/* <!-- <div class="about-back"></div> -->
<!--my skill--> */}
<div class="my-skills text-center">
	<div class="container">
		<h3>MY SKILLS</h3>
		<div class="strip text-center"><img src="./images/skill.png" alt=" "/></div>
		<div class="skill-grids">
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-1"></div>
						<p>PHP</p>
					</div>
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-2"></div>
						<p>Angular Js</p>
					</div>
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-3"></div>
						<p>IONIC</p>
					</div>
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-4"></div>
						<p>CAKE PHP</p>
					</div>
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-5"></div>
						<p>Html 5 / CSS 3</p>
					</div>
					<div class="col-md-2 skills-grid text-center">
						<div class="circle" id="circles-6"></div>
						<p>Bootstrap</p>
					</div>
					<div class="clearfix"> </div>
				 <script type="text/javascript" src="js/circles.js"></script>
					         {/* <script type="text/javascript">
								var colors = [
										['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff']
									];
								for (var i = 1; i <= 7; i++) {
									var child = document.getElementById('circles-' + i),
										percentage = 10 + (i * 10);
										
									Circles.create({
										id:         child.id,
										percentage: percentage,
										radius:     80,
										width:      10,
										number:   	percentage / 1,
										text:       '%',
										colors:     colors[i - 1]
									});
								}
						
                            </script> */}
		</div>
	</div>	
</div>
{/* <!--//my skill--> */}
<div class="my-skill-back"></div>
{/* <!--education--> */}
<div class="education text-center" id="education">
	<div class="container">
		<div class="edu-info">
			<h3>EDUCATION</h3>
		</div>
		<div class="strip text-center"><img src="./images/edu.png" alt=" "/></div>
		<div class="edu-grids">
			<div class="col-md-3 edu-grid">
				<p>2014 - 2016</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div class="edu-border">
					<div class="edu-grid-master">
						<h3>M. Sc. In INFORMATION TECHNOLOGY</h3>
						<h4>DA-IICT <br/>(GANDHINAGAR)</h4>
					</div>
					<div class="edu-grid-info">
						<h5><b>CPGA </b>: 6.13</h5>
					</div>
				</div>
			</div>
			<div class="col-md-3 edu-grid">
				<p>2011 - 2014</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div class="edu-border">
					<div class="edu-grid-master">
						<h3>BACHELOR OF COMPUTER APPLICATION</h3>
						<h4>H.L.I.C.A - AHMEDABAD UNIVERSITY</h4>
					</div>
					<div class="edu-grid-info">
						<h5><b>CPGA </b>: 7.22</h5>
					</div>
				</div>
			</div>
			<div class="col-md-3 edu-grid">
				<p>2010 - 2011</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div class="edu-border">
					<div class="edu-grid-master">
						<h3>12TH <br/>(H.S.C - GUJARAT BOARD)</h3>
						<h4>L. G. HARIA HIGH SCHOOL - JAMNAGAR</h4>
					</div>
					<div class="edu-grid-info">
						<h5><b>PERCENTAGE </b>: 71.47%</h5>
					</div>
				</div>
			</div>
			<div class="col-md-3 edu-grid">
				<p>2008 - 2009</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div class="edu-border">
					<div class="edu-grid-master">
						<h3>10TH <br/>(S.S.C. - GUJARAT BOARD)</h3>
						<h4>L. G. HARIA HIGH SCHOOL - JAMNAGAR</h4>
					</div>
					<div class="edu-grid-info">
						<h5><b>PERCENTAGE </b>: 74.15%</h5>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	
</div>
{/* <!--//education--> */}
<div class="strip-border"><p></p></div>
{/* <!--work--> */}
<div class="work-experience text-center">
	
	<div class="container">
		<div class="work-info">
			<h3>EXPERIENCE / PROJECTS</h3>
		</div>
		<div class="strip text-center"><img src="./images/work.png" alt=" "/></div>
		<div class="work-grids">
			<div class="col-md-12 w-grid">
				<div class="work-grid">
					<h3>Aug, 2015 - Nov, 2015</h3>
					<div class="work-grid-info">
						<h4>TRANSPORT-IT</h4>
						<h5>UI DEVELOPER, FRONTEND DEVELOPER</h5>
						<p>Transport IT is a platform, that will enable you to book trucks and tempos for your goods transportation. We aim at building high services for the users and truck service providers. Our main aim is to make users life easy by providing quick transport access and also to enhance productivity of service provider.</p>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="work-grids">
			<div class="col-md-12 w-grid">
				<div class="work-grid">
					<h3>June, 2014 - Sep, 2014</h3>
					<div class="work-grid-info">
						<h4>DATABASE OF ONLINE CHAT APPLICATION</h4>
						<h5>DATABASE DESIGNER</h5>
						<p>The Database that give you facility to record every details of Chat application in Perfect Manner so any one can do dynamic programming using our database. We had use PostgreSQL for making Tables, views, Trigger, Procedures.</p>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="work-grids">	
			<div class="col-md-12 w-grid">
				<div class="work-grid">
					<h3>May, 15 - Now</h3>
					<div class="work-grid-info">
						<h4>E-VIDYALAY EDUCATION SITE</h4>
						<h5>UI DEVELOPER, CORE DEVELOPER</h5>
						<p>Worked on developing e-learning based website for E-Vidyalay in Gujarati Language. In which I contribute as a UI developer for the website and even as Core Developer for developing the Website.</p>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="work-grids">
			<div class="col-md-12 w-grid">
				<div class="work-grid">
					<h3>4th Jan 2016 – 15th Jan 2016</h3>
					<div class="work-grid-info">
						<h4>WHITEPANDA</h4>
						<h5>WEB DEVELOPER</h5>
						<p>Worked on Content Writing Management System I am Contributing as a Core Developer for the System. Created the Backend of the Website in CakePhp. Also Created the new Database Design according to the requirements. </p>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//work--> */}
<div class="services-back"></div>

{/* <!--services--> */}
<div class="services text-center" id="services">
	<div class="container">
		<div class="ser-info">
			<h3>SERVICES</h3>
		</div>
		<div class="strip text-center"><img src="./images/ser.png" alt=" "/></div>
		<div class="ser-grids">
			<div class="col-md-6 ser-grid">
				<div class="ser-imagea"></div>
				<h3>Web Design</h3>
				{/* <!-- <p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p> --> */}
			</div>
			{/* <!-- <div class="col-md-3 ser-grid">
				<div class="ser-imageb"></div>
				<h3>Graphic Design</h3>
				<p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p>
			</div> --> */}
			{/* <!-- <div class="col-md-3 ser-grid">
				<div class="ser-imagec"></div>
				<h3>Content Writer</h3>
				<p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p>
			</div> --> */}
			<div class="col-md-6 ser-grid">
				<div class="ser-imaged"></div>
				<h3>APP Development</h3>
				{/* <!-- <p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p> --> */}
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//services--> */}
{/* <!--portfolio--> */}
{/* <!-- <div class="gallery-section text-center" id="portfolio">
	<div class="container">
		<h3>PORTFOLIO</h3>
		<div class="strip text-center"><img src="images/port.png" alt=" "/></div>
		<p>You think water moves fast? You should see ice. It moves like it has a mind. 
		Like it knows it killed the world once and got a taste for murder. After the avalanche, 
		it took us a week to climb out. Now, I don't know exactly when we turned on each other, 
		but I know that seven of us survived the slide and only five made it out. Now we took an 
		oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, 
		but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
		<div class="gallery-grids">
			<div class="top-gallery">
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p1.jpg" class="swipebox"><img src="images/p1.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p1.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>	
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p2.jpg" class="swipebox"><img src="images/p2.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p2.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p3.jpg" class="swipebox"><img src="images/p3.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p3.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p4.jpg" class="swipebox"><img src="images/p4.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p4.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p5.jpg" class="swipebox"><img src="images/p5.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p5.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div class="col-md-4 gallery-grid gallery1">
					<a href="images/p6.jpg" class="swipebox"><img src="images/p6.jpg" class="img-responsive" alt="/">
						<div class="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div class="button"><a href="images/p6.jpg" class="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div class="clearfix"> </div>
			</div>
				<link rel="stylesheet" href="css/swipebox.css">
				<script src="js/jquery.swipebox.min.js"></script> 
					<script type="text/javascript">
						jQuery(function($) {
							$(".swipebox").swipebox();
						});
					</script>
		</div>
	</div>
</div> --> */}
{/* <!--//portfolio-->
<!--process--> */}
<div class="process text-center">
	<div class="container">
		<h3>PROCESS</h3>
		<div class="strip text-center"><img src="./images/pro.png" alt=" "/></div>
		<div class="process-girds">
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imagea"></div>
					<p>IDEA</p>
					<img src="./images/6.png" alt=""/>
				</div>
			</div>
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imageb"></div>
					<p>CONCEPT</p>
					<img class="pro-imga" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imagec"></div>
					<p>DESIGN</p>
					<img class="pro-img" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imaged"></div>
					<p>DEVELOP</p>
					<img class="pro-imgb" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imagee"></div>
					<p>TEST</p>
					<img src="./images/6.png" alt=""/>
				</div>
			</div>
			<div class="col-md-2 process-pad">
				<div class="process-gird">
					<div class="process-imagef"></div>
					<p>LAUNCH</p>
					
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//process-->
<!-- <div class="process-back"></div> -->
<!--testimonials--> */}
{/* <!-- <div class="testimonials" id="testimonial">
	<div class="container">
		<h3>TESTIMONIAL</h3>
		<div class="strip text-center"><img src="images/test.png" alt=" "/></div> --> */}
			{/* <!-- responsiveslides --> */}
					{/* <script src="js/responsiveslides.min.js"></script>
						<script>
							// You can also use "$(window).load(function() {"
							// $(function () {
							//  // Slideshow 4
							// $("#slider3").responsiveSlides({
							// 	auto: true,
							// 	pager: false,
							// 	nav: true,
							// 	speed: 500,
							// 	namespace: "callbacks",
							// 	before: function () {
							// $('.events').append("<li>before event fired.</li>");
							// },
							// after: function () {
							// 	$('.events').append("<li>after event fired.</li>");
							// 	}
							// 	});
							// 	});
						</script> */}
			{/* <!-- responsiveslides --> */}
			{/* <!-- <div  id="top" class="callbacks_container">
					<ul class="rslides" id="slider3">
						<li>
							<div class="test-banner">
								<img class="quoa" src="images/quo2.png" alt=""/>
								<div class="test-left">
									<img src="images/7.png" alt=""/>
								</div>
								<div class="test-right">
									<p>However unreal it may seem, we are connected, 
									you and I. We're on the same curve, just on opposite ends.</p>
									<h4>Sam L. J. - Pulp Fiction</h4>
								</div>
								<div class="clearfix"></div>
								<img class="quo" src="images/quo1.png" alt=""/>
							</div>
						</li>
						<li>
							<div class="test-banner">
								<img class="quoa" src="images/quo2.png" alt=""/>
								<div class="test-left">
									<img src="images/eee.png" alt=""/>
								</div>
								<div class="test-right">
									<p>However unreal it may seem, we are connected, 
									you and I. We're on the same curve, just on opposite ends.</p>
									<h4>Sam L. J. - Pulp Fiction</h4>
								</div>
								<div class="clearfix"></div>
								<img class="quo" src="images/quo1.png" alt=""/>
							</div>
						</li>
					</ul>
			</div>		 */}
	{/* </div>
</div> --> */}
{/* <!--testimonials-->
<!--clients--> */}
{/* <!-- <div class="clients text-center">
	<div class="container">
		<h4>Clients</h4>
		<div class="strip-line"></div>
		<div class="client-grids">
			<div class="col-md-4 cl-grid">
				<div class="client-grid">
					<img src="images/10.png" alt=""/>
				</div>
			</div>
			<div class="col-md-4 cl-grid">
				<div class="client-grid">
					<img src="images/11.png" alt=""/>
				</div>
			</div>
			<div class="col-md-4 cl-grid">
				<div class="client-grid">
					<img src="images/12.png" alt=""/>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div> --> */}
{/* <!--clients--> */}
{/* <!-- <div class="client-back"></div> --> */}
{/* <!--blog--> */}
{/* <!-- <div class="blog" id="blog">
	<div class="container">
		<div class="blog-info text-center">
			<h3>BLOG</h3>
			<div class="strip text-center"><img src="images/blog.png" alt=" "/></div>
		</div>
		<div class="blog-grids">
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/a.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>	
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/b.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/c.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/a.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/b.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="col-md-4 blog-text-info">
				<div class="blog-grid">
					<a href="single.html"><img src="images/c.jpg" alt=""/></a>
					<div class="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div class="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div class="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div class="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div> --> */}
{/* <!--//blog--> */}
<div class="contact-back"></div>
{/* <!--contact--> */}
<div class="contact" id="contact">
	<div class="container">
		<div class="contact-info text-center">
			<h3>CONTACT</h3>
			<div class="strip text-center"><img src="./images/con1.png" alt=" "/></div>
		</div>
		<div class="contact-grids">
			<div class="col-md-12 about text-center">
				<h3>Say Hi to Me</h3>
				<div class="stripb"></div>
				<ul>
					<li>Call me on:</li>
					<li><b>+91 95581 55635</b></li>
					<br/>
					<li>Email me:</li>
					<li><b><a href="mailto:kashyap.dj9350@gmail.com">kashyap.dj9350@gmail.com</a></b></li>
				</ul>
				<ul>
					<li><a class="fb" href="https://www.facebook.com/kashyap.ashara"></a></li>
					<li><a class="twit" href="https://twitter.com/asharakashyap"></a></li>
					<li><a class="in" href="https://www.linkedin.com/in/kash9350"></a></li>
					{/* <!-- <li><a class="drib" href="#"></a></li> --> */}
					<li><a class="goog" href="https://plus.google.com/u/0/110582429209385754541"></a></li>
					{/* <!-- <li><a class="pin" href="#"></a></li> --> */}
				</ul>
			</div>
			{/* <!-- <div class="col-md-7 contact-right">
				<h3>Drop Me A Line</h3>
				<div class="stripb"></div>
				<form>
					<input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
					<input type="text" value="E-mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail';}" required="">
					<textarea type="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}" required="">Message</textarea>
					<input type="submit" value="SEND">
				</form>
			</div> --> */}
			<div class="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//contact--> */}
<div class="footer-top"></div>
{/* <!--resume-->
<!-- <div class="resume text-center">
	<div class="container">
		<div class="strip text-center"><a href="#"><img src="images/down.png" alt=" "/></a></div>
		<div class="down"><a href="#">Download My Resume</a></div>
	</div>
</div> -->
<!--//resume-->

<!--footer--> */}
<div class="footer">
	{/* <!-- <div class="container">
		<p>Copyright &copy; 2015 Kong. Template by <a href="http://w3layouts.com/"> W3layouts</a></p>
	</div> --> */}
</div>
{/* <!--//footer-->
<!-- here stars scrolling icon --> */}
	{/* <script type="text/javascript">
		$(document).ready(function() {
			/*
				var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
				};
			
								
			$().UItoTop({ easingType: 'easeOutQuart' });
								
			});
	</script> */}
{/* <!-- //here ends scrolling icon --> */}
</body>
</html>
    )
  }
  
  export default Home