import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";



const TypedReactHooksDemo = ({heroSubTitle}) => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
   
   
    const options = {
    	strings: heroSubTitle
      ,
      typeSpeed: 190,
      backSpeed: 190,
      loop:true,
      cursorChar: '_',
      loopCount: Infinity,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
      <div className="">
        <span  ref={el} />
      </div>

  );
}

export default TypedReactHooksDemo