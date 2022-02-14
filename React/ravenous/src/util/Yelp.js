const apiKey = 'qTctP-gUhw2ovd2QdB1OFlaj8y0aNNmRKEkNpGO7zDS0FZRXnnb8OEdcU32YLwcr780m1aEKtXSfbvgnlzpeMsUP_CMbjYKN0fmt1VpH_-n5HPnVRlMNRDorhGTuYHYx';

const Yelp = {
    search: function(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { 
                Authorization: `Bearer ${apiKey}`  
            } 
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    },
};

export default Yelp;