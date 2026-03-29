import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.POCKETBASE_URL);

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  expand?: { category: Category };
  tags: string[];
  published: boolean;
  publication_date: string;
  created: string;
  updated: string;
}

export function getCoverUrl(article: Article, thumb = '800x400'): string {
  if (!article.cover_image) return '/images/og-default.png';
  return pb.files.getURL(article as any, article.cover_image, { thumb });
}

export async function getArticles(page = 1, perPage = 12) {
  return pb.collection('articles').getList<Article>(page, perPage, {
    filter: 'published = true',
    sort: '-publication_date',
    expand: 'category',
  });
}

export async function getArticleBySlug(slug: string) {
  return pb.collection('articles').getFirstListItem<Article>(
    `slug = "${slug}" && published = true`,
    { expand: 'category' }
  );
}

export async function getArticlesByCategory(categorySlug: string, page = 1) {
  const cat = await pb.collection('categories').getFirstListItem<Category>(
    `slug = "${categorySlug}"`
  );
  return pb.collection('articles').getList<Article>(page, 12, {
    filter: `published = true && category = "${cat.id}"`,
    sort: '-publication_date',
    expand: 'category',
  });
}

export async function getCategories() {
  return pb.collection('categories').getFullList<Category>({ sort: 'name' });
}

export async function getFeaturedArticles(limit = 3) {
  return pb.collection('articles').getList<Article>(1, limit, {
    filter: 'published = true',
    sort: '-publication_date',
    expand: 'category',
  });
}
