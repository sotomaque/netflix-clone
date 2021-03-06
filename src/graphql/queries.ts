/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        movies {
          nextToken
          startedAt
        }
        shows {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      movies {
        items {
          id
          title
          poster
          video
          year
          plot
          cast
          rating
          creator
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      shows {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          rating
          creator
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        movies {
          nextToken
          startedAt
        }
        shows {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        video
        year
        plot
        cast
        rating
        creator
        categoryId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      title
      poster
      video
      year
      plot
      cast
      rating
      creator
      categoryId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        video
        year
        plot
        cast
        rating
        creator
        categoryId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncShows = /* GraphQL */ `
  query SyncShows(
    $filter: ModelShowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        rating
        creator
        categoryId
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getShow = /* GraphQL */ `
  query GetShow($id: ID!) {
    getShow(id: $id) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      rating
      creator
      categoryId
      seasons {
        items {
          id
          name
          showId
          number
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listShows = /* GraphQL */ `
  query ListShows(
    $filter: ModelShowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        rating
        creator
        categoryId
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSeasons = /* GraphQL */ `
  query SyncSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        showId
        show {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          rating
          creator
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        number
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!) {
    getSeason(id: $id) {
      id
      name
      showId
      show {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        rating
        creator
        categoryId
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      number
      episodes {
        items {
          id
          title
          poster
          duration
          video
          number
          plot
          rating
          seasonId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSeasons = /* GraphQL */ `
  query ListSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        showId
        show {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          rating
          creator
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        number
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEpisodes = /* GraphQL */ `
  query SyncEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEpisodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        duration
        video
        number
        plot
        rating
        seasonId
        season {
          id
          name
          showId
          number
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEpisode = /* GraphQL */ `
  query GetEpisode($id: ID!) {
    getEpisode(id: $id) {
      id
      title
      poster
      duration
      video
      number
      plot
      rating
      seasonId
      season {
        id
        name
        showId
        show {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          rating
          creator
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        number
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listEpisodes = /* GraphQL */ `
  query ListEpisodes(
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        duration
        video
        number
        plot
        rating
        seasonId
        season {
          id
          name
          showId
          number
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
