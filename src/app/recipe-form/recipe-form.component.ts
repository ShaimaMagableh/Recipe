import { Component,Output,EventEmitter, OnInit, Input } from '@angular/core';
import { recipe, RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  newRecipe?:string='';
    pic:URL|string='';
    description?:string='';
    recipes? : recipe[] ;

 @Output()event= new EventEmitter<string>()
Recipe: string ="";
 constructor(public recipesService:RecipesService){

 }
  ngOnInit(): void {
   
  }

  onNewRecipeInput(newRecipe:string){
    this.newRecipe= newRecipe;

  }
  onNewDescription(description:string){
    this.description = description;
  }
sendRecipe(event: string | undefined){
this.event.emit(event)
}
  
 
}
