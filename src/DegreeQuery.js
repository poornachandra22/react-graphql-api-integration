import { gql } from "@apollo/client";
export const GET_DEGREES = gql`
  query getAllDegrees($courseName: String!) {
    getAllDegrees(courseName: $courseName) {
      courseName
    }
  }
`;
