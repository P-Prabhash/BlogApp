const Blog = require("../models/blogModel");

// GET all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET single blog
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE blog
const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const blog = await Blog.create({
            title,
            content,
            author
        });

        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE blog
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};