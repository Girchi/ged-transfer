export function termToUrl(term) {
    const words = term.split(' ');
    let url = '';
    const baseUrl = process.env.REACT_APP_DRUPAL_DOMAIN;

    if( +term > 0 ) {
        url = baseUrl + '/jsonapi/user/user?' + new URLSearchParams({
            'include': 'user_picture',
            'filter[orGroup][group][conjunction]': 'OR',
            'filter[first][condition][path]': 'drupal_internal__uid',
            'filter[first][condition][memberOf]': 'orGroup',
            'filter[first][condition][operator]': '=',
            'filter[first][condition][value]': term,
            'filter[last][condition][path]': 'field_personal_id',
            'filter[last][condition][memberOf]': 'orGroup',
            'filter[last][condition][operator]': '=',
            'filter[last][condition][value]': term,
        });
    } else if (term && words.length === 1) {
        url = baseUrl + '/jsonapi/user/user?' + new URLSearchParams({
            'include': 'user_picture',
            'filter[orGroup][group][conjunction]': 'OR',
            'filter[display][condition][path]': 'name',
            'filter[display][condition][memberOf]': 'orGroup',
            'filter[display][condition][operator]': 'CONTAINS',
            'filter[display][condition][value]': term,
            'filter[first][condition][path]': 'field_first_name',
            'filter[first][condition][memberOf]': 'orGroup',
            'filter[first][condition][operator]': 'STARTS_WITH',
            'filter[first][condition][value]': term,
            'filter[last][condition][path]': 'field_last_name',
            'filter[last][condition][memberOf]': 'orGroup',
            'filter[last][condition][operator]': 'STARTS_WITH',
            'filter[last][condition][value]': term,
        });
    } else if (words.length > 1) {
        url = baseUrl + '/jsonapi/user/user?' + new URLSearchParams({
            'include': 'user_picture',
            'filter[orGroupOne][group][conjunction]': 'OR',
            'filter[orGroupTwo][group][conjunction]': 'OR',
            'filter[firstOne][condition][path]': 'name',
            'filter[firstOne][condition][memberOf]': 'orGroupOne',
            'filter[firstOne][condition][operator]': 'CONTAINS',
            'filter[firstOne][condition][value]': words[0],
            'filter[firstTwo][condition][path]': 'field_first_name',
            'filter[firstTwo][condition][memberOf]': 'orGroupOne',
            'filter[firstTwo][condition][operator]': 'STARTS_WITH',
            'filter[firstTwo][condition][value]': words[0],
            'filter[lastOne][condition][path]': 'name',
            'filter[lastOne][condition][memberOf]': 'orGroupTwo',
            'filter[lastOne][condition][operator]': 'CONTAINS',
            'filter[lastOne][condition][value]': words[1],
            'filter[lastTwo][condition][path]': 'field_last_name',
            'filter[lastTwo][condition][memberOf]': 'orGroupTwo',
            'filter[lastTwo][condition][operator]': 'STARTS_WITH',
            'filter[lastTwo][condition][value]': words[1],
        });
    }

    return url;
}
