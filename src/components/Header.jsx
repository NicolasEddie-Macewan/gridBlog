/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // TODO: Replace return null with your JSX
  return (
	<div id="header">
		<h1>GridBlog</h1>
		<h3>A grid of blog posts!!!</h3>
		<p>Total Posts: { totalPosts } - Total Likes: { totalLikes } - Total Dislikes: { totalDislikes }</p>
	</div>
  );
}
