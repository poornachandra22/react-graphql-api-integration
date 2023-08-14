import { gql } from "@apollo/client";
export const HOME_SEARCH_USER = gql`
  query homeSearchUser(
    $limit: Int
    $nextToken: String
    $inputFilter: SearchInputFilter!
  ) {
    homeSearchUser(
      limit: $limit
      nextToken: $nextToken
      inputFilter: $inputFilter
    ) @connection(key: "UserProfileDisplayModel") {
      edges {
        node {
          id
          name
          description
          score
          userId
          profileImageUrl
          bannerImageUrl
          dateOfBirth
          state
          userType
          college
          degree
          company
          gitHubUrl
          instagramUrl
          linkedInUrl
          followersCount
          followingCount
          amIFollowing
          profileCompleteness
          hasUpdatedInterests
          createdOn
          businessAddress
          businessLocation
          designation
        }
      }
    }
  }
`;
