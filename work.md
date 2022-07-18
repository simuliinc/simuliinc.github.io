---
title: Applications
layout: 'page'
permalink: '/work/'
description: ''
keywords: ['About','Simuli','Simuli.co','Simuli.ai','Simuli AGI','Simuli.com','Simuli Hardware','Hardware','Chips','Hardware Chips','Intelligent computing','Self Driving Hardware','Self Driving Chips','Self Driving Application','Energy efficient Chips','Artificial General Intelligence','Artificial Intelligence chips','Energy efficient Artificial Intelligence chips','Nueromorphic computing','Hypervectors','Hypervector','Hypervector computing','Hypervector chips','Intelligent semiconductors','Vertical Scaling chips','Memory efficient chips','Breakthrough semiconductors','Metaverse Chips','Metaverse semiconductors','Mining chips','low energy mining chips','Crypto chips','Crypto mining chips']
image: ''
---


<!-- Start Breadcrumb
		============================================= -->
{%- include breadcrumb.html -%}
<!-- End  Breadcrumb -->

<!-- Start Case Content
		============================================= -->

<div class="single-area">
	<div class="container">
		<div class="row">
			<div class="grid-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">

				{%- for work in site.worksItems -%}
				<div class="case-box">
					<div class="case-pic">
						<a href="{{ work.work_link }}"><img src="{{ work.image | relative_url }}" alt="thumb"></a>
					</div>
					<div class="case-info">
						<span class="d-block l-h-1 fz-16 mb-20">
							<a href="{{ work.work_link }}">{{ work.title }}</a>
						</span>
						<a href="{{ work.work_link }}">
							<h5 class="mb-0 fz-20 l-h-1">{{ work.subtitle }}</h5>
						</a>
					</div>
				</div>
				{%- endfor -%}

			</div>
		</div>
	</div>
</div>
<!-- End Case Content -->



<pre>









....
</pre>


<!-- Start footer3
		============================================= -->
{%- include footer.html -%}
<!-- End footer3 -->
