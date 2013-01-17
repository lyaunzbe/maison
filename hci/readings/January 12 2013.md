#Readings Week 2#

##Usability##

The first three articles discuss usability, providing the general definition, application and rules. Usability is based around the ideas of user-centered design, meaning that a truly usable interface feels natural to the user, is easy to learn, and supports the user's needs/goals. Ultimately, the utility (or functionality) and usability of an interface  can determine the usefulness of a website. This is especially true of sites involved in e-commerce or selling products, where the consumer's purchasing decision often comes down to the ease of use and the navigation of the site.

The five primary factors of usability, as offered by the Neilsen Norman group, are as follows: 

  * Learnability: Can users learn the interface quickly and start using
  it effectively?

  * Efficiency: How quick/productive is the interface?

  * Memorability: After not using the interface for a while, how long
  will it take for a user to readjust?

  * Errors: What kinds of errors do users make and how are they handled?

  * Satisfaction: How pleasing is the actual interface to use?

An important skill to gain is to be able to accurately gauge the usability of an application/interface so that we can improve it if possible. This is done primarily through user expereince research with the demographic of users that your application/interface intends to target. Ideally, usability should be constantly considered throughout the iterative design process so that the users needs are properly met.

I enjoyed reading these articles as a generalized overview of what usability is. As a web developer myself, I definately have come to learn through experience that usability is the primary factor that drives reoccuring users. It would be interesting, continuining in a similar vein, to discuss the role of accessibility and how it affects usability. On one hand, targeting as broad of an audience as possible is always good for exposure. Yet, it somestimes occurs that a UX change for accesibility purposes makes an interface more complicated and less intuitive as a whole. 

##Captcha##

CAPTCHA is a system of security designed to tell computers apart from humans. This is beneficial to prevent the spamming of forms, stopping bots in their tracks and denying DDoS attacks. The way it generally does this is by providing an image with distorted text, something that a human can easily parse, but is much more difficult for a computer to discern. This article provides some examples of alternate CAPTCHA systems, such as BONGO, which is based on solving visual puzzles or PIX PIX, which asks the user to identify a set of pictures.

Honestly, I feel as though CAPTCHAs are outdated as a method of security. I have heard of certain implementations being cracked and it is also clear that CAPTCHAs are not always accessible by design. However, reCAPTCHA is a good example of using this security system to advance the digitization of text through crowdsourcing. reCAPTCHA works by showing two words, one known and one unknown. The users passes the security if they guess the known word. All the answers for the unknown words are collected for statistcal processing and are used for this text digitization. It would be interesting to think of some improvements or possible replacements for the CAPTCHA system among the class. It could even end up being a project on its own.

###Additional Questions###

Q1) What experience do you have with each of the rapid prototyping tools? If you were going to prototype something for this class today, what would you choose and why? Which would you like to learn more about and why?

A1) Since my primary focus has always been web development and design, I have a lot of experience with Photoshop, Illustrator, CSS, HTML, and Javascript (plus a  host of other scripting languages, such as Python, Ruby, Perl, etc). My process used to entail creating a mockup with Photoshop/Illustrator and then slicing/dicing that into HTML/CSS. However, now that I am super comfortable with HTML and CSS, I usually do all my prototyping straight in the browser (except for mobile interfaces). Therefore, for class activities and projects I would prefer to just use HTML,CSS and JS. I wouldn't mind learning more abstracted prototyping tools such as Balsmiq or Axure.

Q2) What works well about Captchas. What problems have you had with Captchas? How would you improve it?

A2) CAPTCHAs are good at preventing spam and general malicious activity by bots. It is an automated public turing test and works well because the code for it is open source, preventing any backdoors,etc. Honestly, my only issue with CAPTCHAs are their overuse and illegibility. Certain sites use a CAPTCHA for logging in, which is fine, but sites that require you to fill out a CAPTCHA for something you do often, like a forum post, is an inconvenience to the user. Having to refresh a CAPTCHA when you cant read it yourself is annoying as well. I think both of these problems can be solved by creating a system that is more unobtrusive and, possibly, runs in the background. Since new HTML5 media APIs are soon coming out, it would be interesting to see a CAPTCHA that uses the webcam or microphone. 

##Norman, Chapter 1##

In the first chapter of "The Design of Everyday Things", Norman talks about his frustration with modern products and their lack simplicity when it comes to actually using them. This is due to poor design and usability decisions. Products that are truly well designed do not need manuals or lengthy sets of instructions. They offer visual and physical cues that are far simpler, more intuitive, and less removed from the actual product.

Norman then goes on to discuss the role of visibility in design. Visibility is one important aspect of design that allows us to convey instructions and proper use of an object. In a way, it is also part of natural design, because it does not necessitate any additions or extensions to the product (Norman). Lack of visibility creates confusion, as does an overabundance of visibility. Achieving a middle ground of visibility makes the product much more fluid and natural to operate.

When designing, understanding the psychology of your materials and your targeted audience's psychological reactions to those materials is extremely important. This is known as affordance, the perceived and actual properties of an object. Affordances also integrate with visibility, as they can provide natural cues for operation. Examples for this are all around: Knobs imply turning, slots imply insertion, balls/spheres imply motion or bouncing, etc. It is important to use materials that feel natural and are widely known, giving users a familiar conceptual model of the interface you are providing them. With a good conceptual model and a proper level of visibility, a device doesn't need any separate instructions on operations; the object becomes a manual of its own.

The concept of mapping is also essential, as it allows us to form relationships between controls, their movement, and the resulting action. The best types of mappings are natural mappings, which take advantage of physical analogies and cultural standards that are well known (Norman). Norman finally goes on to discuss the technological paradox in which new features often lead to overcomplexity in a device.

I enjoyed this first chapter and am unexpectedly pleased with how well Norman writes. I thought this text would be far drier and outdated. On the contrary, Norman's use of anecdotes/examples are timeless and very effective in conveying the various aspects of design.

##Norman, Chapter 2##

This next chapter takes a step back from defining the technicalities of good design and shifts focus to the psychology of the user. An interesting notion Norman brings forward is the way users will actually blame themselves, or even their environment, when they cannot make sense of an interface. Furthermore, the user will then theorize and make their own incorrect conclusions as to why an interface behaves the way it does. 

The psychological condition of "learned helplessness" occurs when a user keeps failing an attempted task and eventually gives up, feeling like they are powerless. Another condition is "taught helplessness", which is when the user gets so overwhelmed with information, they feel that they are to blame for their own failures. These are both conditions you definitely don't want to provoke from your users and they can be avoided through a user-centered interface that is not only clear, but also provides helpful feedback.

Norman then goes a little deeper into human psychology, explaining the seven stages of action that users go through. All actions boil down to two major aspects, which are evaluation and execution. When attempting to create a successful product, execution must be clear and simple. The user must be able to easily convert his/her intentions into actions. The evaluation (of the outcome) must also be clear so that the user can know where they went wrong or if their actions were successful. 

I was a bit less enthusiastic about this chapter, but that was primarily because I am less interested in the psychological aspect of design. Nevertheless, I acknowledge that it is an important factor in design and, overall, I think Norman did a pretty good job explaining why and how to incorporate user psychology into proper design. This chapter also made me look at my own design process and I realized that I usually use my own psycholog as a basis for constructing interfaces. Yet, now that I think about it, this may not be ideal, since not all my users may have similar exposure and previous experience.

##Norman, Chapter 3##

In the third chapter of "The Design of Everyday Things", Norman focuses
on people's behavior and how this behavior develops through internal and
external knowledge, and cosntrians. He asserts that we don't need to store 
the associated knowledge of a particular behavior. In fact, the distribution 
of this knowledge, across our mind, the world, and other sources, is
more effective.Our imprecise knowledge, can still give rise to percise
behaviors.

There are four reaons why precise behavior can arise from imprecise
knowledge: (1) Information is the world: Much of the behaviors and
actions we need to know are available from our own environment. 
(2) Great percision is not required: There is no need for perfect
accuracy. Being able to distinguish from other behaviors is enough.
(3) Natural constraints: Often we can figure out proper behavior through
natural and physical limitations that restricts anything but correct
usage. (4) Cultural contstraints: This is similiar to a natural
constraint but more specific to the geopgraphic location.

Norman then delves closer into the human cognitive element. He explains
how people use two types of knowledge: The knowledge of how (or procedural 
knowledge) and the knowledge of facts (conceptual knowledge). We then
explore how memory is classified and used. It is important to realize
that memory works different for arbitrary concepts, meaningful
relationships, and explanations. Memory of arbitrary concepts is the
least effective method, while memory of meaningful relationships is much
stronger and is formed from current knowledge associated with an item.
Memories of explanations are also strong because they are formed and
retained through a proper understanding. 

I thought this chapter was quite interesting. It really is fascinating,
yet difficult, to consider the cognitive model when designing, but I can
definately see how important it is. I also appreciate Norman's
explanation of tradeoffs because it is so relevant to my past
experience, not even in design, but with building applications in
general.

##Norman, Chapter 4##

The fourth chapter considers the issue of knowing how to operate a novel
object never used before. It turns out this problem is mitigated from
associated models, but moreso through various types of constraints and
affordances. 

Some of the most effective constraints are physical constraints, since
they show you what operations are possible and which aren't. There are
also cultural constraints, which similarly limit operation, but this is
more based on geographic location and societal implications. Then we have 
logical constraints, which we see in natural mappings, based on spatial
relationships or even layout. Semantic constraints, on the other hand,
rely on our knowledge of the situation and the world. An example would
be knowing where the windshield goes on a motorcycle.

Other issues discussed in this chapter include visibility and feedback,
which prove crucial to facilitate proper use and understanding of
actions taken. Norman makes the case that sound isn't used enough to
provide visibility and feedback, even though it has great potential in
this area.

I enjoyed this chapter, particularly all the examples. Norman's style of
providing explanations of terminology through conventional explanation
and then through case-studies of specific interfaces seems to work
really well for my understanding.
