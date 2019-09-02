import { Component, OnInit, OnDestroy } from '@angular/core';
import {MovieService} from '../movie.service'
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit,OnDestroy {

  movieForm = this.fb.group({
    title:[''],
    description:[''],
    imageUrl:['']
  });

  valueChanges:any;

  constructor(private movieService: MovieService, private fb:FormBuilder) { }

  ngOnInit() {
    this.valueChanges = this.movieForm.valueChanges.subscribe(
      (res:any)=>{
        console.log("Writing out the movie form: ");
        console.log(res);
      },
      err=>{
        console.log("Error in movie form");
        console.log("err");

      },
      ()=>{
        console.log("Movie Form: Completed");
      }
    )
  }

  ngOnDestroy(){
    if(this.valueChanges)
      this.valueChanges.unSubscribe();
  }

  onSubmit(){
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const imageUrl = this.movieForm.value.imageUrl;

    this.movieService.createMovie(title,description,imageUrl);
    this.onReset();

  }

  onReset(){
    this.movieForm.reset();
  }

}
