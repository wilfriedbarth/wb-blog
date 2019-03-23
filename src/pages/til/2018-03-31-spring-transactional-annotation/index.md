---
title: "Spring @Transactional Annotation"
description: "TIL how to write custom transactional methods on a CrudRepository"
keywords: ["Spring", "@Transactional", "Annotation", "CrudRepository"]
date: "2018-03-31"
---

The other day I ran into the following error when trying to implement
a custom method on a repository extending the CrudRepository interface:

```
No EntityManager with actual transaction available for current thread - cannot reliably
process 'remove' call; nested exception is javax.persistence.TransactionRequiredException
```

Apparently, Spring only marks the default methods of the CrudRepository interface
as transactional, so any custom methods that you define yourself won't be managed by
the EntityManager. The fix for this is quite simple. Just mark the custom method
with `@Transactional` and the EntityManager will recognize it as a transaction.

```java
@Repository
public interface UserRepository extends CrudRepository {

  User findByEmail(String email);

  @Transactional
  void deleteByEmail(String email);
}

```

If you'd like to learn more, check out (1)
[Stack Overflow post on transactionality](https://stackoverflow.com/questions/39827054/spring-jpa-repository-transactionality) and (2)
[Spring docs on transactionality](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#transactions).
