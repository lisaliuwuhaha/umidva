//importfetchfrom'dva/fetch';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = newError(response.statusText);
  error.response = response;
  throw error;
}
/**
 *RequestsaURL,returningapromise.
 *
 *@param{string}urlTheURLwewanttorequest
 *@param{object}[options]Theoptionswewanttopassto"fetch"
 *@return{object}Anobjectcontainingeither"data"or"err"
 */
export default async function request(url, options) {
  const response = await fetch(url, options);
  checkStatus(response);
  return await response.json();
}
