---
title: 'MySQL Dump Utility'
description: 'TIL how to export data from Amazon RDS MySQL instance using mysqldump'
keywords:
  [
    'MySQL',
    'Amazon',
    'RDS',
    'mysqldump',
    'single-transaction',
    'export',
    'data',
    'dump',
    'snapshot',
  ]
date: '2019-11-29'
---

Recently, I had to figure out a way to export data from a remote Amazon RDS MySQL instance to
my local machine. Fortunately, there is a `mysqldump` utility for this exact use case. The first
time I attempted this, I ran the following command:

```clike
mysqldump -h [rds_host_name] -u [rds_user_name] --databases [rds_db_name] -p > rds_db_dump.sql
// Enter db password as prompted
```

Database will be dumped to `remote_db_dump.sql`. This works, but has one big drawback – it locks
the remote database's tables during the database export! Not good! Once I figured that out, I
cancelled prior command quickly, which stopped the database dump.

If your MySQL instance is using InnoDB as the storage engine, you are in luck and can avoid this.
Next, I modified the above command like so:

```clike
mysqldump --single-transaction --routines --triggers \
  -h [rds_host_name] \
  -u [rds_user_name] \
  --databases [rds_db_name] \
  -p > rds_db_dump.sql
// Enter db password as prompted
```

The key flag you'll want to pay attention to is the `--single-transaction` flag. Instead of locking
the database, `--single-transaction` flag will instruct mysqldump to dump all database tables in a
single transaction. This will ensure that you get a consistent database snapshot at the time the
transaction was run. The other flags `--routines` and `--triggers` include database routines and
triggers as part of the snapshot.

If you'd like to learn more, check out (1) [Stack Overflow post on mysqldump from a remote machine](https://stackoverflow.com/questions/8444108/how-to-use-mysql-dump-from-a-remote-machine), (2) [Stack Overflow post on running mysqldump without locking tables](https://stackoverflow.com/questions/104612/run-mysqldump-without-locking-tables), and (3) [Amazon RDS MySQL documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Exporting.NonRDSRepl.html).
