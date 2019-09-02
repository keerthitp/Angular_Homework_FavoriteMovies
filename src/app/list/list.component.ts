import { Component, OnInit } from '@angular/core';
import {MovieService, Movie} from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  
  movieToBeDisplayed:any;

  editMovie={};

  movies= [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    setTimeout(()=>{
    this.movies = this.movieService.getAllMovies()}, 0);
      
  }

  onDeleteMovie(i:number){
    this.movieToBeDisplayed = false;
    this.movieService.deleteMovie(i);
  }

  onViewMovie(index:number){
    
    this.movieToBeDisplayed = this.movieService.getMovieByIndex(index);
    
  }

  onEditMovie(index:number){
      this.movieToBeDisplayed  = false;
      this.editMovie[index] = true;
  }

  onSaveEditedMovie(index:number){
    this.movieToBeDisplayed  = false;
    this.editMovie[index] = false;
  }

}
