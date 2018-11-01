---
title: "PostgreSQL Copy Utility"
description: "TIL how to copy a PostgreSQL table from
  a remote server to a csv file on your local machine."
date: "2018-02-16"
---

Recently at work, I had to find a way to copy the data from a remote
PSQL database table to a csv locally on my machine. Fortunately, PSQL
has a nifty copy utility that makes this really easy. After you have
connected to the remote database via command line, just run the
following command:

```clike
\copy (SELECT * FROM your_table) to '/tmp/your_table.csv' with csv
```

And you will end up with data from the table in csv format on your
local machine! Neat! Note that because it is a PSQL backslash command,
the trailing semicolon is not necessary.

Unlike the normal `COPY` PSQL command, with `\copy`, the server doesn't
write the csv file. Instead, PSQL writes the CSV file and transfers the
data from the server to your local file system. This has the added benefit
that you do not have to have administrator privileges on the server, since
the file is not written there.

If you'd like learn more, check out (1)
[Stack Overflow post on \copy](https://stackoverflow.com/questions/1517635/save-pl-pgsql-output-from-postgresql-to-a-csv-file/1517692#1517692) and (2)
[PSQL docs on \copy](http://www.postgresql.org/docs/current/interactive/app-psql.html#APP-PSQL-META-COMMANDS-COPY).

