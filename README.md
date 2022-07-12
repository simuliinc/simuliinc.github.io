 Ailng - Creative Consulting & Business Agency Jekyll Template 
=====================================================

Firstly, a huge thanks for purchasing this theme, your support is truly appreciated!

This document covers the installation and use of this theme and often reveals answers to common problems and issues - read this document thoroughly if you are experiencing any difficulties. If you have any questions that are beyond the scope of this document, feel free to email at [ducorteam@gmail.com](mailto:ducorteam@gmail.com) Thank you so much!

Template Features
-----------------

*   **Bootstrap 5**
*   **Pixel Perfect Design**
*   **Contact Form**
*   **Personal Portfolio**
*   Cross-Browser Compatibility
*   Sidebar Menu
*   Typing Text
*   Top bar Menu
*   Image Moving Animation
*   Well organized, commented & clean code
*   **Free Lifetime Updates**
*   Fully Responsive
*   W3C Validated Code
*   Cross Browser Optimization
*   Unique Design
*   SEO Friendly Code
*   Smooth Scroll
*   Sticky Menu
*   Google Fonts Support
*   Built With HTML5 and CSS3
*   Free Font Icons
*   Easy Setup
*   All files are well commented
*   Cross Browser Compatible with IE11+, Firefox, Safari, Opera, Chrome
*   Github Access
*   Extensive Documentation

Basic
-----

1.  After unzip the download pack, you'll found a Template Folder with all the files.
2.  You can view this Template in any browser, you can display or edit the Template without an internet connection.(May not wotrk fonts and google map).
3.  This section that will not work is the Contact Section which contains [getform.io](https://getform.io/) form service for send messages.
4.  Now go to your github account and create repository (name like `yourname.github.io`). Push the content of the Template on your github repo.
5.  Once the files are done uploading go to `yourname.github.io`
6.  Enjoy

Template Structure
------------------

All information within the main content area is nested within a body tag. The general template structure is pretty the same throughout the template. Here is the general structure of main page (index.html).

```bash
roots [20 directories]
.
├── 404.html                            # 404 error file
├── assets                              # all assets of this theme
│   ├── css
│   ├── fonts
│   ├── js
│   └── webfonts                        # font awesome font
│       
├── blog
│   └── index.html                      # blog page
├── _config.yml                         # config files
├── Gemfile
├── img                                 # all of images
├── _includes
│   ├── disqus_comments.html               # blog post comments
│   ├── footer.html                         
│   ├── google_analytics.html              # google analytics
│   ├── header.html
│   ├── head.html
│   ├── hero                              # hero sections
│   │   ├── basic.html
│   │   ├── jarallax.html
│   │   └── particles.html
│   ├── hero.html                          # hanbdle hero sections
│   ├── preloader.html
│   ├── scripts.html
│   ├── sections                            # all of sections
│   │   ├── about.html
│   │   ├── blog.html
│   │   ├── contact.html
│   │   ├── exp-area.html
│   │   ├── faq.html
│   │   ├── feedback.html
│   │   ├── hireme.html
│   │   ├── price-area.html
│   │   ├── service.html
│   │   └── work.html
│   └── seo.html                        # handle static site seo
├── index-2.html
├── index-3.html
├── index.html                          # index file
├── _layouts                            #layouts
│   ├── blog.html
│   ├── compress.html
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _pages                              # custom pages
├── _posts                              # blog post
├── README.md                           # main stylesheet
└── style.css                           # main stylesheet
```


CSS Files and Structure
-----------------------

These are the css files that are loaded into templates in **Head Section**.

```html

<!-- ========== Start Stylesheet ========== -->
<link href="{{ 'assets/css/bootstrap.min.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/fontawesome.min.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/bsnav.min.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/magnific-popup.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/slick.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/all.min.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/animate.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/icofont.min.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/splitting.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'assets/css/splitting-cells.css' | relative_url }}" rel="stylesheet" />
<link href="{{ 'style.css' | relative_url }}" rel="stylesheet">
<link href="{{ 'assets/css/responsive.css' | relative_url }}" rel="stylesheet" />
<!-- ========== End Stylesheet ========== -->
```

Google Web Fonts
----------------

By default, the template loads this font from Google Web Font Services, you can change the font with the one that suits you best. go to ***style.css*** and you can update google font 

```html
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
```

Remember to change the font into **main.css**

Javascript Files and Structure
------------------------------

These are the list of Javascript files that are loaded into templates in end of the **Body Section**.

```html

<!-- jQuery Frameworks 
    ============================================= -->
<script src="{{ 'assets/js/jquery-3.6.0.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/bootstrap.bundle.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/jquery.appear.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/jquery.easing.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/waypoints.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/jquery.magnific-popup.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/progress-bar.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/slick.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/isotope.pkgd.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/count-to.js' | relative_url }}"></script>
<script src="{{ 'assets/js/typed.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/parallax.js' | relative_url }}"></script>
<script src="{{ 'assets/js/wow.js' | relative_url }}"></script>
<script src="{{ 'assets/js/bsnav.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/splitting-animation.js' | relative_url }}"></script>
<script src="{{ 'assets/js/splitting.min.js' | relative_url }}"></script>
{%- if page.hero == 'particles' -%}
<script src=" assets/js/jquery.particles.min.js"></script>
{%- endif -%}
<script src="{{ 'assets/js/YTPlayer.min.js' | relative_url }}"></script>
<script src="{{ 'assets/js/main.js' | relative_url }}"></script>
```


Contact Form
------------

This is a getform.io for sending messages to your email, to start receiving messages.

1. Create new form endpoint on [Getform](https://getform.io)
2. Form endpoint, Place this URL in the action attribute of your form. Also, make sure to add method="POST".

```html 
<form accept-charset="UTF-8" action="https://getform.io/f/{site.getform_id}" method="POST">
  <input type="email" name="email" placeholder="Your Email">
  <input type="text" name="name" placeholder="Your Name">
  <input type="text" name="message" placeholder="Your Message">
  <button type="submit">Send</button>
</form>
```

Customization
-------------------
We make the Jekyll template using a high-quality full template. We have more than 5+ years of experience to develop the Jekyll theme. more than 1k users use our Jekyll themes. It is a basic Jekyll theme or template so you can easily change the `_config.yaml` file.

How to change site url? Go to `_config.yaml` file update `url` value
```yaml
url: ''
```
url is very import of jekyll theme. You most be change url value form `config.yaml` 

How to change logo? Go to `_config.yaml` file update `logo` value
```yaml
logo: 'img/logo.png'
```

How to change favion? Go to `_config.yaml` file update `favion` value
```yaml
favion: 'img/favicon.png'
```

***hire us ***  If you are unable to customize this theme, you can hire us. our qualified developer make it perfect for you as your requirements. 


System Preparation and Installation
------------------

1.  To use this project, you'll need the following things installed on your machine.
2.  Most be installed ruby 2.4 - 2.7 on you sytem. more details visite [jekyllrb installation](https://jekyllrb.com/docs/installation/) 
3.  [Jekyll] (http://jekyllrb.com/) - `$ gem install jekyll bundler`
4.  run `$ bundle exec jekyll server` and browse [http://127.0.0.1:8000](http://127.0.0.1:8000)


Attention
==================
Read The following information Carefully. 
----------------

*   Fonts used in this item are loaded from Google. If you don't have an internet connection then item fonts can be different (don't worry about it because this is not an issue)
*   if you think documentation is not enough to customize this item then email to [ducorteam@gmail.com](mailto:ducorteam@gmail.com)
*   Before asking for any help you need to make sure that you are the actual buyer for this item. you have two ways to Wokoya that  
    **1\. collect a support ticket and send with your mail**  
    **2\. Send a screenshot after login to you account So that we can understand you have access to download this item from themeforest**


credits
=======

We would really love to take this opportunity to appreciate guys whose items were helpful to us to make Vifolio a really beautiful theme for our awesome users:

#### Images

*   [Unsplash](https://unsplash.com/)
*   [Freepik](http://freepik.com/)

#### JS Libraries

*   [jQuery](https://jquery.com/download/)
*   [HTML5 Shiv](https://github.com/afarkas/html5shiv)
*   [Modernizr](http://modernizr.com/)
*   [jQuery Easing](https://plugins.jquery.com/jquery.easing/)
*   [Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll)
*   [jQuery Appear](https://github.com/morr/jquery.appear)
*   [Bootsnav](http://bootsnav.danurstrap.com/)
*   [WOW](http://mynameismatthieu.com/WOW/index.html)
*   [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
*   [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
*   [Equalizing](http://tsvensen.github.io/equalize.js/)
*   [Slick Carousel](https://kenwheeler.github.io/slick/)

#### CSS & Fonts

*   [Bootstrap](http://getbootstrap.com/)
*   [Animation](http://daneden.github.io/animate.css/)
*   [Font-Awesome (Font Icons)](http://fortawesome.github.io/Font-Awesome/)
*   [Flaticons](https://www.flaticon.com)
*   [Google Fonts](https://www.google.com/fonts)

### Hire us
* Do you need customization in a reasonable price. You can [Hire Us](https://forms.gle/V93CKa7HyTFnLJtL8)
