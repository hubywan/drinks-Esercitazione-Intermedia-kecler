import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    visible = false;
    drinks: any = [];

    cambiaVisibilita() {
        this.visible = !this.visible;
    }
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        // una get verso un indirizzo che da una risposta
        this.http
            .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .subscribe((response: any) => {
                console.log(response);
                this.drinks = response.drinks;
            });
    }

    delete(idFattura: number) {
        this.http
            .delete("http://www.pippo.it/fattura?id=" + idFattura)
            .subscribe((response) => {
                // ..
            });
    }
}
