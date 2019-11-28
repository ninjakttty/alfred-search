'use strict';
const alfy = require('alfy');



(async () => {
        const items = [

                {
                        "title": "normal",
                        "subtitle": "",
                        "icon": {}

                },
                         {
                        "title": "Keyboard Maestro keyword",
                                 "subtitle": "keyboard maestro",
                        "icon": {}
                },
                {
                        "title": "alfred",
                        "subtitle": "",
                        "icon": {}
                },


        ]

        const data = items.map(item => {
                item.arg = `${item.subtitle} ${alfy.input}`
                return item

        })



	alfy.output(items);
})();
