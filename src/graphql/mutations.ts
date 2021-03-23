/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createShow = /* GraphQL */ `
  mutation CreateShow(
    $input: CreateShowInput!
    $condition: ModelShowConditionInput
  ) {
    createShow(input: $input, condition: $condition) {
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
export const updateShow = /* GraphQL */ `
  mutation UpdateShow(
    $input: UpdateShowInput!
    $condition: ModelShowConditionInput
  ) {
    updateShow(input: $input, condition: $condition) {
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
export const deleteShow = /* GraphQL */ `
  mutation DeleteShow(
    $input: DeleteShowInput!
    $condition: ModelShowConditionInput
  ) {
    deleteShow(input: $input, condition: $condition) {
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
export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
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
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
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
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
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
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
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
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
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
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
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
