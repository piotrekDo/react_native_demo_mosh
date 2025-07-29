import apiClient from './client';

const endpoint = '/listings'

export const getListings = () => apiClient.get(endpoint);


// export const addListing = (listing, onUploadProgress) => {
//   console.log(listing)
//   const data = new FormData();

//   data.append("title", listing.title);
//   data.append("price", listing.price);
//   data.append("categoryId", listing.category.id);
//   data.append("description", listing.description);

// listing.images.forEach((image, index) => {
//   data.append("images", {
//     uri: image.uri,
//     name: `image${index}.jpg`,
//     type: "image/jpeg",
//   });
// });

//   if (listing.location)
//     data.append("location", JSON.stringify(listing.location));

//   return apiClient.post(endpoint, data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

export const addListing = async (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.id);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      uri: image.uri,
      name: `image${index}.jpg`,
      type: "image/jpeg",
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.1.117:9000/api/listings");

  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      onUploadProgress(event.loaded / event.total);
    }
  };

  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      if (xhr.status === 201) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.response);
    xhr.send(data);
  });
};

