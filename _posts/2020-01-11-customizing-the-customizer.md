---
id: 2804
title: Customizing the customizer
date: 2016-04-03 19:13:05
author: taimane
layout: post
permalink: /customizing-the-customizer/
published: true
categories:
   -
tags:
   -
---
<img class="size-full wp-image-2806 aligncenter" src="https://programming-review.com/wp-content/uploads/2016/04/customizer.png" alt="customizer" width="710" height="389" />
<pre class="prettyprint">$wp_customize-&gt;add_section( 'just_listed' , array(
    'title'      =&gt; __( 'Just Listed Settings', 'microformata' ),
    'priority'   =&gt; 53,
	) );
	$lab = array("City, State", "Bed", "Bath", "From price", "To price");
	
	$just = array();	
	for($ii=0; $ii&lt;5; $ii++){ $just[] = array( 'slug'=&gt;'just' . $ii, 
		  'default' =&gt; '',
		  'label' =&gt; $lab[$ii%5],
		);
	}
	
	foreach( $just as $e ) {
		
		
		// SETTINGS
		$wp_customize-&gt;add_setting(
		$e['slug'], array(
	      'default' =&gt; $e['default'],
	      'type' =&gt; 'option', 
	      'capability' =&gt; 'edit_theme_options', 
	      'transport'   =&gt; 'refresh',
      	)
      );
      
      
      
		$wp_customize-&gt;add_control(
		
		new WP_Customize_Control(
        $wp_customize,
        'just_listed_text' . $e['slug'],
        array(
            'label'          =&gt; $e['label'],
            'section'        =&gt; 'just_listed',
            'settings'       =&gt; $e['slug'],
            'type'           =&gt; 'text',            
            )
        )
    	);
      
	}//foreach</pre>  

