// my sekcion About My 
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container-first', {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
      console.log(currentElement);
    }});// створив новий екземпляр цієї біліотеки,класу


// // User 
// new Accordion('.container-second', {
//     duration: 400,
//     showMultiple: true,
//     onOpen: function(currentElement) {
//       console.log(currentElement);
//     }
//   });
  
//   // Define several accordions with the same options (pass an array with selectors)
//   new Accordion(['.container-first', '.container-second'], {});
  
//   // or pass an array with HTMLElements
//   const accordions = Array.from(document.querySelectorAll('.accordion-container'));
//   new Accordion(accordions, {});
  
//   // Detach events
//   const accordion = new Accordion('.container-first');
//   accordion.detachEvents();
  