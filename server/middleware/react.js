import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Router } from '../../src/features/router';

const indexPath = path.join(__dirname, '..', '..', 'index.html');
const indexHTML = fs.readFileSync(indexPath).toString();

const reactMiddleware = async ctx => {
  let context = {};

  const content = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <Router />
    </StaticRouter>
  );
  
  const bodyWithContent = indexHTML.replace('<div id="root">', `<div id="root">${content}`);

  if (context.url) {
    ctx.status = 302;
    ctx.redirect(context.url);
  }

  if (context.status === 404) {
    ctx.status = 404;
  } else {
    ctx.status = 200;
  }

  ctx.body = bodyWithContent;
  ctx.type = 'html';

};

module.exports = reactMiddleware;
