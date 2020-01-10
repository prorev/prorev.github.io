---
id: 2385
title: Gravity Forms custom fields admin and preview pages
date: 2014-08-31 18:27:44
author: taimane
layout: post
permalink: /gravity-forms-fields-admin/
published: true
categories:
   -
tags:
   -
---
In Gravity Forms you need to have preview in Form Editor admin different then the normal form preview.
You can achieve that using IS_ADMIN variable and by making the customization of the filter <code>gform_field_input</code>

[caption id="attachment_2396" align="alignnone" width="476"]<a href="https://programming-review.com/wp-content/uploads/2014/08/Selection_00010.png"><img class="wp-image-2396 size-full" src="https://programming-review.com/wp-content/uploads/2014/08/Selection_00010.png" alt="Selection_00010" width="476" height="358" /></a> The Form Editor Preview (just the image)[/caption]

&nbsp;

[caption id="attachment_2388" align="alignnone" width="493"]<a href="https://programming-review.com/wp-content/uploads/2014/08/Selection_00009.png"><img class="wp-image-2388" src="https://programming-review.com/wp-content/uploads/2014/08/Selection_00009.png" alt="Selection_00009" width="493" height="353" /></a> The form preview when added on page.[/caption]


<pre class="prettyprint">add_action("gform_field_input", "map_input", 10, 5);
function map_input($input, $field, $value, $lead_id, $form_id){
  if($field["type"] == "gmap" ){
    if(IS_ADMIN){			
      $input = sprintf("<div class="ginput_container"><img src="https://lh3.ggpht.com/6CpkAgqtH9M_Ihg1bAqlgk_jiS0HQGpTE2Ok15jki8eFywH4nn7HEgscINDCeonxWl0=w100" alt="" /></div>");
    }else{		
      $input = sprintf("<div class="ginput_container">... OTHER HTML HERE</div>");
    }
  }
  return $input;
}
</pre>

Thanks
  

