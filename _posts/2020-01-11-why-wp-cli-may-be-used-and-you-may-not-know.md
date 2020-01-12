---
id: 2633
title: Why WP-CLI may be used and you may not know
date: 2016-01-23 23:30:37
author: taimane
layout: post
permalink: /why-wp-cli-may-be-used-and-you-may-not-know/
published: true
categories:
   -
tags:
   -
---
<h2>To update the password for the user</h2>

<code>&gt;wp user update USERNAME --user_pass="PASSWORD"</code>

<h2>To search for plugins in WP directory based on key</h2>

<code>&gt;wp plugin search hooks</code>



Success: Showing 10 of 2506 plugins.

+---------------------------------+---------------------------+--------+

| name | slug | rating |

+---------------------------------+---------------------------+--------+

| hooks | hooks | 0 |

| WordPress Advanced Hook Sniffer | hook-sniffer | 52 |

| Simply Show Hooks | simply-show-hooks | 100 |

| THA Hooks Interface | tha-hooks-interface | 100 |

| Genesis Simple Hooks | genesis-simple-hooks | 94 |

| Genesis Visual Hook Guide | genesis-visual-hook-guide | 96 |

| BuddyForms Hook Fields | buddyforms-hook-fields | 100 |

| Hook Timer | hook-timer | 0 |

| WP Hooks Browser | wp-hooks-browser | 0 |

| Hook Flowchart | hook-flowchart | 0 |

+---------------------------------+---------------------------+--------+

<h2>To search for themes based on key</h2>

<code>&gt;wp theme search fancy</code>

Success: Showing 10 of 13 themes.

+----------------+----------------+--------+

| name | slug | rating |

+----------------+----------------+--------+

| Non Profit | non-profit | 0 |

| e-Shopper | e-shopper | 0 |

| Shrake | shrake | 0 |

| Scrawl | scrawl | 100 |

| MH Purity lite | mh-purity-lite | 92 |

| Penscratch | penscratch | 100 |

| Astoned | astoned | 0 |

| Bitter Sweet | bitter-sweet | 80 |

| Enormous | enormous | 0 |

| Unite | unite | 92 |

+----------------+----------------+--------+

<h2>To import a database:</h2>

<code>wp db import first-full.sql</code>

<h2>To create a user:</h2>

<code>wp user create dejan email@gmail.com --role=administrator</code>

 

