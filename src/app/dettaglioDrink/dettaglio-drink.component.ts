import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-dettaglio-drink",
    templateUrl: "dettaglio-drink.component.html",
    styleUrls: ["dettaglio-drink.component.css"],
})
export class DettaglioDrinkComponent {
    details: any = [];
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        // una get verso un indirizzo che da una risposta
        this.http
            .get(
                "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200"
            )
            .subscribe((response: any) => {
                console.log(response);
                this.details = response.drinks;
            });
    }
}
