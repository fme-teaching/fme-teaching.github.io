+++
# A Demo section created with the Blank widget.
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 25  # Order that this section will appear.

title = "Curriculum"
subtitle = ""


[content]
  # Page type to display. E.g. post, talk, or publication.
  page_type = "post"
  
  # Choose how much pages you would like to display (0 = all pages)
  count = 6
  
  # Choose how many pages you would like to offset by
  offset = 0

  # Page order. Descending (desc) or ascending (asc) date.
  order = "desc"

  # Filter posts by a taxonomy term.
  [content.filters]
    tag = ""
    category = "curriculum"
    publication_type = ""
    exclude_featured = false
  
[design]
  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view = 2
  
[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.
  
  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  # image = "background.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  # text_color_light = true  
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""

+++

**On Education: Forthcoming Special Issue of ACM's Formal Aspects of Computing journal**
(Scroll down for links to the papers)

ACM has been publishing guidelines for computer technology university
curricula [for more than five
decades](https://www.acm.org/education/curricula-recommendations), with the
first one specifically for Computer Science published in 2001. To the best of
our knowledge, these are the only curricular guidelines that have worldwide
recognition. While it is likely that no university follows them to the
letter, they are enormously valuable as a reference point. Since the field of
computer technology evolves quickly, ACM regularly updates its guidelines on
what should be taught. For instance, the Computer Science curricular
guidelines are revised once every decade;
[CS2023](https://dl.acm.org/doi/pdf/10.1145/3664191) is the latest
revision, recently published.


The ACM teaching recommendation model is complex. A short overview is that it
contains 17 knowledge areas deemed essential for Computer Science, each such
area further divided into knowledge units made of topics, some mandatory to
teach and some elective.

The papers in this issue put forward views as to why and how Formal Methods
should be represented in Computer Science curricula, in some cases, just as
suggested in the ACM guidelines, but in other cases, providing different
guidance. The starting point is the questions below, which have arisen from
informal discussions with CS2023 contributors to various knowledge areas.

- Does every Computer Scientist need to know Formal Methods?

Discussions here centred around the view that, while there is a belief that
formal methods are important, and they are growing in importance, it may
not yet be clear that every Computer Science graduate will need to use a
formal method in their career.

- Are Formal Methods just for the safety-critical industry?

Here, the issue under consideration was not the importance of Formal
    Methods, but that it might be restricted to a number of industry
    segments.

- Is the current offer of Formal Methods education adequate?

The point debated here was whether Formal Methods should (continue to) be
covered at graduate level as an elective rather than a required subject.
Given (the perception) that few undergraduate programs teach Formal
Methods, the discussion was whether we can conclude that the guidelines for
the Foundations of Programming Languages and Software Engineering knowledge
areas capture the current curriculum landscape, and so are appropriate.


Each paper included in this special issue addresses one of the questions
above.


In [Broy et al](https://dl.acm.org/doi/10.1145/3670795), arguments are
given that every Computer Scientist needs to know the theoretical background
of their field. An analogy is given to database management: "*Just as not all
graduates will need to know how to work with databases either, it is still
important for students to have a basic understanding of how data is stored
and managed efficiently.'*' Their message brings out the fact that Computer
Science graduates are also (software and systems) engineers.  And it is
perhaps uncontroversial that "*No engineer should be ignorant of the
foundations of their subject and the formal methods based on these.*''

In [ter Beek at al](https://dl.acm.org/doi/10.1145/3689374), an
extensive review of industrial uses of Formal Methods is presented,
demonstrating that safety-critical systems are not the only beneficiaries of
precision, reasoning, and proof. The authors "*... present a broad scope of
successful applications of formal methods in industry, not limited to the
well-known success stories from the safety-critical domain*". For example,
they present use cases in lithography manufacturing and cloud security in
e-commerce, and industrial use in Europe, Asia, and North and South America.

In [Dongol at al](https://dl.acm.org/doi/10.1145/3670419), the authors
explain that Formal Methods are currently **not** taught well, being often
associated with logic and theory. They argue that we need to teach all
Computer Science students "*Formal Methods thinking*'', which they define as
the ideas from Formal Methods applied in "*informal, lightweight, practical
and accessible ways*''. This includes, for instance, understanding key
concepts, but applying them using natural languages. The authors argue that
Formal Methods thinking should be part of the recommended curriculum for
every Computer Science student, since students then become much better
programmers.

A one-page summary of the contributions of the papers appears in the
[CS2023 curricular guidelines on page
433](https://dl.acm.org/doi/pdf/10.1145/3664191).

The 35 authors of these papers are well-known computer scientists who have
extensive experience in teaching Formal Methods in Academia or working with
them in Industry. They argue for introducing Formal Methods as a knowledge
area in the ACM guidelines, since currently Formal Methods are covered only
as elective topics in some knowledge units in two distinct knowledge
areas: Foundations of Programming Languages and Software Engineering.

Formal Methods are supported nowadays by efficient software tools; this is a
game changer regarding their usability and adoption from students and
practitioners. The evidence put forward in the papers of this special issue
suggests that not indicating Formal Methods as a core domain in a Computer
Science curriculum in 2024 is incomprehensible, similar maybe to how
Artificial Intelligence was not included just 10 years ago in the 2013
guidelines.

([Luigia Petre](https://luigiapetrewebpage.wordpress.com/), *Åbo Akademi University, Finland* and [Ana Cavalcanti](https://www-users.york.ac.uk/~alcc500/), *University of York, UK*)

**Papers in the Special Issue** 
- [On Formal Methods Thinking in Computer Science Education](https://doi.org/10.1145/3670419)
- [Does Every Computer Scientist Need to Know Formal Methods?](https://doi.org/10.1145/3670795)
- [Formal Methods in Industry](https://doi.org/10.1145/3689374)

