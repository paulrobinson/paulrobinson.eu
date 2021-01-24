#!/usr/bin/env node

const fs = require("fs");
const urlMetadata = require("url-metadata");
const request = require("request");
const path = require("path");
const url = require("url");

const targetUrl = process.argv[2];

const download = async (url, fileName) => {
  return new Promise((resolve, reject) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(fileName))
        .on("close", resolve);
    });
  });
};

const createMarkdown = async () => {
  const metadata = await urlMetadata(targetUrl);

  const title = metadata.title;
  const imageUrl = metadata["og:image"];
  const cover = path.basename(url.parse(imageUrl).pathname);
  const slug = path.basename(url.parse(targetUrl).pathname);

  // Look for something that looks like a date;
  // it varies from site to site and many don't have it at all
  let date = "unknown";
  const fields = Object.keys(metadata);
  const dateFields = fields.filter(name => name.includes("time") || name.includes("date"));
  const dateField = dateFields.find(field => metadata[field] && metadata[field].length > 0);
  if (dateField) {
    date = new Date(Date.parse(metadata[dateField])).toISOString().slice(0, 10);
  }

  const ogAuthor = metadata.author;
  // If the name is a variation of my name, just use my name
  let author = ogAuthor ? ogAuthor : "holly cummins";
  if (author.toLowerCase() === "holly k cummins") {
    author = "holly cummins";
  }

  const dir = `./content/publications/${date}--${slug}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const fileName = `${dir}/index.md`;

  let str = `---
title: "${title}"
url: ${targetUrl}
author: ${author}
cover: ${cover}
category: untagged
---

${metadata.description}`;

  fs.writeFileSync(fileName, str, "utf8");

  const imagePath = `${dir}/${cover}`;

  await download(imageUrl, imagePath);
};

return createMarkdown();
