/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './src/routes/__root'
import { Route as SearchImport } from './src/routes/search'
import { Route as DownloadImport } from './src/routes/download'
import { Route as CallbackImport } from './src/routes/callback'
import { Route as PlaylistImport } from './src/routes/$playlist'
import { Route as IndexImport } from './src/routes/index'
import { Route as TrackTrackIdImport } from './src/routes/track/$trackId'
import { Route as PlaylistPlaylistIdImport } from './src/routes/playlist/$playlistId'
import { Route as ArtistIdImport } from './src/routes/artist/$id'
import { Route as ArtistArtistIdImport } from './src/routes/artist/$artistId'
import { Route as AlbumAlbumIdImport } from './src/routes/album/$albumId'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const DownloadRoute = DownloadImport.update({
  id: '/download',
  path: '/download',
  getParentRoute: () => rootRoute,
} as any)

const CallbackRoute = CallbackImport.update({
  id: '/callback',
  path: '/callback',
  getParentRoute: () => rootRoute,
} as any)

const PlaylistRoute = PlaylistImport.update({
  id: '/$playlist',
  path: '/$playlist',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TrackTrackIdRoute = TrackTrackIdImport.update({
  id: '/track/$trackId',
  path: '/track/$trackId',
  getParentRoute: () => rootRoute,
} as any)

const PlaylistPlaylistIdRoute = PlaylistPlaylistIdImport.update({
  id: '/playlist/$playlistId',
  path: '/playlist/$playlistId',
  getParentRoute: () => rootRoute,
} as any)

const ArtistIdRoute = ArtistIdImport.update({
  id: '/artist/$id',
  path: '/artist/$id',
  getParentRoute: () => rootRoute,
} as any)

const ArtistArtistIdRoute = ArtistArtistIdImport.update({
  id: '/artist/$artistId',
  path: '/artist/$artistId',
  getParentRoute: () => rootRoute,
} as any)

const AlbumAlbumIdRoute = AlbumAlbumIdImport.update({
  id: '/album/$albumId',
  path: '/album/$albumId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$playlist': {
      id: '/$playlist'
      path: '/$playlist'
      fullPath: '/$playlist'
      preLoaderRoute: typeof PlaylistImport
      parentRoute: typeof rootRoute
    }
    '/callback': {
      id: '/callback'
      path: '/callback'
      fullPath: '/callback'
      preLoaderRoute: typeof CallbackImport
      parentRoute: typeof rootRoute
    }
    '/download': {
      id: '/download'
      path: '/download'
      fullPath: '/download'
      preLoaderRoute: typeof DownloadImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/album/$albumId': {
      id: '/album/$albumId'
      path: '/album/$albumId'
      fullPath: '/album/$albumId'
      preLoaderRoute: typeof AlbumAlbumIdImport
      parentRoute: typeof rootRoute
    }
    '/artist/$artistId': {
      id: '/artist/$artistId'
      path: '/artist/$artistId'
      fullPath: '/artist/$artistId'
      preLoaderRoute: typeof ArtistArtistIdImport
      parentRoute: typeof rootRoute
    }
    '/artist/$id': {
      id: '/artist/$id'
      path: '/artist/$id'
      fullPath: '/artist/$id'
      preLoaderRoute: typeof ArtistIdImport
      parentRoute: typeof rootRoute
    }
    '/playlist/$playlistId': {
      id: '/playlist/$playlistId'
      path: '/playlist/$playlistId'
      fullPath: '/playlist/$playlistId'
      preLoaderRoute: typeof PlaylistPlaylistIdImport
      parentRoute: typeof rootRoute
    }
    '/track/$trackId': {
      id: '/track/$trackId'
      path: '/track/$trackId'
      fullPath: '/track/$trackId'
      preLoaderRoute: typeof TrackTrackIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$playlist': typeof PlaylistRoute
  '/callback': typeof CallbackRoute
  '/download': typeof DownloadRoute
  '/search': typeof SearchRoute
  '/album/$albumId': typeof AlbumAlbumIdRoute
  '/artist/$artistId': typeof ArtistArtistIdRoute
  '/artist/$id': typeof ArtistIdRoute
  '/playlist/$playlistId': typeof PlaylistPlaylistIdRoute
  '/track/$trackId': typeof TrackTrackIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$playlist': typeof PlaylistRoute
  '/callback': typeof CallbackRoute
  '/download': typeof DownloadRoute
  '/search': typeof SearchRoute
  '/album/$albumId': typeof AlbumAlbumIdRoute
  '/artist/$artistId': typeof ArtistArtistIdRoute
  '/artist/$id': typeof ArtistIdRoute
  '/playlist/$playlistId': typeof PlaylistPlaylistIdRoute
  '/track/$trackId': typeof TrackTrackIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$playlist': typeof PlaylistRoute
  '/callback': typeof CallbackRoute
  '/download': typeof DownloadRoute
  '/search': typeof SearchRoute
  '/album/$albumId': typeof AlbumAlbumIdRoute
  '/artist/$artistId': typeof ArtistArtistIdRoute
  '/artist/$id': typeof ArtistIdRoute
  '/playlist/$playlistId': typeof PlaylistPlaylistIdRoute
  '/track/$trackId': typeof TrackTrackIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/$playlist'
    | '/callback'
    | '/download'
    | '/search'
    | '/album/$albumId'
    | '/artist/$artistId'
    | '/artist/$id'
    | '/playlist/$playlistId'
    | '/track/$trackId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/$playlist'
    | '/callback'
    | '/download'
    | '/search'
    | '/album/$albumId'
    | '/artist/$artistId'
    | '/artist/$id'
    | '/playlist/$playlistId'
    | '/track/$trackId'
  id:
    | '__root__'
    | '/'
    | '/$playlist'
    | '/callback'
    | '/download'
    | '/search'
    | '/album/$albumId'
    | '/artist/$artistId'
    | '/artist/$id'
    | '/playlist/$playlistId'
    | '/track/$trackId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PlaylistRoute: typeof PlaylistRoute
  CallbackRoute: typeof CallbackRoute
  DownloadRoute: typeof DownloadRoute
  SearchRoute: typeof SearchRoute
  AlbumAlbumIdRoute: typeof AlbumAlbumIdRoute
  ArtistArtistIdRoute: typeof ArtistArtistIdRoute
  ArtistIdRoute: typeof ArtistIdRoute
  PlaylistPlaylistIdRoute: typeof PlaylistPlaylistIdRoute
  TrackTrackIdRoute: typeof TrackTrackIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PlaylistRoute: PlaylistRoute,
  CallbackRoute: CallbackRoute,
  DownloadRoute: DownloadRoute,
  SearchRoute: SearchRoute,
  AlbumAlbumIdRoute: AlbumAlbumIdRoute,
  ArtistArtistIdRoute: ArtistArtistIdRoute,
  ArtistIdRoute: ArtistIdRoute,
  PlaylistPlaylistIdRoute: PlaylistPlaylistIdRoute,
  TrackTrackIdRoute: TrackTrackIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$playlist",
        "/callback",
        "/download",
        "/search",
        "/album/$albumId",
        "/artist/$artistId",
        "/artist/$id",
        "/playlist/$playlistId",
        "/track/$trackId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$playlist": {
      "filePath": "$playlist.tsx"
    },
    "/callback": {
      "filePath": "callback.tsx"
    },
    "/download": {
      "filePath": "download.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/album/$albumId": {
      "filePath": "album/$albumId.tsx"
    },
    "/artist/$artistId": {
      "filePath": "artist/$artistId.tsx"
    },
    "/artist/$id": {
      "filePath": "artist/$id.tsx"
    },
    "/playlist/$playlistId": {
      "filePath": "playlist/$playlistId.tsx"
    },
    "/track/$trackId": {
      "filePath": "track/$trackId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
