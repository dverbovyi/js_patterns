    TEMPLATE METHOD
   
-Intent

    * Define the skeleton of an algorithm in an operation, deferring some steps to
      client subclasses. Template Method lets subclasses redefine certain steps of
      an algorithm without changing the algorithm's structure.
    * Base class declares algorithm 'placeholders', and derived classes implement
      the placeholder.  
    
-Problem
    
      Two different components have significant similarities, but demonstrate no reuse
      of common interface or implementation. If a change common to both components
      becomes necessary, duplicate effort must be expended.  
         
-Solution

      The component designer decides which steps of an algorithm are invariant, and
      which are variant (or customizable). The invariant steps are implemented in an
      abstarct base class, which the variant steps are either given a default
      implementation, or no implementation at all. The variant steps represent 'hooks',
      or 'placeholders', that can, or must, be supplied by the component's client in a
      concrete derived class.
      
      The component designer mandates the require steps of an algorithm, and the
      ordering of the steps, but allows the component client to extend or replace
      some number of these steps.
      
      Template Method is used prominently in frameworks. Each framework implements the
      invariant pieces of a domain's architecture, and defines 'placeholders' for all
      necessary or interesting client customization options. In so doing, the framework
      becomes the 'center of the universe', and the client customization and simply
      'the third rock from the sun'. This inverted control structure has been affectionately
      labelled 'the Hollywood principle' - 'don't call us, we'll call you'.
      