---
id: 31
title: Microsoft SQL Server insert into a table in a loop
date: 2011-02-28 09:18:58
author: taimane
layout: post
permalink: /loop-insert-into-a-table/
published: true
categories:
   -
tags:
   -
---
For Microsoft SQL Server here is how you can organize insert into a table in a loop:

<pre>CREATE TABLE dbo.Test#1 (
blob varbinary(MAX) constraint FILESTREAM NULL
)
GO
  
declare @i int;
SET @i = 0;
while @i < 14
begin
	INSERT INTO Test#1
	(blob)
	VALUES
	(cast(replicate('123345678901234567890',203) AS varbinary(MAX)));
	SET @i = @i + 1;
end;
GO</pre>

Thanks.
  

