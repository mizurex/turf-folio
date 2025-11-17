export type PostMetadata = {
  title: string;
  description?: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
  category?: string;
  pinned?: boolean;
  link?: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};


