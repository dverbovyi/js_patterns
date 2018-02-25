PROTOTYPE
---------
    
-Intent

    * Specify the kinds of objects to create using a prototypical instance, and create
      new objects by copying this prototype.
    * Co-opt one instance of a class for use as a breeder of all future instances.

-Problem

   Application "hard wires" the class of object to create in each "new" expression.
    
-Solution

   Declare an abstract base class that specifies a pure virtual "clone" method, and, 
   maintains a dictionary of all "cloneable" concrete derived classes. Any class that
   needs a "polymorphic constructor" capability: derives itself from the abstract
   base class, registers its prototypical instance, and implements the clone() 
   operation.
    
   The client then, instead of writing code that invokes the "new" operator on a hard-wired
   class name, calls a "clone" operation on the abstract base class, supplying a string
   or enumerated data type that designates the particular concrete derived class desired. 
   
UML Diagram
-----------
![](../screenshots/prototype.png)      