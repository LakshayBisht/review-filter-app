export const getProductList = (data) => [...new Set(data.map(obj => obj.appID))].sort();

export const getReviewList = (data, product) => data.filter(obj => obj.appID === product);

export const sortByDate = (data) => data.sort((a,b) => new Date(b.reviewDate) - new Date(a.reviewDate));

export const getFilterContent = (data) => {
  let ratingObj = {}, versionObj = {}, countriesObj = {};
  let arrRating = [], arrVersion = [], arrCountries = [];
  data.forEach(obj => {
    if (ratingObj[obj.rating] === undefined)
      ratingObj[obj.rating] = 1;
    else 
      ++ratingObj[obj.rating];
    if (versionObj[obj.version] === undefined)
      versionObj[obj.version] = 1;
    else 
      ++versionObj[obj.version];
    if (countriesObj[obj.countryName] === undefined)
      countriesObj[obj.countryName] = 1;
    else 
      ++countriesObj[obj.countryName];
  });
  const max = Object.values(ratingObj).reduce((acc, curr) => acc > curr ? acc : curr, 0);
  Object.entries(ratingObj).forEach(([key, value]) => arrRating.push({rating: key,bar: (value / max * 100), value: value}));
  Object.entries(versionObj).forEach(([key, value]) => arrVersion.push({version: key, value: value}));
  Object.entries(countriesObj).forEach(([key, value]) => arrCountries.push({countryName: key, value: value}));
  return {ratings: arrRating.reverse(), versions: arrVersion.sort((a, b) => b.version.localeCompare(a.version)), countries: arrCountries.sort((a, b) => b.value - a.value)};
}

export const getFilteredData= (data, filters) => {
  const time = {'All time': 'all', 'This week': 7, 'This month': 30, 'This year': 365}
  if (filters.time !== 'All time')
    data = data.filter(obj => daysDifference(obj.reviewDate) <= time[filters.time] )
  if (filters.rating !== 'all') {
    data = data.filter(obj => obj.rating === filters.rating);
  }
  if (filters.version !== 'all') {
    data = data.filter(obj => obj.version === filters.version);
  }
  if (filters.countryName !== 'all') {
    data = data.filter(obj => obj.countryName === filters.countryName);
  }
  return data;
}

const daysDifference = (date) => parseInt(Math.round((new Date() - new Date(date)) / (1000*60*60*24)));

export const getDays = (date) => {
  let days = daysDifference(date);
  let dayCount;
  if (days === 0) 
    dayCount = 'few hours ago';
  else if (days === 1) {
    dayCount = '1 day ago';
  }
  else if (days < 7)
    dayCount = `${days} days ago`;
  else if (days < 14) 
    dayCount = `1 week ago`;
  else if (days < 30) 
    dayCount = `${Math.floor(days / 7)} weeks ago`;
  else if (days < 60)
    dayCount = `1 month ago`;
  else if (days < 365)
    dayCount = `${Math.floor(days / 30)} months ago`;
  else if (days < 730)
    dayCount = `1 year ago`
  else if (days >= 730)
    dayCount = `${Math.floor(days / 365)} years ago`
  return dayCount;
}
