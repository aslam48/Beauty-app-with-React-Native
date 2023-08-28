this is how to fetch from sanity version  sanity 


fetch query down !!!

*[_type == "products"] | order(_createdAt desc) {
  _id,
  title, 
  productType,
  mainImage {
    asset -> {
      url
    }
  },
   bgImage {
    asset -> {
      url
    }
  },
  shortDescription,
    description,
    price,
    categories[] -> {
      _id,
      title,
       mainImage {
    asset -> {
      url
    }
  },
}
}
