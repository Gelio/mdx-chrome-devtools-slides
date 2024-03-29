# Chrome DevTools MDX slides

Slides on Chrome DevTools for the Diploma Seminar course on the MINI Faculty at Warsaw University of
Technology.

The slides were built with [mdx-deck](https://github.com/jxnblk/mdx-deck). See their GitHub page
for more information.

## Requirements

- Node v8.11.0 or higher

## Set up

### Installing the dependencies

```bash
npm install
```

### Building the slides

```bash
npm run build
```

The slides will be saved in the `dist` directory.

#### Exporting to PDF

There is a way to export the slides to a PDF:

```bash
npm run build:pdf
```

The exported PDF will be saved in the `documents` directory. It does not contain videos.

### Deploying the slides to GitHub Pages

```bash
npm run publish:deck
```

## Developing

Run the following command for interactive development with live-reload:

```bash
npm start
```

## Author

Grzegorz Rozdzialik
