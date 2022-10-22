import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';

export const urlFromFilePath = (doc) => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '');
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    posttitle: { type: 'string', required: true },
    postsubtitle: { type: 'string', required: false },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: false },
    lang: { type: 'string', required: true },
    about: { type: 'string', required: false },
    tags: { type: 'string', required: false },
  },
  computedFields: {
    url_path: {
      type: 'string',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: urlFromFilePath,
    },
    pathSegments: {
      type: 'json',
      resolve: (doc) =>
        doc._raw.flattenedPath
          .split('/')
          .slice(1)
          .map((pathName) => {
            return { pathName };
          }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blog],
  markdown: { rehypePlugins: [highlight] },
});
