const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.com/v2/all', {});
  if (response.status === 200) {
    const countries = await response.json();
    return countries.find((c) => c.alpha2Code === countryCode).name;
  } else throw new Error('Unable to fetch data');
};

const getLocation = async () => {
  const response = await fetch(
    'https://ipinfo.io/json?token=794a545bdd8f8a',
    {}
  );

  if (response.status === 200) return await response.json();
  else throw new Error('Unable to fetch data');
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};
