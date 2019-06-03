---
title: "AWS Summit Chicago 2019"
description: "What I learned at AWS Summit Chicago 2019"
keywords: ["AWS", "Summit", "Chicago", "2019"]
date: "2019-05-31"
---

I attended three breakout sessions at AWS Summit Chicago 2019: *"SEC203: AWS identity services:
Enabling and securing your cloud journey"*, *"MAD302: Managing microservices using AWS App Mesh"*,
and *"ADB207: What's new in Amazon RDS"*.

### SEC203 - AWS Identity Services

Before this talk, I was vaguely familiar with AWS Identity and Access Management (IAM). After this
talk, I have a much better grasp on how AWS IAM and other identity services help build out companies'
AWS infrastructure in a secure, scalable manner. To summarize briefly, AWS identity services is
composed of five main services: (1) AWS Organizations, (2) AWS IAM, (3) AWS SSO, (4)
AWS Directory Service, and (5) AWS Cognito.

#### AWS Organizations

AWS Organizations is a centralized service for managing multiple AWS accounts across an organization.
Typically, a company will create an AWS master account, register as an AWS organization (Root), and
create a hierarchy of organizational units (OUs) underneath it representing the company's business
divisions (or some other organizational unit). Each organizational unit will have one (or more)
AWS member accounts underneath it. Each AWS account is a container for AWS resources and establishes
a clear isolation boundary for administration, network access, and permissions / resource sharing.

Additionally, the organization (Root), organizational units (OUs), and AWS member accounts can have
service control policies (SCPs) attached to them. A SCP defines the maximum permissions within that
segment (Root, OU, or AWS member account), cascading to any children (OUs or AWS member accounts)
below it. For example, if you wanted to creat a "database" OU to contain all the company database
infrastructure, you could create a SCP to restrict AWS account functionality to only AWS database
services and attach it to that "database" OU. Even if a user is granted IAM permissions to do
literally everything, he / she will still be restricted to only AWS database services within the
"database" OU.

#### AWS IAM

AWS Identity and Access Management (IAM) is how you securely manage access to AWS services and
resources. AWS IAM allows you to (1) authenticate / authorize AWS APIs, (2) provide fine-grain
access controls for AWS actions and resources, (3) specify policy-based permissions, and (4)
provide short-term credentials for humans, machines, and applications.

AWS IAM supports a number of authentication / authorization models such as SAML 2.0,
AWS SSO, or external identity systems (Microsoft Active Directory, Google, Facebook, etc).

You can control access for users by assigning unique security credentials to users and groups
to specify which AWS service APIs and resources they can access.

AWS IAM supports a number of policy-based permissions including the PARC model (Principal - Who,
Action - Can access, Resource - What, Condition - Under what condition) and the ABAC model
(attribute-based access control, basically tagging).

Short-term credentials can be delivered via trust-based exchange (time-bound credentials) or
AWS services (time-bound credentials that are rotated).

#### AWS SSO

AWS SSO makes it easy to centrally manage single sign-on access for multiple AWS accounts and
applications. You can create users within AWS SSO or connect to an existing directory of users.
Additionally, you can assign permission sets for each user. Pretty self-explanatory IMO.

#### AWS Directory Service

AWS Directory Service is a cloud implementation of Microsoft Active Directory. This is useful
when migrating Active Directory-dependent applications and Windows workloads to the cloud.

#### AWS Cognito

AWS Cognito makes it easy to add authentication to your applications. It's very similar in scope to
Keycloak, an open source authentication solution. It supports identity / access management
standards (OAuth 2.0, SAML 2.0, and OpenID Connect), external identity providers
(Google, Facebook, etc), multi-factor authentication, user / identity pools, and a customizable
sign up / login UI.

Additionally, you can define role-based access control for authenticated users which restricts access
to AWS resources to what you specify. I'm especially intrigued by this feature, as it has interesting
implications for a microservice architecture hosted on AWS. I'm interested to see how it compares to
Keycloak's realms / clients.

### MAD302 - AWS App Mesh

This was the most exciting talk I heard today.

AWS App Mesh is a service mesh that simplifies application-level networking, monitoring, traffic
rerouting, error diagnostics, and more across services in an AWS container service such as AWS
fargate, Amazon ECS, Amazon EKS, or Amazon EC2. Prior to AWS App Mesh, you would have to implement
each of these features service by service, which can be quite a pain.

AWS App Mesh works by deploying a sidecar proxy (specifically an [Envoy proxy](https://www.envoyproxy.io/))
along with each service. This proxy intercepts and routes all traffic to and from the service. More
importantly, all these proxies are linked together into a service mesh that enables service-to-service
communication control and observability as **a dedicated layer outside of the application layer**.

AWS App Mesh has a number of benefits over libraries or app code:

1) Generate uniform logs, metrics, and traces across services. For logging, you can implement HTTP
access logging, Amazon CloudWatch logs, or container logs. For metrics, CloudWatch metrics, StatsD,
or Prometheus. For tracing, AWS X-Ray or another Envoy-supported tracing driver.
2) Load balance traffic across services.
3) Shift traffic between deployments.
4) Decouple service teams.
5) Minimize impact to application code.

At the top of the list for me: less work to get logs, metrics, and tracing up and running across your
services! I am so sick of having to implement logging / metrics / tracing infrastructure for different
languages / platforms in each service over and over again. Being able to pull that infrastructure out
into its own layer and scale it across services is a huge win.

### ADB207 - AWS Amazon RDS

Not too much new for Amazon RDS, but learned a couple things:

1) Use General purpose (gp2) SSD for development / test environments. General purpose SSD volume
balances price and performance for a variety of workloads.
2) Use Provisioned IOPS (io1) SSD for production environment. Provisioned IOPS SSD volume is for
mission-critical low-latency or high-throughput workloads.
3) Don't use Magnetic storage. Why would you when you have SSD?
4) Can monitor RDS databases via CloudWatch metrics and Amazon RDS Performance Insights. Amazon RDS
Performance Insights is particularly useful in identifying database bottlenecks, since you can identify
the database loads for specific SQL queries.
5) You can stop and start your databases on a schedule! This is useful for development / test environments,
which you typically don't access on weekends. You can stop your databases during those times and only
pay for storage. Yay for reducing AWS costs!
