﻿"use strict";
class App extends UIPage {
    constructor(mainDoc) {
        super(mainDoc);
        try {
            //#region essential libs
            this.importLib({
                libName: 'jquery-3.6.0',
                jsPath: 'jquery.min.js'
            });
            this.importLib({
                libName: 'jquery-mask-1.14.16',
                jsPath: 'jquery.mask.js'
            });
            this.importLib({
                libName: 'fontawesome-free-5.15.3',
                cssPath: 'css/all.min.css'
            });
            this.importLib({
                libName: 'bootstrap-4.6.1',
                cssPath: 'bootstrap.css',
                jsPath: 'bootstrap.js'
            });
            //#endregion 
            this.navigateToView(new HomeView());
        }
        catch (error) {
            new DefaultExceptionPage(error);
        }
    }
}
