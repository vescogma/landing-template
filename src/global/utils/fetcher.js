const DEFAULT_PARAMS = {
  'credentials': 'same-origin',
  'mode': 'cors',
  'redirect': 'follow',
};

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const BASE_URL = '/';

function fetcher({ endpoint = BASE_URL, config = {}, headers = {}, json = true }) {
  const extendedConfig = { ...DEFAULT_PARAMS, ...params };
  extendedConfig.headers = { ...DEFAULT_HEADERS, ...headers };
  const request = fetch(endpoint, extendedConfig).then(checkStatus);
  if (json) {
    return request.then(response => response.json());
  }
  return request;
}

// fetch helper functions
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then((err) => {
    const error = new Error(response.statusText);
    error.response = err || {};
    throw error;
  });
}

function createQueryString(queries) {
  const queryStack = [];
  for (const p in queries) {
    if (queries.hasOwnProperty(p)) {
      queryStack.push(encodeURIComponent(p) + '=' + encodeURIComponent(queries[p]));
    }
  }
  return queryStack.length > 0 ? '?' + queryStack.join('&') : '';
}

function createEndpoint({ pieces = [], base = true, query = {} }) {
  const queryString = createQueryString(query);
  return (base ? BASE_URL : '/') + pieces.join('/') + queryString;
}

// modular rest calls
export function get({ pieces = [], query = {}, base = true, config = {} }) {
  const endpoint = createEndpoint({ pieces, base, query });
  config.method = 'get';
  return fetcher({ endpoint, config });
}

export function post({ pieces = [], body = {}, base = true, config = {} }) {
  const endpoint = createEndpoint({ pieces, base });
  config.method = 'post';
  config.body = JSON.stringify(body);
  return fetcher({ endpoint, config });
}

export function put({ pieces = [], body = {}, base = true, config = {} }) {
  const endpoint = createEndpoint({ pieces, base });
  config.method = 'put';
  config.body = JSON.stringify(body);
  return fetcher({ endpoint, config });
}

export function destroy({ pieces = [], body = {}, base = true, config = {} }) {
  const endpoint = createEndpoint({ pieces, base });
  config.method = 'delete';
  config.body = JSON.stringify(body);
  return fetcher({ endpoint, config });
}

export function download(pieces = [], query = {}, base = true, config = {}) {
  const endpoint = createEndpoint({ pieces, base, query });
  return fetcher({ endpoint, config, json: false })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.id = 'blobber';
      a.href = url;
      a.download = 'feedback.csv';
      a.click();
    });
}