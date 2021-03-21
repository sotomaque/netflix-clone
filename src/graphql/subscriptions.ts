/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          plot
          cast
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          plot
          cast
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          plot
          cast
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
      id
      title
      poster
      year
      plot
      cast
      categoryId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
      id
      title
      poster
      year
      plot
      cast
      categoryId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
      id
      title
      poster
      year
      plot
      cast
      categoryId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateShow = /* GraphQL */ `
  subscription OnCreateShow {
    onCreateShow {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      categoryId
      seasons {
        items {
          id
          name
          showId
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
export const onUpdateShow = /* GraphQL */ `
  subscription OnUpdateShow {
    onUpdateShow {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      categoryId
      seasons {
        items {
          id
          name
          showId
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
export const onDeleteShow = /* GraphQL */ `
  subscription OnDeleteShow {
    onDeleteShow {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      categoryId
      seasons {
        items {
          id
          name
          showId
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
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
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
      episodes {
        items {
          id
          title
          poster
          duration
          video
          plot
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
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
      episodes {
        items {
          id
          title
          poster
          duration
          video
          plot
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
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
      episodes {
        items {
          id
          title
          poster
          duration
          video
          plot
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      title
      poster
      duration
      video
      plot
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
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
      id
      title
      poster
      duration
      video
      plot
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
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
      id
      title
      poster
      duration
      video
      plot
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
          categoryId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
