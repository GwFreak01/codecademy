const apiKey = 'nftEfTS1zSqX9FjGaOl5AU2HEOPBRzwu2V3-8bx5LbYjXMKpVQhskTHtz9IHFQVabiZDWwTUHf1pb4mxeRkSLbJZY4oUF3NQLbwAea2RieMoBtX2B5vZa_rums-QW3Yx';

export const Yelp = {
    search(term, location, sortBy) {
        const bypassCORSRestriction = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://api.yelp.com/v3/businesses/search?';
        const queryParams = `term=${term}&location=${location}&sort_by=${sortBy}`;
        const endpoint = bypassCORSRestriction + url + queryParams;
        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    let fullAddress =`${business.location.address1}`;
                    if (business.location.address2) {
                        fullAddress += `, ${business.location.address2}`;
                    }
                    if (business.location.address3) {
                        fullAddress += `, ${business.location.address3}`;
                    }
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: fullAddress,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};
