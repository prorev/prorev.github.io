---
id: 2804
title: Customizing the customizer
date: 2016-04-03 19:13:05
author: taimane
layout: post
permalink: /wordpress/customizing-the-customizer/
redirect_from: /customizing-the-customizer/
published: true
categories:
   -
tags:
   -
---
Example adding new items to the WordpPess customize section:

```php
$wp_customize->add_section( 'just_listed' , array(
    'title'      => __( 'Just Listed Settings', 'microformata' ),
    'priority'   => 53,
	));
	$lab = array("City, State", "Bed", "Bath", "From price", "To price");
	$just = array();	
	for($ii=0; $ii<5; $ii++){ $just[] = array( 'slug'=>'just' . $ii, 
		  'default' => '',
		  'label' => $lab[$ii%5],
		);
	}
	foreach( $just as $e ) {

		// SETTINGS
		$wp_customize->add_setting(
		$e['slug'], array(
	      'default' => $e['default'],
	      'type' => 'option', 
	      'capability' => 'edit_theme_options', 
	      'transport'   => 'refresh',
      	)
      );
      
		$wp_customize->add_control(
		new WP_Customize_Control(
        $wp_customize,
        'just_listed_text' . $e['slug'],
        array(
            'label'          => $e['label'],
            'section'        => 'just_listed',
            'settings'       => $e['slug'],
            'type'           => 'text',     
            )
        )
    	);
	}//foreach
```	
