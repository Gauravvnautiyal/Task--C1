import { useState } from "react";
import "./Post.css";

function Post() {
  // which type is selected: "question" or "article"
  const [postType, setPostType] = useState("question");

  // form values
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");   // question only
  const [abstract, setAbstract] = useState(""); // article only
  const [articleText, setArticleText] = useState(""); // article only
  const [tags, setTags] = useState("");

  // error messages shown under the form
  const [errors, setErrors] = useState([]);

  // clear everything when user switches type
  function changeType(type) {
    setPostType(type);
    setTitle("");
    setProblem("");
    setAbstract("");
    setArticleText("");
    setTags("");
    setErrors([]);
  }

  // check all the inputs, return a list of errors
  function validate() {
    const list = [];

    if (title.trim().length < 5) {
      list.push("Title must be at least 5 characters.");
    }

    if (postType === "question") {
      if (problem.trim().length < 20) {
        list.push("Problem description must be at least 20 characters.");
      }
    } else {
      if (abstract.trim().length < 20) {
        list.push("Abstract must be at least 20 characters.");
      }
      if (articleText.trim().length < 50) {
        list.push("Article text must be at least 50 characters.");
      }
    }

    // tags: comma separated, 1 to 3 tags
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");

    if (tagList.length === 0) {
      list.push("Please add at least 1 tag.");
    } else if (tagList.length > 3) {
      list.push("You can add up to 3 tags only.");
    }

    return list;
  }

  function handlePost() {
    const list = validate();
    setErrors(list);

    if (list.length > 0) {
      alert("Error: your post could not be sent. Please fix the errors.");
    } else {
      alert("Your post has been sent successfully!");
      changeType(postType); // reset the form
    }
  }

  return (
    <div className="post-page">
      <h3 className="bar">New Post</h3>

      {/* select post type */}
      <div className="row">
        <span>Select Post Type:</span>
        <label>
          <input
            type="radio"
            name="type"
            checked={postType === "question"}
            onChange={() => changeType("question")}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="type"
            checked={postType === "article"}
            onChange={() => changeType("article")}
          />
          Article
        </label>
      </div>

      <h3 className="bar">What do you want to ask or share</h3>

      {/* conditional rendering: QUESTION form */}
      {postType === "question" && (
        <div>
          <div className="row">
            <label>Title</label>
            <input
              type="text"
              placeholder="Start your question with how, what, why, etc."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <label>Describe your problem</label>
          <textarea
            className="big"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
        </div>
      )}

      {/* conditional rendering: ARTICLE form */}
      {postType === "article" && (
        <div>
          <div className="row">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <label>Abstract</label>
          <textarea
            className="small"
            placeholder="Enter a 1-paragraph abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
          />

          <label>Article Text</label>
          <textarea
            className="big"
            placeholder="Enter the article text"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          />
        </div>
      )}

      {/* tags (same for both types) */}
      <div className="row">
        <label>Tags</label>
        <input
          type="text"
          placeholder={
            postType === "question"
              ? "Please add up to 3 tags to describe what your question is about e.g., Java"
              : "Please add up to 3 tags to describe what your article is about e.g., Java"
          }
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      {/* show validation errors */}
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      <div className="btn-row">
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}

export default Post;