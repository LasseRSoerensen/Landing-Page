export const loadPage = (() => {
    const create_element = (attach_element, classes, type) => { 
        let header_element = document.createElement(type); 

        for (let index = 0; index < classes.length; index++) {
         /* header_element.setAttribute('class', name[index]);   */
          header_element.classList.add(classes[index]);
        };

        if (!attach_element) {
            document.body.appendChild(header_element);
        } else {
            /*document.getElementById(attach_element).appendChild(header_element);   */
            document.getElementsByClassName(attach_element)[0].appendChild(header_element);
        }
    };

    const test_func = (attach_element, name, type) => { 
        let header_element = document.createElement(type); 

         header_element.setAttribute('class', name);  

        document.getElementsByClassName(attach_element)[0].appendChild(header_element);   
    };
    
    const create_img = (attach_element, classes, src) => {

      let header_element = document.createElement('img'); 

      for (let index = 0; index < classes.length; index++) {
        /* header_element.setAttribute('class', name[index]);   */
         header_element.classList.add(classes[index]);
       };
      header_element.setAttribute('src', src);
      document.getElementsByClassName(attach_element)[0].appendChild(header_element); 
    };

    const add_text = (attach_element, text) => {
        let element = document.getElementsByClassName(attach_element)[0];
        element.innerHTML += text;
    };

    return {
      create_element, 
      create_img, 
      add_text, 
      test_func
    };
  })();