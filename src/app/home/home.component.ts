import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    drinks: any = [];
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
}
