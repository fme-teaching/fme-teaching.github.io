---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Tutorial Series of the FME Teaching Committee"
subtitle: "Schedule"
summary: ""
authors: []
tags: []
categories: [Tutorials]
date: 2021-08-24
lastmod: 2021-08-24
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "TopLeft"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
#projects: []
---

**Schedule for FMTea tutorials**
 
In the FME Teaching Committee, we coordinate a (new) tutorial series, planned to be held monthly. We aim to increase the awareness and sharing of tools and techniques used for teaching formal methods. The series is held online via zoom. We record (whenever the speaker agrees) these presentations and collect them on the [FME Teaching Committee website](https://fme-teaching.github.io).

If you wish to receive announcements on these lectures, please subscribe to our mailing list fmtea@fmeurope.org by sending an email to sympa@lists.uu.se with the subject line  
**SUBSCRIBE IT-FMEUROPE-FMTEA firstname lastname**


	
## 2023
- January 27, 2023, 3 pm CET: [Dr Oana Andrei](http://www.dcs.gla.ac.uk/~oandrei/) (University of Glasgow, UK): **Modelling and Verification for Reactive Systems**.


## 2022:
- December 9, 2022, 3 pm CET: [Principal Research Engineer Markus A. Kuppe](https://www.linkedin.com/in/markus-kuppe-643559180/), RiSE group at Microsoft Research, US): **Stories from the trenches: Teaching the TLA+ specification language in Industry**.
- (**Wednesday**!!) November 30, 2022, **10 am CET**: [Prof Carroll Morgan](https://www.unsw.edu.au/staff/carroll-morgan) (University of New South Wales, Australia): **Teaching formal methods informally: a report from the front line**.
- October 28, 2022, 3 pm CEST: [Dr Allan Blanchard](https://allan-blanchard.fr) ([CEA-LIST](http://www-list.cea.fr/en/), France): **Formal methods for beginners and for C programs - Using Frama-C and its WP plug-in for teaching**. The recording of Dr. Blanchard's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=6e88214a-7d90-46ce-aed9-af3c00f2efbe). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/e9930tnjq16yqn7/AAB7acpEvzhXuqJsfmRcN0Mfa?dl=0). [Frama-C](https://frama-c.com) is a set of (mostly open-source) tools aimed at analysing C-code. [ACSL](https://frama-c.com/html/acsl.html) is the specification language used to express contracts that the C-code should implement or conform to. In his tutorial, Allan described the [WP plugin](https://frama-c.com/fc-plugins/wp.html) of Frama-C, a static analyser of C-code based on the weakest precondition calculus. He showed how interesting properties can be verified (e.g., the ACSL properties) and how also runtime problems that might occur are flagged by WP. Allan teaches WP to students in two courses and teaches also to industry. Safety-critical sectors (in railway, aviation, nuclear plants, etc) have an easier time accepting and adapting to Frama-C than non-critical sectors, as the former have a culture of using formal methods in some forms for some decades already. CEA-LIST works with the latter as well, introducing the subject stepwise. Certification can also be achieved with Frama-C - this provides motivation to students for investing in this field. [Here](https://frama-c.com/html/contact.html) you can contact the Frama-C community and [here](https://frama-c.com/html/publications.html) you can check up many resources, including publications and manuals on the different resources. 

- September 30, 2022, 3 pm CEST: [Prof Michael Leuschel](https://www.cs.hhu.de/en/research-groups/software-engineering-and-programming-languages/our-team/team/michael-leuschel) (Heinrich-Heine-University Düsseldorf, Germany): **Teaching Formal Methods and Theoretical Computer Science with ProB**. The recording of Prof Leuschel's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=1e9786af-5fee-49c3-bfba-af2000ecf655). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/qes8pww21oo6g23/AACS02B8iKQaXBm1qn7tbIH3a?dl=0). Michael is the inventor of ProB and his lecture focused on several areas related to ProB and teaching. First, he discussed ways of using ProB for teaching various computer science courses, from basic ones, such as Logic for Computer Science and Automata Theory to more advanced ones such as Safety-Critical Systems. Together with his research group, Michael developed a [jupyter kernel for ProB](https://gitlab.cs.uni-duesseldorf.de/general/stups/prob2-jupyter-kernel) and uses jupyter notebooks to, e.g., express ProB formulas, executable models for various formalisms (deterministic and non-deterministic finite automata, Turing machines, etc), executable B versions for various algorithms, and visualisations of these. [Here](https://gitlab.cs.uni-duesseldorf.de/general/stups/prob-teaching-notebooks) and [here](https://gitlab.cs.uni-duesseldorf.de/general/stups/prob2-jupyter-notebooks) are some examples. Second, students are given opportunities to get involved in developing code for ProB, for instance to develop various plugins. Michael showed an impressive ProB timeline slide where students contributions are emphasised: they are numerous! Third, we were shown how to combine animation and visualisation in ProB to teach. Some classical Event-B examples were shown (the cars on a bridge problem from the Event-B book of Abrial) as well as a Sudoku visualisation made by a young student. [VizB](https://prob.hhu.de/w/index.php?title=VisB) - ProB's visualisation feature was demonstrated with these examples.

- August 26, 2022, 3 pm CEST: [Dr Robert Lewis](https://robertylewis.com) (Brown University, US): **Teaching the theory and practice of proof assistants with Lean**. The recording of Dr. Lewis' lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=97416ff0-1d01-4d2c-b324-af1400e59c8f). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/ilwxupkexoeifu7/AABdpUr9KWEIwCgvkqVs3qu8a?dl=0). In the lecture, Dr Lewis explains how he teaches his course, called "Formal Proof and Verification". This is an elective course on learning to prove properties with the Lean theorem prover. The course is inspired by a similar course held by Jasmin Blanchette at VU Amsterdam, based on the "[Hitchhiker's Guide to Logical Verification](https://cs.brown.edu/courses/cs1951x/static_files/main.pdf)", that Jasmin Blanchette co-authored. In the course, the students learn to use logic as a precise specification language and learn the theory and practice of Interactive Theorem Provers. Rob encourages them to prove, even if the proofs are not completed. Also, part of the students contribute to writing code for the Lean theorem prover. It is this combination of academic software development and precise modeling that makes the students more prepared to continue doing research in the Formal Methods area.

- July 29, 2022: [Prof Erika Abraham](https://ths.rwth-aachen.de/people/erika-abraham/) (RWTH Aachen University, Germany): **Automatic exercise generation for satisfiability checking**. The recording of Prof. Abraham's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=6db40ef7-fd30-435a-8cac-af1400e45e2c). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/58euu3tccmiqcqh/AACUDD9EvYYYjk9ua9nGrLM4a?dl=0). In the lecture, Erika presents her course on satisfiability checking, that includes both SAT and SMT. This is an elective course. In 2008, when she started teaching the course, there were 3 students participating. Last year, during pandemic conditions, more than 500 students registered to the course in hybrid mode: around 70 were in the lecture hall, while the rest attended online. Most of the students did finish the course, 380 and 250 respectively registering for the two possible exam dates. Erika discusses what probably contributes to the success of the course, as well as the practical problems that occur and the approach to solve them. Among these, the automated generation of comparable SMT-solving exercises is one of the main issues.

	The abstract of Prof. Abraham's lecture is here:

	>We offer a lecture on satisfiability checking, repeated annually each 
winter term since 2009. The contents cover SAT solving to check the 
satisfiability of propositional logic formulas as well as 
SAT-modulo-theories (SMT) solving for checking the satisfiability of 
logical formulas over different theories (equality logic with 
uninterpreted functions, bit-vector arithmetic, linear and nonlinear 
real and integer arithmetic).

	>This lecture is challenging to teach, as the underlying math is - at 
least for the arithmetic theories - quite involved. The manual execution 
of the algorithms by the students plays a substantial role, thus it is 
important to offer the students a pool of exercises. Furthermore, with 
more that 500 registered students in the last winter term under pandemic 
conditions, we needed a large number of individual but comparable 
exercises for interactions during the lecture as well as for the online 
exam.

	>However, the automated generation of comparable SMT-solving exercises 
turned out to be a hard nut. In this talk we discuss the obstacles and 
propose some solutions.


- June 17, 2022: [Dr Tim Nelson](https://cs.brown.edu/~tbn/) (Brown University, US): **Building Formal Methods Classes for Everybody**. The recording of Dr Nelson's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=71222074-e82c-41f9-a860-aeb701604ce0). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/eu4faeqzclkvvw8/AAAFSkLxlttNsqcZqMJY2Yxka?dl=0), together with the chat from the talk. In this talk, Dr. Nelson describes his course, Logic for Systems, which is the first course in Formal Methods at Brown. He argues that, for some students, it will also be the only formal method course they take and discusses ways to make the course have an impact on all students. For instance, all students should understand the notion of invariant and how to prove it. Although not mandatory, the course has in average 135 participants every year! For the final projects, the students can choose freely what system to model and prove properties about: while there are many software-specific systems they choose, there are also projects about chemistry, baseball and basketball, which really shows that students understand that formal methods are universal: they are a tool we use for modeling and proving whatever system!

	The abstract of Dr Nelson's lecture is here: 

	> We think math and logic are beautiful and essential. If you teach a formal methods class, you probably agree. Some of our students, perhaps the most visible to us, also feel that way. But what about the other 90\%, the students who aren't inclined to take our classes or any non-required "theory" class at all? If formal methods really are essential, we owe *every* student an opportunity to explore them, discover useful ideas, and maybe even fall in love. 

	> Some people derisively respond to a more inclusive class by assuming it will coddle students. On the contrary, these students have their own strengths and abilities that we can and should design rigorous content around. After all, many of them will build the technologies we all use every day, so deepening their view of formalism satisfies both moral and selfish imperatives. This talk will cover the design space of such a course: pedagogy, tool choice (sometimes building our own!), assignment design, and even TA hiring. I'll talk about things that have worked well for us, other things that didn't, and what we learned along the way.
	
- (Thursday!!) April 28, 2022, 3 pm CET: [Prof. Jeremy Gibbons](https://www.cs.ox.ac.uk/people/jeremy.gibbons/) (University of Oxford, UK): **How to Design Co−Programs**. The recording of Prof. Gibbons's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=cc2dee8f-c53a-4009-b190-ae85015d4a54). A few screenshots from the lecture can be checked [here](https://www.dropbox.com/sh/wwxcyyen216591s/AAAQgVLRf7FFVdjIWBN2Z9_ba?dl=0). Prof. Gibbons takes us on a tour of teaching programming to novices and explains that writing a program does not happen by magic. His main thesis is that programs rely heavily on the structure of the input data as well as on that of the output data. This is a refinement to the hypothesis of the classic book, “How to Design Programs” by Felleisen, Findler, Flatt, and Krishnamurthi, which supports the idea the the structure of a program should follow the structure of the program's input data. The talk is supported by the paper and slides below:
	* How to Design Co−Programs (Jeremy Gibbons). In Journal of Functional Programming. Vol. 31. No. e15. 2021. Link [here](https://doi.org/10.1017/S0956796821000113).
	* Slides [here](https://www.dropbox.com/s/z8wsbh42ch3vq0x/fmtea-20220428.pdf?dl=0).
	
	 The abstract of Prof. Gibbons' lecture is here:

	>The observation that program structure follows data structure is a key lesson in introductory programming: good hints for possible program designs can be found by considering the structure of the data concerned. In particular, this lesson is a core message of the influential textbook "How to Design Programs" by Felleisen, Findler, Flatt, and Krishnamurthi. However, that book discusses using only the structure of input data for guiding program design, typically leading towards structurally recursive programs. We argue that novice programmers should also be taught to consider the structure of output data, leading them also towards structurally corecursive programs.

	
- February 25, 2022, 3 pm CET: [Prof Shriram Krishnamurthi](https://cs.brown.edu/~sk/) (Brown University, US): **From Tests to Properties: Property-Based Testing Using Relational Problems**. The recording of Prof. Krishnamurthi's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=44f23b72-521a-4e11-9792-ae470100ea96). Screenshots from the lecture, as well as the chat window can be checked [here](https://www.dropbox.com/sh/7c3n11z8n6qacg9/AADvxsspMhP0LyF60ToNzcG0a?dl=0). Shriram is involved in teaching 3 formal methods courses at Brown, with audiences varying between 70 and 200 students. In his talk, he discusses the importance of understanding the properties our programs should conform to, the role of unit testing in coding, as well as how students could gain from focusing on the problem to solve before programming a solution to it. Shriram's talk is based on two papers:
	* Using Relational Problems to Teach Property-Based Testing (John Wrenn, Tim Nelson, Shriram Krishnamurthi), link [here](https://cs.brown.edu/~sk/Publications/Papers/Published/wnk-use-rel-prob-pbt/)
	* Automated, Targeted Testing of Property-Based Testing Predicates (Tim Nelson, Elijah Rivera, Sam Soucie, Thomas Del Vecchio, Jack Wrenn, Shriram Krishnamurthi), link [here](https://cs.brown.edu/~sk/Publications/Papers/Published/nrsdwk-auto-targ-test-pbt-pred/)


## 2021:
- December 10, 9am CET: [Assoc Prof David Pearce](https://whileydave.com) (Victoria University of Wellington, New Zealand): **Teaching Software Verification with Whiley**. The recording of Assoc. Prof. Pearce's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=fc17ba8d-a69e-447e-828c-ae4700a3a370). Screenshots from the lecture as well as the chat with questions can be checked from [here](https://www.dropbox.com/sh/hbtg9x2bj3uwsin/AAAoa5r_OTXOy0rKjih5vNjza?dl=0). [Whiley](http://whiley.org) is a programming language that can be used for verification and it was initiated by David himself. [Here](https://en.wikipedia.org/wiki/Whiley_(programming_language)) is the Wikipedia page for it and [here](https://github.com/Whiley/) the github page. David's talk is divided into two parts - the first one describing and demonstrating Whiley and the second one offering hints on teaching it.

- November 20-21, 9am-4pm CET: [Tutorials@FM21](http://lcs.ios.ac.cn/fm2021/workshops-and-tutorials/) 
 	* FMTea videos can be seen from [here](http://lcs.ios.ac.cn/fm2021/fmtea_cet/); FMTea is currently the main workshop on teaching formal methods. 
 	* FMI videos can be seen from [here](http://lcs.ios.ac.cn/fm2021/fmi_cet/); FMI is a tutorial about formal methods used in connection with the digital twin concept.
 	* Event-B IDE videos can be seen from [here](http://lcs.ios.ac.cn/fm2021/eventb_dsl_cet/); Event-B IDE is a tutorial about developing an IDE for the Event-B language.
 	* Momba videos can be seen from [here](http://lcs.ios.ac.cn/fm2021/momba_cet/); Momba is a tutorial about quantitative modelling with python.

- October 29, 2021, 3pm CET: [Dr Ran Ettinger](https://www.cs.bgu.ac.il/~ranger/) (Ben-Gurion University, Israel): **Teaching Cantor's theorem, a pumping lemma, and the derivation of a heapsort algorithm using Dafny**. The recording of Dr. Ettinger's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=1e79e969-5ea5-40fd-b84a-adf30081a96c). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/317v6s68cjusb4i/AACg3JOZ14jcJNxyA9O0_y3Ha?dl=0). Ran demonstrates in this lecture a hands-on approach on how to prove mathematical theorems with Dafny, a programming language generally used for verifying the correctness of software. This is a refreshing approach that Ran continues to teach even now when he moved to industry (NVidia). Dafny was initiated by Rustan Leino at Microsoft Research and is now (since Rustan moved to Amazon) maintained by Amazon Web Services. [Here](https://github.com/dafny-lang/dafny) is Dafny's github website and [here](https://en.wikipedia.org/wiki/Dafny) is Dafny's Wikipedia page.

- September 24, 2021, 3pm CET: [Prof Sandrine Blazy](https://people.irisa.fr/Sandrine.Blazy/) (University of Rennes 1, France): **Why3 tool for deductive program verification**. The recording of Prof. Blazy's lecture can be seen [here](https://panopto.abo.fi/Panopto/Pages/Viewer.aspx?id=63fe9f17-4ee7-4bd1-b9e4-adad00fd64ac). A few screenshots from the lecture can be seen [here](https://www.dropbox.com/sh/p4e0p3a1lgu262w/AAB1NKFQuHAl009Tn3KemTnOa?dl=0). Why3 is an intermediate language used for deductive verification: the user writes a specification, a corresponding program, and uses Why3 to prove that the program satisfies the specification. This is achieved in the background by the tool, by generating verification conditions, using the weakest precondition calculus. Why3 interfaces with numerous (currently about 20) automatic and interactive theorem provers and does not require the user to come up with many assertions, except those validating specifications. [Here](http://why3.lri.fr) you can check Why3's website.


## Zoom coordinates
Luigia Petre is inviting you to a scheduled Zoom meeting.

- Topic: FMTea Tutorial Series
- Time: This is a recurring meeting Meet anytime

- Join Zoom Meeting: https://aboakademi.zoom.us/j/64254430116

- Meeting ID: 642 5443 0116

- Join by SIP
-- 64254430116@109.105.112.236 or 64254430116@109.105.112.235

- Join by H.323
-- 109.105.112.236 or 109.105.112.235




