/**
@params {Array} datas. The datas form the JSON file but it could be from db, models.
@params {Object} filters. The filters to filter the datas
@return {String}
*/

export default (datas = [], filters = {}) => {
  if (!datas.length) {
    return null;
  }
  if (filters.eyeColor) {
    datas = datas.filter((data) => data.eyeColor === filters.eyeColor);
  }
  if (filters.age) {
    datas = datas.filter(
      (data) => data.age >= filters.age.min && data.age <= filters.age.max
    );
  }
  const body =
    datas.length &&
    datas.reduce((acc, data) => {
      acc += `<tr>
            <td>${data.name.last || "Non défini"}</td>
            <td>${data.name.first || "Non défini"}</td>
            <td>${data.age || "Non défini"}</td>
            <td>${data.eyeColor || "Non défini"}</td>
            <td>${data.email || "Non défini"}</td>
            <td>${data.company || "Non défini"}</td>
            <td>${data.phone || "Non défini"}</td>
          </tr>`;
      return acc;
    }, "");
  return body;
};
