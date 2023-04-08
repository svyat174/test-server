import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('User API', () => {
  let app: INestApplication;
  let userId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a user', async () => {
    const res = await request(app.getHttpServer())
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      })
      .expect(201);
    expect(res.body.name).toEqual('John Doe');
    expect(res.body.email).toEqual('johndoe@example.com');
    userId = res.body.id;
  });

  it('should get a list of users', async () => {
    const res = await request(app.getHttpServer()).get('/users').expect(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a user by id', async () => {
    const res = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .expect(200);
    expect(res.body.name).toEqual('John Doe');
    expect(res.body.email).toEqual('johndoe@example.com');
  });

  it('should update a user', async () => {
    const res = await request(app.getHttpServer())
      .put(`/users/${userId}`)
      .send({
        name: 'Jane Doe',
      })
      .expect(200);
    expect(res.body.name).toEqual('Jane Doe');
    expect(res.body.email).toEqual('johndoe@example.com');
  });

  it('should delete a user', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/users/${userId}`)
      .expect(204);
    expect(res.body.title).toEqual('Deleted Post');
    expect(res.body.content).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
  });
});

describe('Post API', () => {
  let app: INestApplication;
  let postId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a post', async () => {
    const res = await request(app.getHttpServer())
      .post('/post')
      .send({
        title: 'My First Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: '00000000-0000-0000-0000-000000000000',
        published: true,
      })
      .expect(201);
    expect(res.body.title).toEqual('My First Post');
    expect(res.body.content).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
    postId = res.body.id;
  });

  it('should get a list of posts', async () => {
    const res = await request(app.getHttpServer()).get('/posts').expect(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a post by id', async () => {
    const res = await request(app.getHttpServer())
      .get(`/post/${postId}`)
      .expect(200);
    expect(res.body.title).toEqual('My First Post');
    expect(res.body.content).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
  });

  it('should update a post', async () => {
    const res = await request(app.getHttpServer())
      .put(`/post/${postId}`)
      .send({
        title: 'My First Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: '00000000-0000-0000-0000-000000000000',
        published: true,
      })
      .expect(200);
    expect(res.body.title).toEqual('My Updated Post');
    expect(res.body.content).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
  });

  it('should delete a post', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/post/${postId}`)
      .expect(204);
    expect(res.body.title).toEqual('Deleted Post');
    expect(res.body.content).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
  });
});
