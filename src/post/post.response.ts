interface PostResponse {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

export const responsePosts: PostResponse = {
  id: 'ecdc6b9e-8993-4ff6-962c-e698c50f5b3c',
  createdAt: '2023-04-07T17:20:30.580Z',
  updatedAt: '2023-04-07T17:20:30.580Z',
  published: true,
  title: 'Hello',
  content: 'First post',
  authorId: '26995950-f19e-4a3b-bfa1-f75858ea6a6a',
};
