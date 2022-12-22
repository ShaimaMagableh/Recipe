import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { recipe } from '../recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
value: recipe[]|undefined;
  event: any;
sendRecipe(arg0: recipe[]|undefined) {
throw new Error('Method not implemented.');
}
  public recipeForm ='';

    recipes? : recipe[] ;
    description :string=''; 
    recipe :string ='';
    picture:URL|string='';



  constructor (public recipesService:RecipesService ){ }

  ngOnInit():void {
     this.recipesService.getRecipes()
     .subscribe(data => this.recipes = data)
     console.log('data')
    }
    reciveRecipes($event?: any){
      this.recipes=$event
    }
   
    
  }




