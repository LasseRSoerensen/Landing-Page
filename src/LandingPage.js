import {loadPage} from './PageLoad';
export const landingPage = (() => {
    const load_header = () => {
        loadPage.create_element(false, ["header"], 'div');
        loadPage.create_element('header', ["logo"], 'div'); 
        loadPage.add_text('logo', "Header logo");
        loadPage.create_element('header', ['links'], 'ul'); 
        loadPage.create_element('links', ["link1"], 'li');
        loadPage.add_text('link1', "Header link one");
        loadPage.create_element('links', ["link2"], 'li');
        loadPage.add_text('link2', "Header link two");
        loadPage.create_element('links', ["link3"], 'li');
        loadPage.add_text('link3', "Header link three");
    };

    const load_landing_section = () => {
        loadPage.create_element(false, ["landing"], 'div');
        loadPage.create_element('landing', ["landing-description"], 'div');
        loadPage.create_element('landing-description', ["hero"], 'div');
        loadPage.add_text('hero', 'This website is awesome');
        loadPage.create_element('landing-description', ["description"], 'div');
        loadPage.add_text('description', 'This website has some subtext that goes here under the main title. Its a smaller font and the color is lower contrast');
        loadPage.create_element('landing-description', ["btn1"], 'button');
        loadPage.add_text('btn1', 'Sign up');

        loadPage.create_element('landing', ["landing-pic"], 'div');
        loadPage.create_element('landing-pic', ["pic"], 'div');
        loadPage.add_text('pic', 'This is a placeholder for an image');
    };

    const load_information_section = () => { 
        loadPage.create_element(false, ["information"], 'div');
        loadPage.create_element('information', ["info"], 'div');
        loadPage.add_text('info', "Some random information.");
        loadPage.create_element('information', ["boxes"], 'div');

        loadPage.create_element('boxes', ["item", "1"], 'div');
        loadPage.create_element('1', ["box"], 'div');
        loadPage.create_element('1', ["text", "t1"], 'div');
        loadPage.add_text('t1', "This is some subtext under an illustration or image");

        loadPage.create_element('boxes', ["item", "2"], 'div');
        loadPage.create_element('2', ["box"], 'div');
        loadPage.create_element('2', ["text", "t2"], 'div');
        loadPage.add_text('t2', "This is some subtext under an illustration or image");

        loadPage.create_element('boxes', ["item", "3"], 'div');
        loadPage.create_element('3', ["box"], 'div');
        loadPage.create_element('3', ["text", "t3"], 'div');
        loadPage.add_text('t3', "This is some subtext under an illustration or image");

        loadPage.create_element('boxes', ["item", "4"], 'div');
        loadPage.create_element('4', ["box"], 'div');
        loadPage.create_element('4', ["text", "t4"], 'div');
        loadPage.add_text('t4', "This is some subtext under an illustration or image");
    };

    const load_quote_section = () => { 
        loadPage.create_element(false, ["quote-section"], 'div');
        loadPage.create_element('quote-section', ["quote-box"], 'div');
        loadPage.create_element('quote-box', ["quote"], 'div');
        loadPage.add_text('quote', "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All i know is that it looks nice."); 
        loadPage.create_element('quote-box', ["author"], 'div');
        loadPage.add_text('author', "Author");
    };

    const load_signup_section = () => { 
        loadPage.create_element(false, ["signup-section"], 'div');
        loadPage.create_element('signup-section', ["signup"], 'div');
        loadPage.create_element('signup', ["signup-text"], 'div');
        loadPage.create_element('signup-text', ["signup-header"], 'div');
        loadPage.add_text('signup-header', "Call to action! It's time!");
        loadPage.create_element('signup-text', ["signup-description"], 'div');
        loadPage.add_text('signup-description', "Sign up for our product by clicking that button right over there!"); 
        loadPage.create_element('signup', ["signup-button"], 'button');
        loadPage.add_text('signup-button', "Sign up");
    };

    const load_footer = () => { 
        loadPage.create_element(false, ["footer"], 'div');
        loadPage.add_text('footer', "Copyright The Odin Project 2021");         
    };

    return {
        load_header, 
        load_landing_section, 
        load_information_section, 
        load_quote_section,
        load_signup_section, 
        load_footer
    };

})();