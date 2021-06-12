// Import the core angular services.
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class AdminService {
 
	public retryCount: number = 6;
	public retryInterval: number = 2000;
 
   constructor() {
   }
}
