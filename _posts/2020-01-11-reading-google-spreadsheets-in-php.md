---
id: 1738
title: Reading Google spreadsheets in PHP
date: 2013-11-04 00:51:49
author: taimane
layout: post
permalink: /reading-google-spreadsheets-in-php/
published: true
categories:
   -
tags:
   -
---
Here are some coding lines that using Zend GData interface to work with Google spreadsheets and worksheets inside them.

To get the info about all spreadsheets in your Google account
<pre class="prettyprint">
require_once 'Zend/Loader.php';
Zend_Loader::loadClass('Zend_Gdata_Spreadsheets');
Zend_Loader::loadClass('Zend_Gdata_ClientLogin');
$service = Zend_Gdata_Spreadsheets::AUTH_SERVICE_NAME;
$client = Zend_Gdata_ClientLogin::getHttpClient("email", "pass", $service);
$spreadsheetService = new Zend_Gdata_Spreadsheets($client);
$feed = $spreadsheetService->getSpreadsheetFeed();

// you can print spreadsheet names like this
for($i = 0; $i<count($feed->entries); $i++){
$ss = $feed->entries[$i]; // $ss is a spread sheet
print_r($ss->title->text); // spread name

// you can get worksheets in any spreadsheet like this...
$ws = $feed->entries[$i]->worksheets;
...
}


</pre>

Here is the info about number of worksheets in the spreadsheet:
<pre class="prettyprint">
$query = new Zend_Gdata_Spreadsheets_DocumentQuery();
$query->setSpreadsheetKey("key...");
$feed = $spreadsheetService->getWorksheetFeed($query);
echo count($feed->entries); // number of worksheets
</pre>

Prints all cells from the worksheet #1
<pre class="prettyprint">
$query = new Zend_Gdata_Spreadsheets_CellQuery();
$query->setSpreadsheetKey("key...");
$feed = $spreadsheetService->getWorksheetFeed($query);
$query->setWorksheetId(1);
$cellFeed = $spreadsheetService->getCellFeed($query);
foreach($cellFeed as $cellEntry) {
	$row = $cellEntry->cell->getRow();
	$col = $cellEntry->cell->getColumn();
	$val = $cellEntry->cell->getText();
	echo "$row, $col = $val\n";
}
</pre>

Thanks  

