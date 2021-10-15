/**
It simply generate an object with the url params.
Return an empty object when no valid params was provided
Valid params are ["eyeColor", "age"]
@return {Object}
*/
const filters = {};
const params = new URLSearchParams(window.location.search);

if (
  params.has("eyeColor") &&
  ["blue", "brown", "green"].includes(params.get("eyeColor"))
) {
  filters.eyeColor = params.get("eyeColor");
}

if (
  params.has("age") &&
  parseInt(params.get("age")) > 19 &&
  parseInt(params.get("age")) < 42
) {
  const ageFilterRules = [
    {
      min: 20,
      max: 25,
    },
    {
      min: 26,
      max: 30,
    },
    {
      min: 31,
      max: 35,
    },
    {
      min: 36,
      max: 41,
    },
  ];
  for (const ageRule of ageFilterRules) {
    const { min, max } = ageRule;
    if (
      parseInt(params.get("age")) >= min &&
      parseInt(params.get("age")) <= max
    ) {
      filters.age = {
        min,
        max,
      };
    }
  }
}
export default filters;
