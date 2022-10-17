export function idToUrl(id) {
    
    const url = 'https://www.girchi.com/jsonapi/user/user?' + new URLSearchParams({
        'include': 'user_picture',
        'filter[first][condition][path]': 'drupal_internal__uid',
        'filter[first][condition][operator]': '=',
        'filter[first][condition][value]': id,
    });
    
    return url;
}
