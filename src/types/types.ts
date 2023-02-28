export type actionType =
  | { type: "QUERY"; query: string }
  | { type: "SECTION"; section: string }

export type videoObjectType = {
  title: string
  thumbnail: {
    trending?: {
      small: string
      large: string
    }
    regular: {
      small: string
      medium: string
      large: string
    }
  }
  year: number
  category: string
  rating: string
  isBookmarked: boolean
  isTrending: boolean
}

export type stateType = {
  trending: videoObjectType[]
  viewList: videoObjectType[]
  viewListBookmarks?: videoObjectType[]
  queryViewList: videoObjectType[] | null
  section: string
  viewListHeading: string
  viewListHeadingBookmarks: string | null
  placeholder: string
  showTrending: boolean
  query?: boolean
}
