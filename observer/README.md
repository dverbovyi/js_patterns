OBSERVER
--------
    
-Intent

    * Define a one-to-many dependency objects so that when one obkect changes state,
      all its dependents are notified and updated automatically.
    * Encapsulate the core components in a Subject abstarction, and the variant (or
      optional or user interface) components in an Observer hierarchy.
        
-Problem

   A large monolithic design does not scale well as new graphing or monitoring 
   requirements are levied.   
        
-Solution

   Define an object that is the 'keeper' of the data model and/or business logic
   (the Subject). Delegate all 'view' functionality to decoupled and distinct
   Observer objects. Observers register themselves with the Subject as they are
   created. Whenever the Subject changes, it broadcasts to all registered
   Observers that it has changed, and each Observer queries the Subject for that
   subset of the Subject's state that it is responsible for monitoring.
     
   This allows the number and 'type' or 'view' objects to be configured dynamically,
   instead of being statically specified at compile-time.
     
   The protocol described above specifies a "pull" interaction model. Instead of 
   the Subject "pushing" what has changed to all Observers, each Observer is 
   responsible for "pulling" its particular "window of interest" from the Subject.
   The "push" model compromises reuse, while the "pull" model is less efficient.
     
   Issues that are discussed, but left to the discretion of the designer, include:
   implementing event compression (only sending a single change broadcast after 
   a series of consecutive changes has occurred), having a single Observer
   monitoring multiple Subjects, and ensuring that a Subject notify its 
   Observers when it is about to go away.    
   
   
UML Diagram
-----------
![](../screenshots/observer)      