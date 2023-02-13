// import fetch from "isomorphic-fetch";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://api.spacex.land/graphql/",
//   cache: new InMemoryCache(),
// });

// const { data } = await client.query({
//   query: gql`
//     query {
//       patients {
//         id
//         fullName
//         admittingDoctor
//         mrdNumber
//         dateOfBirth
//         dateOfAdmission
//         department
//         cormorbodities
//         height
//         weight
//       }
//     }
//   `,
// });

const API_URL = 'http://localhost:8000/graphql/';

export default async function DataFetch() {

    // console.log("DataFetch: "){ query, variables }

    const client = new ApolloClient({
        uri: API_URL,
        cache: new InMemoryCache(),
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `JWT ${localStorage.getItem('token')}`
            'Access-Control-Allow-Origin': 'http://localhost:8000',
        }
      });
      
      const { data } = await client.query({
        query: gql`
          query {
            patients {
              id
              fullName
              admittingDoctor
              mrdNumber
              dateOfBirth
              dateOfAdmission
              department
              cormorbodities
              height
              weight
            }
          }
        `,
      });

      console.log("Data: ",data);
    return data;
}



// export default ({ query, variables }) => {

//   const body = {
//     query,
//     variables,
//   };

//   const apiConfig = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   };

//   return fetch(API_URL, apiConfig).then(function (response) {
//     const contentType = response.headers.get('content-type');
//     if (response.ok) {
//       if (contentType && contentType.indexOf('application/json') !== -1) {
//         return response.json().then((json) => json);
//       }
//       if (contentType && contentType.indexOf('text') !== -1) {
//         return response.text().then((text) => text);
//       }
//       return response;
//     }
//     console.error(
//       `Response status ${response.status} during dataFetch for url ${response.url}.`
//     );
//     throw response;
//   });
// };
