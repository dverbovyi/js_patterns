    BRIDGE PATTERN
    
-Intent

    * Decouple an abstraction from its implementation so that the two can vary independently.
    
    * Publish interface in an inheritance hierarchy, and bury implementation in its own
      inheritance hierarchy.
    
    * Beyond encapsulation, to insulation.
    
-Problem   
    'Hardening of the software arteries' has occurred by using subclassing of an abstract
    base class to provide alternative implementations. This locks in compile-time binding
    between interface and implementation. The abstraction and implementation cannot 
    be independently extended or composed.
    
-Solution
    
    Decompose the component's interface and implementation into orthogonal class
    hierarchies. The interface class contains a pointer to the abstract implementation
    class. This pointer is initialized with an instance of a concrete implementation
    class, but all subsequent interaction ffrom the interface class to the implementation
    class is limited to the abstraction maintained in the implementation base class.
    The client interacts with the interface class, and it in turn 'delegates' all 
    requests to the implementation class.
    
    The interface object is the 'handle' known and used by the client; while the
    implementation object is safely encapsulated to ensure that it may continue to
    evolve, or be entirely replaced (or shared at run-time).
    
    
    Use the Bridge pattern when:
    
        * you want run-time binding of the implementation
        * you have a proliferation of classes resulting  from a coupled interface and 
          numerous implementations
        * you want to share an implementation among multiple objects
        * you need to map orthogonal class hierarchies
        
    Consequences include:
    
        * decoupling the object's interface
        * improved extensibility
        * hiding details from clients
    
   
   
   
   