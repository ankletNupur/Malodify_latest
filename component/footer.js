class Footer extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
		<footer class="">
			<div class="container">
				<div class="footer-cont">
					<div class="logo">
						<a href="./dashboard.html">
							<img src="../assets/Melodify_svg_logo.svg" alt="SVG Logo" width="70">
						</a>
					</div>
					<div class="footer-nav">
						<div class="fn-left">
							<p>COMPANY</p>
							<div>
								<a href="">About</a>
							</div>
							<div>
								<a href="">Works</a>
							</div>
							<div>
								<a href="">For the Record</a>
							</div>
						</div>
						<div class="fn-mid">
							<p>COMMUNITIES</p>
							<div>
								<a href="">For Artists</a>
							</div>
							<div>
								<a href="">Developers</a>
							</div>
							<div>
								<a href="">Advert</a>
							</div>
							<div>
								<a href="">Investors</a>
							</div>
							<div>
								<a href="">Sellers</a>
							</div>
						</div>
						<div class="fn-right">
							<p>USEFUL LINKS</p>
							<div>
								<a href="./help.html">Help</a>
							</div>
							<div>
								<a href="./Malodify-songs/songs.html">Web Player</a>
							</div>
							<div>
								<a href=""
									>Free Mobile 
									<br/>
								APPLICATION </a>
							</div>
						</div>
					</div>
					<div class="social">
						<ul>
							<li>
								<a href=""><span class="insta"></span></a>
							</li>
							<li class="center">
								<a href=""><span class="twitter"></span></a>
							</li>
							<li>
								<a href=""><span class="face"></span></a>
							</li>
						</ul>
					</div>
					<div class="tr">
						<a href="" class="">
							INDIA
							<img src="./assets/in.svg" alt="" class="" />
						</a>
					</div>
					<div class="footer_bot">
						<ul class="">
							<li class="">
								<a href="" class="">Legal</a>
							</li>
							<li class="">
								<a href="" class="">Privacy Center</a>
							</li>
							<li class="">
								<a href="" class="">Privacy Policy</a>
							</li>
							<li class="">
								<a href="" class="">Cookies</a>
							</li>
							<li class="">
								<a href="" class="">About Ads</a>
							</li>
						</ul>
						<span> © 2023 Malodify IN </span>
					</div>
				</div>
			</div>
		</footer>
        `;
    }
}

window.customElements.define('custom-footer', Footer);