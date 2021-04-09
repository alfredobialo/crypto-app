import {Component, VERSION} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    template: `
        <div class="p-3">
            <p class="lead">
                Home Component</p>
            <h1>Welcome to Angular<sup class="text-primary">{{ngVersion}}</sup></h1>

          <my-counter></my-counter>
        </div>
    `
})
export class HomeComponent {
    ngVersion = VERSION.full;

    constructor(private activateRoute: ActivatedRoute, private title: Title, private meta: Meta) {
    }

    ngOnInit() {
        this.activateRoute.data.subscribe(x => this.renderMetaData(x));
    }

    private renderMetaData(x: any) {
        console.log(x);
        this.title.setTitle(x.pageTitle);
        const extractedMeta: any[] = x.meta;
        extractedMeta.forEach(y => this.meta.addTag({name: y.name, content: y.content}));
    }

}
