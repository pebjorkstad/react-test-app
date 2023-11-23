import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import gql from 'graphql-tag';

const PROJECTS_QUERY = gql`
query Projects {
    projects {
        id
        title
        therapeuticArea
        studyType
        agreementType
        agreementStatus
        intitutionName
        university
        contactAtInstitution
        primaryContactAtPfizer
        secondaryContactAtPfizer
        budgetCathegory
        budgetProduct
        startOfAssigment
        endOfAssignment
        totalAmount
        pO
    }
}
`;

function useProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const httpLink = createHttpLink({
        uri: '/data-api/graphql'
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });

    client.query({ query: PROJECTS_QUERY })
      .then(result => {
        if (result.data && result.data.projects) {
          const fetchedProjects = result.data.projects
            .map(project => ({
              id: project.id,
              title: project.title,
              status: project.agreementStatus,
              agreementType: project.agreementType
            }));

            setProjects(fetchedProjects);
        } else {
          console.error('No projects found or unexpected data structure.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return projects;
}

export default useProjects;
