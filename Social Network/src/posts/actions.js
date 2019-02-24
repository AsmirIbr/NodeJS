import hat from 'hat';

import models from '../models/index';

const Posts = models.Posts;

const list = async(req, res, next) => {
  const result: Array = await Posts.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  // req.params: { { id }: {}, "bookId": "8989" }

  const result: Object = await Posts.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    role,
    context
  }: {
    role: ?string,
    context: string
  } = req.body;

  const postId = hat();

  await Posts.create({
    id: postId,
    role,
    context,
  });
  console.log(Posts)
  res.status(201).send({ Info: `post with id: ${postId} has been created`});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData:{
    role: ?string,
  } = Object.assign({}, req.body);

  await Posts.update(updateData, { where: { id }});
  res.status(204).send({ Info: `post with id: ${postId} has been updated`})
  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Posts.destroy({ where: { id }});
  res.status(202).send({ Info: `post with id: ${postId} has been removed`})
  await next;
};

export default {
  get,
  list,
  create,
  update,
  del
}