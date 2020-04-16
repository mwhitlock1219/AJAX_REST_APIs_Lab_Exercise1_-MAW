//		1. Get all posts
function getAllPosts() {
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function (info) {
		console.log(info);
		let output = $('#output')
		output.text(JSON.stringify(info))
	})
}
//		2. Get post with id of 10

function getPostId(id) {
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id, function (info) {
		console.log(info);
		let output = $('#output')
		output.text(JSON.stringify(info))
	})
}

//		3. Get the comments from post with id of 12 
//			- note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12

function getCommentsId(id) {
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=" + id, function (info) {
		console.log(info);
		let output = $('#output')
		output.text(JSON.stringify(info))
	})
}
//		4. Get all the posts from user with id of 2

function getAllPostId(id) {
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?userID=" + id, function (info) {
		console.log(info);
		let output = $('#output')
		output.text(JSON.stringify(info))
	})
}
//		5. Create a new post and log the id generated for it by the server

function newPostLog() {
	$.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",{
		userID: 1,
		title: "My New Post",
		body: "This is the body"
	},function(info){
		console.log(info.id)
		let output = $('#output')
		output.text(JSON.stringify(info.id))	// logs only the generated id
		// output.text(JSON.stringify(info))	//logs the whole object
	})
}

//		6. Replace the post with id of 12 and render the responseJSON

// function replacePost(id) {
// 	$.ajax({
// 		method: "PUT",
// 		url: "https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id,
// 		data:{
// 			userID:1,
// 			title: "New Post",
// 			body: "New post added"
// 		}, 
// 		complete: function(response){
// 			console.log(response.responseJSON);
// 		}
// 	})
// }

//		7. Update the title of post with id of 12 and render responseJSON

function updateTitle(id){
	$.ajax({
		method: 'PATCH',
		url: "https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id,
		data: {
			title: "Patched/Updated it"
		},
		complete: function(response){
			console.log(response.responseJSON);
		}
	})
}
//		8. Delete the post with id of 12 and render a success message

function deletePost(id){
	$.ajax({
		method: 'DELETE',
		url: "https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=" + id,
		complete: function(response){
			console.log(response.statusText);
		}
	})
}

//		9. Display a list of posts.

//		10. When the user clicks on a post, display all the comments from that post

//		11. Display a link back to all posts



$(document).ready(function(){
	$('#getAll').on('click', getAllPosts)
	$('#post10').on('click', function(){
		getPostId(10)
	})
	$('#comments12').on('click', function(){
		getCommentsId(12)
	})
	$('#user2').on('click', function(){
		getAllPostId(2)
	})
	$('#newPost').on('click', function(){
		newPostLog()
	})
	// $('#replace').on('click', function(){
	// 	replacePost(12)
	// })
	$('#update').on('click', function(){
		updateTitle(12)
	})
	// $('#delete').on('click', function(){
	// 	deletePost(12)
	// })
	// $('#listPosts').on('click', function(){
	// 	UNKNOWN()
	// })
	// $('#allComments').on('click', function(){
	// 	UNKNOWN()
	// })
	// $('#links').on('click', function(){
	// 	UNKNOWN()
	// })
})