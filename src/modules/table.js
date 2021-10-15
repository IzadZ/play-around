/**
A template like file where we simply display the table with the appropriated data.
return "Aucune donnée trouvée" when no data was provided
*/

/**
@params {String} headers
@params {String} body
@return {String}
*/
export default (headers, body) => {
  if (!body) {
    return "Aucune donnée trouvée";
  }
  return `<table>
    <thead>
      <tr>
        ${headers}
      </tr>
    </thead>
    <tbody>
      ${body}
    </tbody>
  </table>`;
};
