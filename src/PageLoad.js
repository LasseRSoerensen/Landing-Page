//Functions for creating html elements easier
export const loadPage = (() => {
    //Function for creating elements
    const create_element = (attach_element, classes, type) => { 
        let header_element = document.createElement(type); 

        for (let index = 0; index < classes.length; index++) {
          header_element.classList.add(classes[index]);
        };

        if (!attach_element) {
            document.body.appendChild(header_element);
        } else {
            document.getElementsByClassName(attach_element)[0].appendChild(header_element);
        };
    };
    //Function for creating a picture
    const create_img = (attach_element, classes, src) => {
      let header_element = document.createElement('img'); 

      for (let index = 0; index < classes.length; index++) {
         header_element.classList.add(classes[index]);
       };
      header_element.setAttribute('src', src);
      document.getElementsByClassName(attach_element)[0].appendChild(header_element); 
    };
    //Function for adding text
    const add_text = (attach_element, text) => {
        let element = document.getElementsByClassName(attach_element)[0];
        element.innerHTML += text;
    };

    return {
      create_element, 
      create_img, 
      add_text
    };
  })();