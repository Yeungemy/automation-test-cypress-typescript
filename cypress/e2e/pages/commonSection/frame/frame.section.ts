class FrameSection{
    get selectors(): any{
        return{
           FRAME_TEST_BTN : '#framestest',
           IFRAME_HEADER: '#theheaderhtml',
           PAGE_NAVIGATION_LINK: '.page-navigation a',
           IFRAME_EXPLANATION: '.explanation',
           PAGE_BODY: '.page-body',
           LEFT_FRAME: '[name="left"]',
           MIDDLE_FRAME: '[name="middle"]',
           RIGHT_FRAME: '[name="right"]',
           TOP_FRAME: '[name="top"]'
        };
    }

    get strings(): any{
        return{
            IFRAME_NESTED_EXPLANATION_MSG: 'iFrames are nested pages within the body of the page.',
            PAGE_IFRAME_EXPLANATION_MSG: 'his page is used in an iFrame.'
        }
    }
}
const frameSection = new FrameSection();
export {frameSection};