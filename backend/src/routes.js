import express from 'express';

const router = express.Router();


router.get('/users', (req, res) => {
  try {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];
    
    res.status(200).json({
      success: true,
      data: users,
      message: 'Users retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving users',
      error: error.message
    });
  }
});

router.post('/posts', (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        success: false,
        message: 'Title, content, and author are required'
      });
    }
    
    const newPost = {
      id: Date.now(),
      title,
      content,
      author,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json({
      success: true,
      data: newPost,
      message: 'Post created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating post',
      error: error.message
    });
  }
});

export default router;