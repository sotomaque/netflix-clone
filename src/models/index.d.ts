import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly movies?: (Movie | null)[];
  readonly shows?: (Show | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Movie {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly video: string;
  readonly year?: number;
  readonly plot?: string;
  readonly cast?: string;
  readonly rating?: number;
  readonly categoryId: string;
  constructor(init: ModelInit<Movie>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie>) => MutableModel<Movie> | void): Movie;
}

export declare class Show {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly year?: number;
  readonly numberOfSeasons?: number;
  readonly plot?: string;
  readonly cast?: string;
  readonly rating?: number;
  readonly categoryId: string;
  readonly seasons?: (Season | null)[];
  constructor(init: ModelInit<Show>);
  static copyOf(source: Show, mutator: (draft: MutableModel<Show>) => MutableModel<Show> | void): Show;
}

export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly show?: Show;
  readonly number?: number;
  readonly episodes?: (Episode | null)[];
  constructor(init: ModelInit<Season>);
  static copyOf(source: Season, mutator: (draft: MutableModel<Season>) => MutableModel<Season> | void): Season;
}

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly video: string;
  readonly number?: number;
  readonly rating?: number;
  readonly plot?: string;
  readonly season?: Season;
  constructor(init: ModelInit<Episode>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode>) => MutableModel<Episode> | void): Episode;
}