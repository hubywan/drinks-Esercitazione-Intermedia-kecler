import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    visible = false;
    // drinks: any = [];

    cambiaVisibilita() {
        this.visible = !this.visible;
    }
    constructor(private http: HttpClient) {}

    // delete(idFattura: number) {
    //     this.http
    //         .delete("http://www.pippo.it/fattura?id=" + idFattura)
    //         .subscribe((response) => {
    //             // ..
    //         });
    // }
}
