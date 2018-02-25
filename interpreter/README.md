INTERPRETER
-----------
    
-Intent

    * Given a language, define a representation for its grammar along with an interpreter
      that uses the representation to interpret sentences in the language.
    * Map a domain to a language, the language to a grammar, and the grammar to a 
      hierarchical object-oriented design.
      
-Problem

   A class of problems occurs repeatedly in a well-defined and well-understood domain. 
   If the domain were characterized with a "language", then problems could be easily 
   solved with an interpretation "engine".
     
-Solution

  The Interpreter pattern discusses: defining a domain language (i.e. problem 
  characterization) as a simple language grammar, representing domain rules as language
  sentences, and interpreting these sentences to solve the problem. The pattern uses
  a class to represent each grammar rule. And since grammars are usually hierarchical 
  in structure, an inheritance hierarchy of rule classes maps nicely.
    
  An abstract base class specifies the method ```interpret().``` Each concrete subclass 
  implements  ```interpret()``` by accepting (as an argument) the current state of the 
  language stream, and adding its contribution to the problem solving process.
  
UML Diagram
-----------

![](../screenshots/interpreter)  
    
    

    
     
     
     
 
    