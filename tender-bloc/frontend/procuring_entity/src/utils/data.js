export const categories = [
  {
    name: "technology",
    image:
      "https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg",
  },
  {
    name: "healthcare",
    image:
      "https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg",
  },
  {
    name: "food",
    image:
      "https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg",
  },
  {
    name: "construction",
    image:
      "https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg",
  },
  {
    name: "transportation",
    image:
      "https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg",
  },
  {
    name: "government",
    image:
      "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
  },
  {
    name: "others",
    image:
      "https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg",
  },
];

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
   }`;
