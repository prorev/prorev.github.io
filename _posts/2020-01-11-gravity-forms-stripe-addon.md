---
id: 2953
title: Gravity Forms Stripe Addon
date: 2016-07-12 16:17:45
author: taimane
layout: post
permalink: /gravity-forms-stripe-addon/
published: true
categories:
   -
tags:
   -
---
Haven't found tutorials on <strong>Stripe</strong> integration for Gravity forms. Certainly, <strong>Stripe</strong> add-on is very cool and deserves attention.

Gravity forms, supports Stripe Add-on (http://www.gravityforms.com/add-ons/stripe/). And it looks just great.

[caption id="attachment_2957" align="aligncenter" width="488"]<img class="wp-image-2957 size-full" src="https://programming-review.com/wp-content/uploads/2016/07/stripe-form.png" alt="stripe form inside gravity forms" width="488" height="385" /> (1) How the Stripe form part looks on the web site.[/caption]

Note that anyone can use the Stripe add-on with Gravity Forms subscription.
Stripe has two modes:
* sandbox or the testing mode, and
* live mode.

[caption id="attachment_2956" align="aligncenter" width="223"]<img class="wp-image-2956 size-full" src="https://programming-review.com/wp-content/uploads/2016/07/stripe-live-test.png" alt="stripe live test" width="223" height="213" /> (2) Switching from testing to live mode in the Stripe dashboard[/caption]

You can switch between these two modes in Stripe dashboard on a single click.

(https://dashboard.stripe.com/)

[caption id="attachment_2955" align="aligncenter" width="782"]<img class="wp-image-2955 size-full" src="https://programming-review.com/wp-content/uploads/2016/07/stripe.png" alt="stripe account settings" width="782" height="64" /> (3) Stripe dashboard admin panel[/caption]

And you can set/read many info from the Stripe account settings.
(https://dashboard.stripe.com/account)

Most important settings will be the <strong>API Keys</strong>. There are API Keys for test and for live mode. You need to copy these keys to the Gravity Forms General Stripe settings, else your transactions will not work.

[caption id="attachment_2958" align="aligncenter" width="802"]<img class="wp-image-2958 size-full" src="https://programming-review.com/wp-content/uploads/2016/07/general-stripe-settings.png" alt="general stripe key settings in gravity forms" width="802" height="486" /> (4) General Stripe Settings. From here you can switch to live or to testing mode.[/caption]

Test mode is easy. In test mode you have some tricky cards to use when testing, where you just need to feel out any CC code and any expire month and year.
<table>
<thead>
<tr>
<th>Number</th>
<th>Card type</th>
</tr>
</thead>
<tbody>
<tr>
<td class="number"><code>4242424242424242</code></td>
<td>Visa</td>
</tr>
<tr>
<td class="number"><code>4012888888881881</code></td>
<td>Visa</td>
</tr>
<tr>
<td class="number"><code>4000056655665556</code></td>
<td>Visa (debit)</td>
</tr>
<tr>
<td class="number"><code>5555555555554444</code></td>
<td>MasterCard</td>
</tr>
<tr>
<td class="number"><code>5200828282828210</code></td>
<td>MasterCard (debit)</td>
</tr>
<tr>
<td class="number"><code>5105105105105100</code></td>
<td>MasterCard (prepaid)</td>
</tr>
<tr>
<td class="number"><code>378282246310005</code></td>
<td>American Express</td>
</tr>
<tr>
<td class="number"><code>371449635398431</code></td>
<td>American Express</td>
</tr>
<tr>
<td class="number"><code>6011111111111117</code></td>
<td>Discover</td>
</tr>
<tr>
<td class="number"><code>6011000990139424</code></td>
<td>Discover</td>
</tr>
<tr>
<td class="number"><code>30569309025904</code></td>
<td>Diners Club</td>
</tr>
<tr>
<td class="number"><code>38520000023237</code></td>
<td>Diners Club</td>
</tr>
<tr>
<td class="number"><code>3530111333300000</code></td>
<td>JCB</td>
</tr>
<tr>
<td class="number"><code>3566002020360505</code></td>
<td>JCB</td>
</tr>
</tbody>
</table>
And there are even more trickier cards numbers for special scenarios.
<table>
<thead>
<tr>
<th>Number</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="number"><code>4000000000000077</code></td>
<td>Charge will succeed and funds will be added directly to your available balance (bypassing your pending balance).</td>
</tr>
<tr>
<td class="number"><code>4000000000000093</code></td>
<td>Charge will succeed and domestic pricing will be used (other test cards use international pricing). This card is only significant in countries with split pricing.</td>
</tr>
<tr>
<td class="number"><code>4000000000000010</code></td>
<td>With default account settings, charge will succeed but <code>address_line1_check</code> and<code>address_zip_check</code> will both fail.</td>
</tr>
<tr>
<td class="number"><code>4000000000000028</code></td>
<td>With default account settings, charge will succeed but <code>address_line1_check</code> will fail.</td>
</tr>
<tr>
<td class="number"><code>4000000000000036</code></td>
<td>With default account settings, charge will succeed but <code>address_zip_check</code> will fail.</td>
</tr>
<tr>
<td class="number"><code>4000000000000044</code></td>
<td>With default account settings, charge will succeed but <code>address_zip_check</code> and<code>address_line1_check</code> will both be <code>unavailable</code>.</td>
</tr>
<tr>
<td class="number"><code>4000000000000101</code></td>
<td>With default account settings, charge will succeed unless a CVC is entered, in which case <code>cvc_check</code> will fail and the charge will be declined.</td>
</tr>
<tr>
<td class="number"><code>4000000000000341</code></td>
<td>Attaching this card to a <code>Customer</code> object will succeed, but attempts to charge the customer will fail.</td>
</tr>
<tr>
<td class="number"><code>4000000000000002</code></td>
<td>Charge will be declined with a <code>card_declined</code> code.</td>
</tr>
<tr>
<td class="number"><code>4100000000000019</code></td>
<td>Charge will be declined with a <code>card_declined</code> code and a <code>fraudulent</code> reason.</td>
</tr>
<tr>
<td class="number"><code>4000000000000127</code></td>
<td>Charge will be declined with an <code>incorrect_cvc</code> code.</td>
</tr>
<tr>
<td class="number"><code>4000000000000069</code></td>
<td>Charge will be declined with an <code>expired_card</code> code.</td>
</tr>
<tr>
<td class="number"><code>4000000000000119</code></td>
<td>Charge will be declined with a <code>processing_error</code> code.</td>
</tr>
</tbody>
</table>
Once you have the form where you will implement Stripe, make sure you fill out the special Stripe area inside the your new form. It may look like this.

[caption id="attachment_2959" align="aligncenter" width="763"]<img class="wp-image-2959 size-full" src="https://programming-review.com/wp-content/uploads/2016/07/stripe-settings-inside-gravity-forms.png" alt="stripe settings inside gravity forms" width="763" height="594" /> (5) Every Gravity forms that supports Stripe add-on has will have this settings[/caption]

This is separate from the general Settings area for Stripe in the Gravity Forms.

After you test your form at the end you will just need to migrate from the testing mode directly to the live Stripe mode. Two actions: First is to update Stripe dashboard (IMAGE 2), and second to update your web site Stripe settings (IMAGE 4).  

