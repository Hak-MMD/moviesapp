export class Movie {
  constructor(
    id,
    title,
    posterPath,
    release_date,
    rating,
    genres,
    runtime,
    overview
  ) {
    this.id = id;
    this.title = title;
    this.posterPath = posterPath;
    this.release_date = release_date;
    this.rating = rating;
    this.genres = genres;
    this.runtime = runtime;
    this.overview = overview;
  }
}
