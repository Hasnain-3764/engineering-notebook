const fs = require('fs');
const path = require('path');

// Get title from command line arguments
const titleArgs = process.argv.slice(2);
if (titleArgs.length === 0) {
  console.error('❌ Please provide a title. Usage: npm run new:blog "My Blog Title"');
  process.exit(1);
}

const title = titleArgs.join(' ');

// Formatter to create YYYY-MM-DD
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const fileName = `${formattedDate}-${slug}.md`;
const filePath = path.join(__dirname, '..', 'blog', fileName);

const template = `---
slug: ${slug}
title: "${title}"
authors: [hasnain]
tags: []
---

Write your introduction here...

<!-- truncate -->

Continue the rest of your post here...
`;

if (fs.existsSync(filePath)) {
  console.error(`❌ File already exists: ${fileName}`);
  process.exit(1);
}

fs.writeFileSync(filePath, template, 'utf8');
console.log(`✅ Success! Created new blog post at: blog/${fileName}`);
console.log(`   Open it in VS Code and start writing!`);
