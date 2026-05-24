# Comprehensive Writing Guide for Your Site

Welcome! This guide explains exactly how to add, edit, remove, and format content on your site. Since the **Blog** is your primary focus, we'll start there.

---

## 1. 📝 Managing the Blog

The blog is chronological, fully tagged, and meant for your active thoughts, learning logs, and deep-dives (like your poem analyses or personal growth stories).

### Adding a New Blog Post
The easiest way is to use the script I set up for you.
1. Open your VS Code Terminal.
2. Run: `npm run new:blog "Your Epic Catchy Title"`
3. Look in the `blog/` folder. You will see a new file like `2026-05-24-your-epic-catchy-title.md`. 
4. Open it, modify the tags (e.g., `tags: [life-lessons, finance]`), and start writing!

*Note: The `<!-- truncate -->` line in the markdown file is important! Everything **above** it will show as a preview snippet on the blog feed, and everything **below** it is the rest of your article.*

### Editing a Blog Post
1. Open the `blog/` folder in VS Code.
2. Click on the post you want to change.
3. Edit the text and hit `Ctrl + S`. The site will instantly update.

### Removing a Blog Post
1. Right-click the `.md` file inside the `blog/` folder and select **Delete**.
2. That's it! It is permanently removed from the timeline.

---

## 2. 🖼️ Using Images in Your Blogs (Next-Level Setup)

A well-styled image makes a blog post 10x better. I have added custom CSS to your site so ANY image you post will automatically get **rounded corners**, a **sleek shadow**, and a **slight zoom effect** when readers hover over them!

There are two ways to add images:

### Method A: The Static Folder (Good for logos / re-used images)
1. Drag the image into the `static/img/` folder (e.g., `my-chart.png`).
2. Inside your markdown file, type:
   ```md
   ![A description of my chart](/img/my-chart.png)
   ```

### Method B: Co-Locating (The BEST method for rich Blog Posts)
If you have a blog post with 5 images, keep them bundled together!
1. Inside the `blog/` folder, create a new **folder** named after your post (e.g., `blog/2026-05-24-stock-analysis/`).
2. Move your markdown file into that folder and rename it to `index.md`.
3. Drop all your photos into that exact same folder.
4. In your markdown file, you just link it directly!
   ```md
   ![Stock chart from May](./stock-chart.png)
   ```

---

## 3. 📚 Managing the Notes / Portfolio Sections

This is for your permanent, polished knowledge (Economics notes, Math formulas, Literature Portfolios).

### Adding a New Note
1. Open the `docs/` folder, then open the specific subject folder (e.g., `docs/finance/`).
2. Create a new `.md` file (e.g., `investing-rules.md`).
3. Add the Snippet: Type `docfront` in the file and press `Tab` to auto-fill the Docusaurus header. 
4. Fill in the title and start writing. The sidebar will automatically grab it and put it under Finance on your live website.

### Editing / Removing Notes
It works identically to the blog:
* **Edit**: Open the file in `docs/...`, change the text, save.
* **Remove**: Delete the `.md` file. It completely vanishes from the sidebar.

---

## 4. ✨ Pro-Formatting Tips

Because you have advanced integrations enabled, you can do this anywhere on your site:

### Math & Formulas
Type `math` and press `Tab` to insert a LaTeX equation.
$$
E = mc^2
$$

### Flowcharts
Type `mermaid-flow` and press `Tab` to insert a dynamic flowchart. These are great for explaining systems or thoughts visually!

### Beautiful Quotes
Just use a standard markdown quote `>`. I have styled them to look like professional editorial pull-quotes:
> "A learning portfolio is a way for you to enhance your learning experience by evaluating, reviewing, reflecting and revising..."
