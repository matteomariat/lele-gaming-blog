export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}

export function categoryColor(slug: string): string {
  const map: Record<string, string> = {
    gaming:   'bg-mint text-ink',
    reviews:  'bg-peach text-ink',
    news:     'bg-sky text-ink',
    personal: 'bg-blush text-ink',
    default:  'bg-lavender text-ink',
  };
  return map[slug] ?? map.default;
}
