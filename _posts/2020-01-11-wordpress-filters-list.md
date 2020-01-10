---
id: 2108
title: List of all filters in WordPress 3.9.1
date: 2014-05-14 21:13:19
author: taimane
layout: post
permalink: /wordpress-filters-list/
published: true
categories:
   -
tags:
   -
---
Here is the list of all filters not counting the wp-content folder.
Specifically, I took in account <code>apply_filters_ref_array</code> and <code>apply_filters</code> functions.

<code>additional_capabilities_display
add_menu_classes
add_{$meta_type}_metadata
add_ping
add_signup_meta
{$adjacent}_image_link
{$adjacent}_post_link
{$adjacent}_post_rel_link
admin_body_class
admin_comment_types_dropdown
admin_footer_text
admin_memory_limit
admin_post_thumbnail_html
admin_title
admin_url
ajax_query_attachments_args
akismet_comment_nonce
akismet_delete_commentmeta_interval
akismet_optimize_table
akismet_show_user_comments_approved
akismet_spam_count_incr
akismet_ua
akismet_view_arguments
allow_dev_auto_core_updates
allowed_http_origin
allowed_http_origins
allowed_redirect_hosts
allowed_themes
allow_major_auto_core_updates
allow_minor_auto_core_updates
allow_password_reset
allow_subdirectory_install
all_plugins
all_themes
async_upload_{$type}
atom_enclosure
attachment_fields_to_edit
attachment_fields_to_save
attachment_icon
attachment_innerHTML
attachment_link
attachment_max_dims
attachment_thumbnail_args
attribute_escape
audio_submitbox_misc_sections
auth_cookie
auth_cookie_expiration
authenticate
author_email
author_feed_link
author_link
author_rewrite_rules
auth_post_meta_{$meta_key}
auth_redirect_scheme
autocomplete_users_for_site_admins
auto_core_update_email
auto_core_update_send_email
automatic_updater_disabled
automatic_updates_debug_email
automatic_updates_is_vcs_checkout
automatic_updates_send_debug_email
auto_update_.$type
avatar_defaults
block_local_requests
blog_details
bloginfo
bloginfo_rss
bloginfo_url
blog_option_{$option}
blog_redirect_404
body_class
{$boundary}_post_rel_link
browse-happy-notice
bulk_actions-{$this-&gt;screen-&gt;id}
bulk_post_updated_messages
cancel_comment_reply_link
can_edit_network
category_description
category_feed_link
category_link
check_is_user_spammed
check_password
clean_url
close_comments_for_post_types
comment_author
comment_author_rss
comment_class
comment_cookie_lifetime
comment_edit_pre
comment_edit_redirect
comment_email
comment_excerpt
comment_feed_groupby
comment_feed_join
comment_feed_limits
comment_feed_orderby
comment_feed_where
comment_flood_filter
comment_form_default_fields
comment_form_defaults
comment_form_field_comment
comment_form_field_{$name}
comment_form_logged_in
comment_id_fields
comment_link
comment_max_links_url
comment_moderation_headers
comment_moderation_recipients
comment_moderation_subject
comment_moderation_text
comment_notification_headers
comment_notification_notify_author
comment_notification_recipients
comment_notification_subject
comment_notification_text
comment_post_redirect
comment_reply_link
comment_row_actions
comments_array
comment_save_pre
comments_clauses
comments_link_feed
comments_number
comments_open
comments_per_page
comments_popup_link_attributes
comments_rewrite_rules
comment_status_links
comments_template
comment_text
comment_text_rss
comment_url
content_url
contextual_help
contextual_help_list
core_version_check_locale
cron_request
cron_schedules
current_theme_supports-{$feature}
customize_allowed_urls
customizer_widgets_section_args
customize_sanitize_js_{$this-&gt;id}
customize_sanitize_{$this-&gt;id}
customize_value_.$this-&gt;id_data[base]
custom_menu_order
dashboard_glance_items
dashboard_primary_feed
dashboard_primary_link
dashboard_primary_title
dashboard_secondary_feed
dashboard_secondary_link
dashboard_secondary_title
date_formats
date_i18n
date_query_valid_columns
date_rewrite_rules
day_link
dbdelta_create_queries
dbdelta_insert_queries
dbdelta_queries
default_avatar_select
default_content
default_contextual_help
default_excerpt
default_feed
default_hidden_meta_boxes
default_option_.$option
default_site_option_.$option
default_title
delete_{$meta_type}_metadata
delete_site_email_content
deprecated_argument_trigger_error
deprecated_file_trigger_error
deprecated_function_trigger_error
determine_current_user
disable_captions
display_media_states
display_post_states
documentation_ignore_functions
doing_it_wrong_trigger_error
domain_exists
do_mu_upgrade
do_parse_request
dynamic_sidebar_has_widgets
dynamic_sidebar_params
editable_extensions
editable_roles
editable_slug
edit_bookmark_link
edit_categories_per_page
edit_comment_link
edit_{$field}
edit_$field
editor_max_image_size
edit_post_{$field}
edit_post_link
edit_posts_per_page
edit_profile_url
edit_tag_link
edit_tags_per_page
edit_{$taxonomy}_{$field}
edit_term_{$field}
edit_term_link
edit_user_{$field}
embed_cache_oembed_types
embed_defaults
embed_googlevideo
embed_handler_html
embed_maybe_make_link
embed_oembed_discover
embed_oembed_html
enable_edit_any_user_configuration
enable_live_network_counts
enable_post_by_email_configuration
enable_update_services_configuration
enter_title_here
esc_html
esc_textarea
example_filter
excerpt_length
excerpt_more
exit_on_http_head
export_args
ext2type
extra_{$context}_headers
extra_theme_headers
feed_content_type
feed_link
$field
{$field_no_prefix}_edit_pre
{$field_no_prefix}_save_pre
{$field}_pre
file_is_displayable_image
filesystem_method
filesystem_method_file
flush_rewrite_rules_hard
force_filtered_html_on_import
format_to_edit
found_posts
found_posts_query
found_users_query
fs_ftp_connection_types
gallery_style
get_{$adjacent}_post_join
get_{$adjacent}_post_sort
get_{$adjacent}_post_where
get_ancestors
getarchives_join
get_archives_link
getarchives_where
get_attached_file
get_attached_media
get_attached_media_args
get_avatar
get_avatar_comment_types
get_bloginfo_rss
get_blogs_of_user
get_bookmarks
get_calendar
get_categories_taxonomy
get_comment
get_comment_author
get_comment_author_email
get_comment_author_IP
get_comment_author_link
get_comment_author_url
get_comment_author_url_link
get_comment_date
get_comment_excerpt
get_comment_ID
get_comment_link
get_comments_link
get_comments_number
get_comments_pagenum_link
get_comment_text
get_comment_time
get_comment_type
get_date_sql
get_delete_post_link
get_editable_authors
get_edit_bookmark_link
get_edit_comment_link
get_edit_post_link
get_edit_tag_link
get_edit_term_link
get_edit_user_link
get_enclosed
getimagesize_mimes_to_exts
get_image_tag
get_image_tag_class
get_lastpostdate
get_lastpostmodified
get_media_item_args
get_meta_sql
get_{$meta_type}_metadata
get_others_drafts
_get_page_link
get_pagenum_link
get_pages
get_post_galleries
get_post_gallery
get_post_modified_time
get_post_time
get_pung
get_sample_permalink_html
get_search_form
get_search_query
get_shortlink
get_space_allowed
get_tags
get_$taxonomy
get_term
get_terms
get_terms_args
get_terms_fields
get_terms_orderby
gettext
gettext_with_context
get_the_author_.$field
get_the_categories
get_the_date
get_the_excerpt
get_the_generator_{$type}
get_the_guid
get_the_modified_date
get_the_modified_time
get_the_tags
get_the_terms
get_the_time
get_to_ping
get_usernumposts
get_user_option_{$option}
get_users_drafts
get_wp_title_rss
global_terms_enabled
got_rewrite
got_url_rewrite
graceful_fail
graceful_fail_template
heartbeat_nopriv_received
heartbeat_nopriv_send
heartbeat_received
heartbeat_send
heartbeat_settings
hidden_meta_boxes
home_url
htmledit_pre
http_api_transports
http_headers_useragent
http_origin
http_request_args
http_request_host_is_external
http_request_redirection_count
http_request_reject_unsafe_urls
http_request_timeout
http_request_version
http_response
https_local_ssl_verify
https_ssl_verify
icon_dir
icon_dirs
icon_dir_uri
iis7_supports_permalinks
iis7_url_rewrite_rules
image_add_caption_shortcode
image_downsize
image_edit_before_change
image_editor_default_mime_type
image_editor_save_pre
image_make_intermediate_size
image_memory_limit
image_resize_dimensions
image_save_pre
image_send_to_editor
image_send_to_editor_url
image_size_names_choose
img_caption_shortcode
img_caption_shortcode_width
import_upload_size_limit
includes_url
incompatible_sql_modes
index_rel_link
install_plugin_complete_actions
install_plugins_nonmenu_tabs
install_plugins_table_api_args_$tab
install_plugins_tabs
install_theme_complete_actions
install_themes_nonmenu_tabs
install_themes_table_api_args_.$old_filter
install_themes_table_api_args_.$tab
install_themes_tabs
intermediate_image_sizes
intermediate_image_sizes_advanced
is_active_sidebar
is_email
is_email_address_unsafe
is_multi_author
is_protected_meta
is_wide_widget_in_customizer
jpeg_quality
js_escape
kses_allowed_protocols
lang_codes
language_attributes
link_category
link_title
list_cats
list_pages
list_terms_exclusions
load_default_embeds
load_default_widgets
load_image_to_edit
load_image_to_edit_attachmenturl
load_image_to_edit_filesystempath
load_image_to_edit_path
load_textdomain_mofile
locale
locale_stylesheet_uri
login_body_class
login_errors
login_form_bottom
login_form_defaults
login_form_middle
login_form_top
login_headertitle
login_headerurl
login_message
login_messages
loginout
login_redirect
login_url
logout_url
lostpassword_redirect
lostpassword_url
manage_media_columns
manage_pages_columns
manage_posts_columns
manage_{$post_type}_posts_columns
manage_.$screen-&gt;id._columns
manage_sites_action_links
manage_taxonomies_for_attachment_columns
manage_taxonomies_for_{$post_type}_columns
manage_{$this-&gt;screen-&gt;id}_sortable_columns
manage_{$this-&gt;screen-&gt;taxonomy}_custom_column
manage_users_custom_column
map_meta_cap
mce_buttons
mce_buttons_2
mce_buttons_3
mce_buttons_4
mce_css
mce_external_languages
mce_external_plugins
media_buttons_context
media_meta
media_row_actions
media_send_to_editor
media_submitbox_misc_sections
media_upload_default_tab
media_upload_default_type
media_upload_form_url
media_upload_mime_type_links
media_upload_tabs
media_view_settings
media_view_strings
menu_order
mime_types
mod_rewrite_rules
month_link
months_dropdown_results
ms_site_check
ms_user_list_site_actions
ms_user_row_actions
mu_dropdown_languages
mu_menu_items
myblogs_blog_actions
myblogs_options
nav_menu_attr_title
nav_menu_css_class
nav_menu_description
nav_menu_item_id
nav_menu_items_{$post_type_name}
nav_menu_link_attributes
nav_menu_meta_box_object
network_admin_url
network_by_path_segments_count
network_home_url
network_sites_updated_message_.$_GET[updated]
network_site_url
new_admin_email_content
newblogname
newblog_notify_siteadmin
new_user_email_content
newuser_notify_siteadmin
next_comments_link_attributes
next_posts_link_attributes
ngettext
ngettext_with_context
nocache_headers
nonce_life
nonce_user_logged_out
no_texturize_shortcodes
no_texturize_tags
number_format_i18n
oembed_dataparse
oembed_fetch_url
oembed_linktypes
oembed_providers
oembed_result
$option
option_enable_xmlrpc
option_.$option
option_.$option_name
option_page_capability_{$option_page}
override_load_textdomain
override_post_lock
override_unload_textdomain
page_attributes_dropdown_pages_args
page_css_class
page_link
page_rewrite_rules
page_row_actions
paginate_links
parent_file
parent_post_rel_link
password_reset_key_expired
$permastructname._rewrite_rules
$per_page
phone_content
pingback_ping_source_uri
pingback_useragent
pings_open
plugin_install_action_links
plugin_locale
plugin_row_meta
plugins_api
plugins_api_args
plugins_api_result
plugins_update_check_locales
plugins_url
plupload_default_params
plupload_default_settings
plupload_init
populate_network_meta
postbox_classes_{$page}_{$id}
post_class
post_comments_feed_link
post_comments_feed_link_html
post_comments_link
post_date_column_time
post_{$field}
post_format_rewrite_base
post_gallery
post_limits
post_limits_request
post_link
post_link_category
postmeta_form_limit
post_mime_types
post_password_expires
post_playlist
post_rewrite_rules
post_row_actions
posts_clauses
posts_clauses_request
posts_distinct
posts_distinct_request
posts_fields
posts_fields_request
posts_groupby
posts_groupby_request
posts_join
posts_join_paged
posts_join_request
posts_orderby
posts_orderby_request
posts_request
posts_request_ids
posts_results
posts_search
posts_search_orderby
posts_where
posts_where_paged
posts_where_request
post_thumbnail_html
post_thumbnail_size
post_type_archive_feed_link
post_type_archive_link
post_type_archive_title
post_type_labels_{$post_type}
post_type_link
post_types_to_delete_with_user
post_updated_messages
pre_add_site_option_.$option
pre_category_nicename
pre_comment_approved
pre_comment_author_email
pre_comment_author_name
pre_comment_author_url
pre_comment_content
pre_comment_user_agent
pre_comment_user_ip
pre_ent2ncr
pre_{$field}
pre_$field
$prefix.plugin_action_links
$prefix.plugin_action_links_$plugin_file
pre_get_network_by_path
pre_get_shortlink
pre_get_site_by_path
pre_get_space_used
pre_http_request
pre_http_send_through_proxy
pre_insert_term
pre_kses
pre_option_enable_xmlrpc
pre_option_.$option
prepend_attachment
pre_post_{$field}
pre_post_link
preprocess_comment
pre_remote_source
pre_set_site_transient_.$transient
pre_set_theme_mod_$name
pre_set_transient_.$transient
pre_site_option_.$option
pre_site_transient_.$transient
pre_{$taxonomy}_{$field}
pre_term_{$field}
pre_transient_.$transient
pre_update_option
pre_update_option_.$option
pre_update_site_option_.$option
pre_upload_error
pre_user_description
pre_user_display_name
pre_user_email
pre_user_{$field}
pre_user_first_name
pre_user_id
pre_user_last_name
pre_user_login
pre_user_nicename
pre_user_nickname
pre_user_url
preview_post_link
previous_comments_link_attributes
previous_posts_link_attributes
pre_wp_nav_menu
print_admin_styles
print_footer_scripts
print_head_scripts
print_late_styles
print_scripts_array
print_styles_array
privacy_on_link_text
privacy_on_link_title
private_title_format
protected_title_format
pub_priv_sql_capability
query
query_string
query_vars
quick_edit_dropdown_pages_args
quicktags_settings
random_password
redirect_canonical
redirect_network_admin_request
redirect_post_location
redirect_user_admin_request
register
register_url
registration_errors
registration_redirect
request
request_filesystem_credentials
retrieve_password_message
retrieve_password_title
rewrite_rules
rewrite_rules_array
richedit_pre
robots_txt
role_has_cap
root_rewrite_rules
rss_enclosure
rss_update_frequency
rss_update_period
safe_style_css
salt
sanitize_email
sanitize_file_name
sanitize_file_name_chars
sanitize_html_class
sanitize_key
sanitize_{$meta_type}_meta_{$meta_key}
sanitize_mime_type
sanitize_option_{$option}
sanitize_text_field
sanitize_title
sanitize_trackback_urls
sanitize_user
schedule_event
screen_layout_columns
screen_options_show_screen
screen_settings
script_loader_src
search_feed_link
search_form_format
search_link
search_rewrite_rules
secure_auth_cookie
secure_auth_redirect
secure_logged_in_cookie
secure_signon_cookie
self_link
send_core_update_notification_email
set-screen-option
set_url_scheme
shake_error_codes
shortcode_atts_{$shortcode}
shortcut_link
show_admin_bar
show_advanced_plugins
show_network_site_users_add_existing_form
show_network_site_users_add_new_form
show_password_fields
show_post_locked_dialog
show_recent_comments_widget_style
sidebars_widgets
signup_another_blog_init
signup_blog_init
signup_create_blog_meta
signup_user_init
single_cat_title
single_post_title
single_tag_title
single_term_title
site_by_path_segments_count
site_option_.$option
site_transient_.$transient
site_url
smilies_src
split_the_query
status_header
style_loader_src
style_loader_tag
stylesheet
stylesheet_directory
stylesheet_directory_uri
stylesheet_uri
subdirectory_reserved_names
tables_to_repair
$tag
tag_cloud_sort
tag_escape
tag_feed_link
tag_link
tag_rewrite_rules
tag_row_actions
tagsperpage
taxonomy_feed_link
{$taxonomy}_{$field}
{$taxonomy}_{$field}_rss
taxonomy_parent_dropdown_args
{$taxonomy}_row_actions
teeny_mce_before_init
teeny_mce_buttons
teeny_mce_plugins
template
template_directory
template_directory_uri
template_include
term_{$field}
term_{$field}_rss
term_id_filter
term_link
term_links-$taxonomy
term_name
terms_clauses
terms_to_edit
term_updated_messages
the_author
the_author_.$field
the_author_posts_link
the_category
the_category_rss
the_comments
the_content
the_content_export
the_content_feed
the_content_more_link
the_content_rss
the_date
the_editor
the_editor_content
the_excerpt
the_excerpt_export
the_excerpt_rss
the_feed_link
the_generator
theme_action_links
theme_action_links_$stylesheet
theme_install_actions
theme_locale
theme_mod_{$name}
theme_page_templates
theme_root
theme_root_uri
theme_row_meta
themes_api
themes_api_args
themes_api_result
themes_update_check_locales
the_meta_key
the_modified_author
the_modified_date
the_modified_time
the_password_form
the_permalink
the_permalink_rss
the_posts
the_preview
the_search_query
the_shortlink
the_tags
the_terms
the_time
the_title
the_title_rss
the_weekday
the_weekday_date
thread_comments_depth_max
time_formats
tiny_mce_before_init
tiny_mce_plugins
trackback_url
transient_.$transient
twentyfourteen_attachment_size
twentyfourteen_custom_background_args
twentyfourteen_custom_header_args
twentyfourteen_get_featured_posts
twentythirteen_attachment_size
twentythirteen_author_bio_avatar_size
twentytwelve_attachment_size
twentytwelve_author_bio_avatar_size
twentytwelve_status_avatar
$type._send_to_editor_url
{$type}_template
$type._upload_iframe_src
type_url_form_media
unzip_file_use_ziparchive
update_attached_file
update_bulk_plugins_complete_actions
update_bulk_theme_complete_actions
update_feedback
update_footer
update_{$meta_type}_metadata
update_plugin_complete_actions
update_theme_complete_actions
update_translations_complete_actions
update_welcome_email
update_welcome_subject
update_welcome_user_email
update_welcome_user_subject
upgrader_clear_destination
upgrader_post_install
upgrader_pre_download
upgrader_pre_install
upgrader_source_selection
upload_dir
upload_mimes
upload_per_page
upload_post_params
upload_size_limit
url_to_postid
use_curl_transport
use_default_gallery_style
use_google_chrome_frame
user_admin_url
user_can_richedit
user_contactmethods
user_dashboard_url
user_{$field}
user_has_cap
user_{$name}_label
user_registration_email
user_row_actions
user_search_columns
user_trailingslashit
use_streams_transport
validate_current_theme
validate_username
views_{$this-&gt;screen-&gt;id}
walker_nav_menu_start_el
whitelist_options
widget_archives_args
widget_archives_dropdown_args
widget_categories_args
widget_categories_dropdown_args
widget_comments_args
widget_customizer_setting_args
widget_display_callback
widget_form_callback
widget_links_args
widget_meta_poweredby
widget_pages_args
widget_posts_args
widget_tag_cloud_args
widget_text
widget_title
widget_update_callback
wp_admin_bar_class
wp_admin_css
wp_admin_css_uri
wp_audio_embed_handler
wp_audio_extensions
wp_audio_shortcode
wp_audio_shortcode_class
wp_audio_shortcode_library
wp_audio_shortcode_override
wp_auth_check_interval
wp_auth_check_load
wp_auth_check_same_domain
wp_authenticate_user
wp_cache_themes_persistently
wp_checkdate
wp_check_filetype_and_ext
wp_check_post_lock_window
wp_comment_reply
wp_count_attachments
wp_count_comments
wp_count_posts
wp_create_file_in_uploads
wp_create_thumbnail
wp_dashboard_widgets
wp_default_editor
wp_delete_file
wp_die_ajax_handler
wp_die_handler
wp_die_xmlrpc_handler
wp_dropdown_cats
wp_dropdown_pages
wp_dropdown_users
wp_edit_nav_menu_walker
wp_editor_set_quality
wp_embed_handler_audio
wp_embed_handler_video
wp_feed_cache_transient_lifetime
wp_fullscreen_buttons
wp_generate_attachment_metadata
wp_generate_tag_cloud
wp_generator_type
wp_get_attachment_id3_keys
wp_get_attachment_image_attributes
wp_get_attachment_link
wp_get_attachment_metadata
wp_get_attachment_thumb_file
wp_get_attachment_thumb_url
wp_get_attachment_url
wp_get_current_commenter
wp_get_nav_menu_items
wp_get_nav_menus
wp_get_object_terms
wp_get_update_data
wp_handle_upload
wp_handle_upload_prefilter
wp_header_image_attachment_metadata
wp_headers
wp_http_accept_encoding
wp_http_cookie_value
wp_image_editor_before_change
wp_image_editors
wp_insert_attachment_data
wp_insert_post_data
wp_insert_post_empty_content
wp_insert_post_parent
wp_is_large_network
wp_kses_allowed_html
wp_link_pages
wp_link_pages_args
wp_link_pages_link
wp_link_query
wp_link_query_args
wp_list_bookmarks
wp_list_categories
wp_list_pages
wp_list_pages_excludes
wp_login_errors
wp_mail
wp_mail_charset
wp_mail_content_type
wp_mail_from
wp_mail_from_name
wp_mail_original_content
wp_mce_translation
wp_mediaelement_fallback
wp_mime_type_icon
wpmu_active_signup
wpmu_blogs_columns
wpmu_delete_blog_upload_dir
wpmu_drop_tables
wpmu_signup_blog_notification
wpmu_signup_blog_notification_email
wpmu_signup_blog_notification_subject
wpmu_signup_user_notification
wpmu_signup_user_notification_email
wpmu_signup_user_notification_subject
wpmu_users_columns
wpmu_validate_blog_signup
wpmu_validate_user_signup
wpmu_welcome_notification
wpmu_welcome_user_notification
wp_nav_locations_listed_per_menu
wp_nav_menu
wp_nav_menu_args
wp_nav_menu_container_allowedtags
wp_nav_menu_items
wp_nav_menu_{$menu-&gt;slug}_items
wp_nav_menu_objects
wp_network_dashboard_widgets
wp_page_menu
wp_page_menu_args
wp_parse_str
_wp_post_revision_field_$field
_wp_post_revision_fields
wp_prepare_attachment_for_js
wp_prepare_themes_for_js
wp_read_image_metadata
wp_read_image_metadata_types
wp_redirect
wp_redirect_status
_wp_relative_upload_path
wp_revisions_to_keep
wp_save_image_editor_file
wp_save_image_file
wp_save_post_revision_check_for_changes
wp_search_stopwords
wp_setup_nav_menu_item
wp_signup_location
wp_sprintf
wp_sprintf_l
wp_tag_cloud
wp_terms_checklist_args
wp_title
wp_title_rss
wp_trim_excerpt
wp_trim_words
wp_unique_post_slug
wp_unique_post_slug_is_bad_attachment_slug
wp_unique_post_slug_is_bad_flat_slug
wp_unique_post_slug_is_bad_hierarchical_slug
wp_update_attachment_metadata
wp_update_term_parent
wp_upload_bits
wp_user_dashboard_widgets
wp_video_embed_handler
wp_video_extensions
wp_video_shortcode
wp_video_shortcode_class
wp_video_shortcode_library
wp_video_shortcode_override
wp_xmlrpc_server_class
wxr_export_skip_postmeta
xmlrpc_allow_anonymous_comments
xmlrpc_blog_options
xmlrpc_default_post_fields
xmlrpc_default_posttype_fields
xmlrpc_default_revision_fields
xmlrpc_default_taxonomy_fields
xmlrpc_default_user_fields
xmlrpc_enabled
xmlrpc_login_error
xmlrpc_methods
xmlrpc_pingback_error
xmlrpc_prepare_comment
xmlrpc_prepare_media_item
xmlrpc_prepare_page
xmlrpc_prepare_post
xmlrpc_prepare_post_type
xmlrpc_prepare_taxonomy
xmlrpc_prepare_term
xmlrpc_prepare_user
xmlrpc_text_filters
xmlrpc_wp_insert_post_data
year_link</code>

Thanks  

