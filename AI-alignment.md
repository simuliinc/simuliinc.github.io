---
title: Artificial Intelligence Alignment
subtitle: Incentives for a better world
layout: 'page'
permalink: '/ai-alignment/'
description: ''
keywords: # ['About','Simuli','Simuli.co','Simuli.ai','Simuli AGI','Simuli.com','Simuli Hardware','Hardware','Chips','Hardware Chips','Intelligent computing','Self Driving Hardware','Self Driving Chips','Self Driving Application','Energy efficient Chips','Artificial General Intelligence','Artificial Intelligence chips','Energy efficient Artificial Intelligence chips','Nueromorphic computing','Hypervectors','Hypervector','Hypervector computing','Hypervector chips','Intelligent semiconductors','Vertical Scaling chips','Memory efficient chips','Breakthrough semiconductors','Metaverse Chips','Metaverse semiconductors','Mining chips','low energy mining chips','Crypto chips','Crypto mining chips']
image: false
---


<!-- Start Breadcrumb  -->
{%- include breadcrumb.html -%}
<!-- End  Breadcrumb -->


{% capture page_content %}
The development of artificial general intelligence (AGI) is the next untapped frontier of technological development. The prospect and goal of developing AGI is exciting and brings with it challenges and impacts, both ethical and societal, that are as intriguing as they are monumental. Whether those impacts will be beneficial or detrimental depends on how ethically AGI and related technologies are developed, as well as utilized. Bringing ethics and philosophical considerations into the workflow and development of AGI is something Simuli, inc. takes as not only important, but necessary in developing AGI. Whether AI aligns with our values and goals depends on multiple assumptions and possibilities, all of which are present through each level of design, development, production, and use. Because of this, Simuli, inc. strives to make sure that technological development is as beneficial and useful as it is ethically sound. For this reason, we consult with world-leading researchers at the intersection of AI and ethics. 
{% endcapture %}

{% comment %}
	Here we captured the text that we want to convert into html. Then we add it to a section template of the site's HTML for formatting.
{% endcomment %}
<div class="about-area de-padding">
	<div class="about-wpr grid-2">
		<div class="about-left">
			<div class="about-img wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
				<img src="{{ site.selfdriving.image | relative_url }}" alt="thumb">
			</div>
		</div>
		<div class="about-right about-padding-right">
			<span class="about-sub-title">{{- page.title -}}</span>
			<h2 data-splitting class="about-title wow" 
				data-wow-duration=".1s" 
				data-wow-delay=".2s">
				{{- page.subtitle - }}
			</h2>
			<p>{{ page_content | markdownify}}</p>
			<div class="about-btn mt-60 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
				<a href="/contact/" class="theme-btn">{{ site.promo.contact_text }}</a>
			</div>
		</div>
	</div>
</div>

<!-- Start Footer
	============================================= -->
{%- include footer.html -%}
<!-- End Footer-->
