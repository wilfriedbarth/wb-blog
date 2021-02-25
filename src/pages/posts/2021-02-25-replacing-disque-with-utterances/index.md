---
title: 'Replacing Disqus with Utterances'
description: 'Moving to a new commenting setup for my blog'
keywords: ['Disqus','Utterances','Blog','Comments']
date: '2021-02-25'
---

A couple days ago, I decided to move from [Disqus](https://disqus.com/) 
to [Utterances](https://utteranc.es/) (created by [Jeremy Danyow](https://github.com/jdanyow))
for comments on my blog. 

Following the instructions, I set up a [comments](https://github.com/wilfriedbarth/wb-blog-comments/issues) 
repo to host the issues and responses.

Next, I made a [comments component](https://github.com/wilfriedbarth/wb-blog/blob/master/src/components/common/Comments.js) 
to add the script tag to load Utterances. Note the use of ref, effect, and 
cleanup function to dynamically add / remove the script tag. 

Finally, I added the comments component to my [post](https://github.com/wilfriedbarth/wb-blog/blob/master/src/templates/post.js) 
and [til](https://github.com/wilfriedbarth/wb-blog/blob/master/src/templates/til.js) templates.

In total, it took less than hour to setup. Super easy and clean! :)
