import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { Form, Button } from 'react-bootstrap';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [content, setContent] = useState(props.content || '');
  const [image, setImage] = useState(props.image || '');
  const [price, setPrice] = useState(props.price || '');
  const [location, setLocation] = useState(props.location || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, content, image, price, location });
    }
  };

  return (
    <div className="col-6 m-auto">

      <h1 className="mb-4">{actionText}</h1>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3 col-6">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 4 })}
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Input must have more than 3 signs</small>}
        </Form.Group>

        <Form.Group className="mb-3 col-6">
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 4 })}
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">Input must have more than 3 signs</small>}
        </Form.Group>

        <Form.Group className="mb-1 col-6">
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date:Date) => setPublishedDate(date)} />
        </Form.Group>
        {dateError && <small className="d-block form-text text-danger mb-2">Date can't be empty</small>}

        <Form.Group className="mb-1">
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent}/>
        </Form.Group>
        {contentError && <small className="d-block form-text text-danger mb-3">Content can't be empty</small>}

        <Button variant="primary" type="submit" className="my-4">
          {actionText}
        </Button>

      </Form>

    </div>
  );
};

export default PostForm;
