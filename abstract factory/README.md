   ABSTRACT FACTORY


- Intent

      * provide an interface for creating families of related or dependant 
        objects without specifying their concrete classes;
        
      * a hierarchy that encapsulates: many possible 'platforms',
        and the construction of a suite of 'products';

- Problem

    If an application is to be portable, it needs to encapsulate platform dependencies.
    These 'platforms' might include: windowing system, operating system, database, etc.
    Too often, this encapsulation is not engineered in advance, and lots of #ifdef case
    statements with options for all currently supported platform begin to procreate like
    rabbits throughout the code.
   
- Solution

    Provide a level of indirection that abstracts the creation of families of related
    of dependent object without directly specifying their concrete classes.
    The 'factory' object has the responsibility for providing creation services for the 
    entire platform family.
    ! Clients never create platform object directly, they ask the factory to do that for them.
    
    This mechanism makes exchanging product families easy because the specific class
    of the factory object appears only once in the application - where it is instantiated.
    The application can wholesale replace the entire family of products simply by instantiating
    a different instance of the abstract factory. 

