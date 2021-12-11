const Post = {
  allPost: async function () {
    try {
      return await db.Post.findAll();
    } catch (error) {
      console.log(error);
    }
  },
  onePost: async function (tex) {
    try {
      return await db.Post.findByPk(tex);
    } catch (error) {
      console.log(error);
    }
  },
  create: async function (post) {
    const response = db.post.create({
      ...post,
    });
    return await response;
  },
  update: async function (post, idPost) {
    const response = db.Post.update(
      {
        ...post,
      },
      {
        where: {
          id: idPost,
        },
      }
    );
    return await response;
  },
  delete: async function (idPost) {
    const response = db.Post.destroy({
      where: {
        id: idPost,
      },
    });
    return await response;
  },
};
