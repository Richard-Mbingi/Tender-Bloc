export const userQuery = (userId) => {
     const query = `*[_type == "user" && _id == '${userId}']`;
   
     return query;
   };
   
   export const searchQuery = (searchTerm) => {
     const query = `*[_type == "tender" && title match "${searchTerm}" || category match "${searchTerm}" || about match]{
       image {
         asset -> {
           url
         }
       },
       _id,
       destination,
       postedBy -> {
         _id,
         userName,
         image
       },
       save[] {
         _key,
         postedBy -> {
           _id,
           userName,
           image
         },
       },
     }`;
     return query;
   };
   
   export const feedQuery = `*[_type == 'tender'] | order(_createdAt desc) {
     image {
       asset -> {
         url
       }
     },
     _id,
     destination,
     postedBy -> {
       _id,
       userName,
       image
     },
     save[] {
       _key,
       postedBy -> {
         _id,
         userName,
         image
       },
     },
   }`
   